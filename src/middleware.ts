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

// Funktion för att redirecta bots OCH direct traffic till optimized sida
export function redirectBotOrDirectTrafficIfNeeded(): boolean {
  const userAgentInfo = analyzeUserAgent();
  
  // Kontrollera om vi redan är på bot-optimized sidan
  const currentPath = window.location.pathname;
  if (currentPath === '/bot-optimized') {
    return false; // Redan på rätt sida
  }
  
  // Redirecta både bots OCH direct traffic
  if (userAgentInfo.isBot || userAgentInfo.isDirectTraffic) {
    // Lägg till query parameters för att spåra varifrån redirecten kom
    const fromPath = encodeURIComponent(currentPath);
    const reason = userAgentInfo.isBot ? 'bot' : 'direct';
    window.location.href = `/bot-optimized?from=${fromPath}&reason=${reason}`;
    return true; // Redirect genomförd
  }
  
  return false; // Ingen redirect
}

// Behåll gamla funktionen för bakåtkompatibilitet
export function redirectBotIfNeeded(): boolean {
  const userAgentInfo = analyzeUserAgent();
  
  // Kontrollera om vi redan är på bot-optimized sidan
  const currentPath = window.location.pathname;
  if (currentPath === '/bot-optimized') {
    return false; // Redan på rätt sida
  }
  
  // Redirecta bara bots, inte vanliga användare
  if (userAgentInfo.isBot) {
    // Lägg till query parameter för att spåra varifrån redirecten kom
    const fromPath = encodeURIComponent(currentPath);
    window.location.href = `/bot-optimized?from=${fromPath}`;
    return true; // Redirect genomförd
  }
  
  return false; // Ingen redirect
}

// Huvudfunktion som kombinerar allt
export function processUserAgent(): UserAgentInfo {
  const userAgentInfo = analyzeUserAgent();
  setCookies(userAgentInfo.isBot, userAgentInfo.isDirectTraffic);
  return userAgentInfo;
}
