import { useEffect, useState } from 'react';
import { analyzeUserAgent, redirectBotIfNeeded, redirectBotOrDirectTrafficIfNeeded, processUserAgent, UserAgentInfo } from '../middleware';

export interface BotDetectionResult extends UserAgentInfo {
  wasRedirected: boolean;
}

/**
 * React hook för bot-detection och automatisk redirect
 * 
 * @param enableAutoRedirect - Om true, redirectar bots automatiskt till /bot-optimized
 * @returns Object med bot-information och redirect-status
 */
export function useBotDetection(enableAutoRedirect: boolean = true): BotDetectionResult {
  const [botInfo, setBotInfo] = useState<BotDetectionResult>({
    isBot: false,
    isDirectTraffic: false,
    wasRedirected: false
  });

  useEffect(() => {
    // Analysera user agent
    const userAgentInfo = processUserAgent();
    
    let wasRedirected = false;
    
    // Utför redirect om det är aktiverat
    if (enableAutoRedirect) {
      wasRedirected = redirectBotIfNeeded();
    }

    setBotInfo({
      ...userAgentInfo,
      wasRedirected
    });

    // Debug logging (kan tas bort i produktion)
    if (process.env.NODE_ENV === 'development') {
      console.log('Bot Detection Results:', {
        isBot: userAgentInfo.isBot,
        isDirectTraffic: userAgentInfo.isDirectTraffic,
        deviceType: userAgentInfo.deviceType,
        browser: userAgentInfo.browser,
        os: userAgentInfo.os,
        wasRedirected,
        userAgent: navigator.userAgent
      });
    }
  }, [enableAutoRedirect]);

  return botInfo;
}

/**
 * Hook för bot-detection OCH direct traffic med automatisk redirect
 * 
 * @param enableAutoRedirect - Om true, redirectar både bots och direct traffic till /bot-optimized
 * @returns Object med bot-information och redirect-status
 */
export function useBotAndDirectTrafficDetection(enableAutoRedirect: boolean = true): BotDetectionResult {
  const [botInfo, setBotInfo] = useState<BotDetectionResult>({
    isBot: false,
    isDirectTraffic: false,
    wasRedirected: false
  });

  useEffect(() => {
    // Analysera user agent
    const userAgentInfo = processUserAgent();
    
    let wasRedirected = false;
    
    // Utför redirect för både bots OCH direct traffic om det är aktiverat
    if (enableAutoRedirect) {
      wasRedirected = redirectBotOrDirectTrafficIfNeeded();
    }

    setBotInfo({
      ...userAgentInfo,
      wasRedirected
    });

    // Debug logging (kan tas bort i produktion)
    if (process.env.NODE_ENV === 'development') {
      console.log('Bot + Direct Traffic Detection Results:', {
        isBot: userAgentInfo.isBot,
        isDirectTraffic: userAgentInfo.isDirectTraffic,
        deviceType: userAgentInfo.deviceType,
        browser: userAgentInfo.browser,
        os: userAgentInfo.os,
        wasRedirected,
        redirectReason: userAgentInfo.isBot ? 'bot' : (userAgentInfo.isDirectTraffic ? 'direct' : 'none'),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'no referrer'
      });
    }
  }, [enableAutoRedirect]);

  return botInfo;
}

/**
 * Förenklad hook som bara returnerar om besökaren är en bot
 * Användbar för konditionell rendering utan redirect
 */
export function useIsBot(): boolean {
  const [isBot, setIsBot] = useState(false);

  useEffect(() => {
    const userAgentInfo = analyzeUserAgent();
    setIsBot(userAgentInfo.isBot);
  }, []);

  return isBot;
}
