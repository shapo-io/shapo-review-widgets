import React, { useEffect, useRef } from 'react';
import type { ShapoWidgetProps } from './types';

const DEFAULT_EMBED_SCRIPT_URL = 'https://cdn.shapo.io/js/embed.js';

/**
 * ShapoWidget Component
 *
 * A React component that embeds Shapo review widgets into your website.
 * Simply renders a div with the correct ID and injects the embed script.
 *
 * @example
 * ```tsx
 * <ShapoWidget widgetId="your-widget-id" />
 * ```
 */
export function ShapoWidget({
  widgetId,
}: ShapoWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject the embed script if it doesn't already exist
    if(typeof document !== 'undefined' && !document.getElementById('shapo-embed-js')) {
      const script = document.createElement('script');
      script.id = 'shapo-embed-js';
      script.type = 'text/javascript';
      script.src = DEFAULT_EMBED_SCRIPT_URL;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      id={`shapo-widget-${widgetId}`}
    />
  );
}

export default ShapoWidget;
