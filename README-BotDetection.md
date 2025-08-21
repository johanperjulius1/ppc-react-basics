# Bot Detection & Optimization System

This system provides bot detection and automatic redirection to SEO-optimized content for search engine crawlers.

## What's Implemented

### 1. **Bot-Optimized Route**: `/bot-optimized`
- **Purpose**: Serves simplified, SEO-focused content specifically for bots
- **Features**: 
  - Clean HTML structure with semantic markup
  - Enhanced meta tags and page titles
  - Internal links to all main casino pages
  - Fast loading (minimal CSS, no heavy components)
  - Essential content only

### 2. **Bot Detection Logic** (`src/middleware.ts`)
- Analyzes User-Agent strings to identify bots
- Sets cookies to track bot vs human traffic
- Provides redirect functionality for bots

### 3. **React Hooks** (`src/hooks/useBotDetection.ts`)
- `useBotDetection()` - Full bot detection with optional auto-redirect
- `useIsBot()` - Simple boolean check for conditional rendering

## How to Use

### Option A: Automatic Bot Redirect (Original)
Add this to redirect only bots:

```tsx
import { useBotDetection } from '../hooks/useBotDetection';

const YourPage = () => {
  // This will automatically redirect ONLY bots to /bot-optimized
  const botInfo = useBotDetection(true);
  
  // Rest of your component...
  return <div>Your normal page content</div>;
};
```

### Option A2: Automatic Bot + Direct Traffic Redirect (New - Recommended)
Add this to redirect both bots AND direct traffic:

```tsx
import { useBotAndDirectTrafficDetection } from '../hooks/useBotDetection';

const YourPage = () => {
  // This will redirect BOTH bots AND direct traffic to /bot-optimized
  const botInfo = useBotAndDirectTrafficDetection(true);
  
  // Rest of your component...
  return <div>Your normal page content</div>;
};
```

### Option B: Conditional Rendering
Show different content to bots without redirecting:

```tsx
import { useIsBot } from '../hooks/useBotDetection';

const YourPage = () => {
  const isBot = useIsBot();
  
  if (isBot) {
    return <SimpleBotFriendlyContent />;
  }
  
  return <RegularPageContent />;
};
```

### Option C: Manual Bot Detection
For custom logic without hooks:

```tsx
import { analyzeUserAgent, redirectBotIfNeeded } from '../middleware';

// Check if user is a bot
const userInfo = analyzeUserAgent();
console.log('Is bot:', userInfo.isBot);

// Manually trigger redirect if needed
const wasRedirected = redirectBotIfNeeded();
```

## Testing

### Test Bot Detection:
1. Open browser DevTools
2. Go to Network tab → User Agent
3. Select a bot user agent (like "Googlebot")
4. Navigate to any page with bot detection enabled
5. You should be redirected to `/bot-optimized`

### Test Direct Access:
- Visit `http://localhost:8080/bot-optimized` directly
- You should see the bot-optimized content

## Bot-Optimized Content Features

The `/bot-optimized` page includes:
- ✅ Semantic HTML structure (H1, H2, H3 hierarchy)
- ✅ Clean, readable content in Swedish
- ✅ Internal links to all main casino categories
- ✅ Enhanced meta description
- ✅ Fast loading (inline styles, minimal dependencies)
- ✅ Mobile-friendly responsive design
- ✅ Accessibility features

## Benefits for SEO

1. **Faster crawling** - Simplified content loads faster
2. **Better indexing** - Clean HTML structure is easier to parse
3. **Enhanced metadata** - Optimized titles and descriptions
4. **Internal linking** - Clear site structure for crawlers
5. **Content focus** - Essential information without distractions

## Configuration

### Disable Auto-Redirect:
```tsx
const botInfo = useBotDetection(false); // No auto-redirect
```

### Customize Bot Detection:
Edit `src/middleware.ts` to modify the bot detection logic:

```tsx
const isBot = uaResult.ua.toLowerCase().includes('bot') || 
              uaResult.ua.toLowerCase().includes('crawler') ||
              uaResult.device.type === undefined;
```

## Next Steps

1. **Test** with different bot user agents
2. **Customize** the bot-optimized content for your specific needs
3. **Add** bot detection to main pages (Index, NyaCasinon, etc.)
4. **Monitor** in analytics to see bot vs human traffic
5. **Optimize** based on search console feedback
