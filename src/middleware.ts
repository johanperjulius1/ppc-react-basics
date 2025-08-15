import { UAParser } from 'ua-parser-js';

// Interface för user agent resultat
export interface UserAgentInfo {
  isBot: boolean;
  isDirectTraffic: boolean;
  deviceType?: string;
  browser?: string;
  os?: string;
}

// Utility-funktion för att analysera user agent
export function analyzeUserAgent(): UserAgentInfo {
  const userAgent = navigator.userAgent || '';

  const parser = new UAParser(userAgent);
  const uaResult = parser.getResult();

  const isBot = uaResult.ua.toLowerCase().includes('bot') || uaResult.device.type === undefined;

  // I en vanlig React-app kan vi inte få referer från middleware
  // Men vi kan använda document.referrer
  const referer = document.referrer;
  const isDirectTraffic = !referer;

  return {
    isBot,
    isDirectTraffic,
    deviceType: uaResult.device.type,
    browser: uaResult.browser.name,
    os: uaResult.os.name
  };
}

// Funktion för att sätta cookies
export function setCookies(isBot: boolean, isDirectTraffic: boolean): void {
  document.cookie = `isBot=${isBot.toString()}; path=/`;
  document.cookie = `isDirectTraffic=${isDirectTraffic.toString()}; path=/`;
}

// Funktion för att läsa cookies
export function getCookies(): { isBot?: string; isDirectTraffic?: string } {
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  return {
    isBot: cookies.isBot,
    isDirectTraffic: cookies.isDirectTraffic
  };
}

// Huvudfunktion som kombinerar allt
export function processUserAgent(): UserAgentInfo {
  const userAgentInfo = analyzeUserAgent();
  setCookies(userAgentInfo.isBot, userAgentInfo.isDirectTraffic);
  return userAgentInfo;
}