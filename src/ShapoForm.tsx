import React, { useEffect, useRef } from 'react';
import type { ShapoFormProps } from './types';

const DEFAULT_EMBED_SCRIPT_URL = 'https://cdn.shapo.io/js/embed.js';

/**
 * ShapoForm Component
 *
 * A convenience component for embedding Shapo forms.
 *
 * @example
 * ```tsx
 * <ShapoForm formId="your-form-id" />
 * ```
 */
export function ShapoForm({
  formId,
}: ShapoFormProps) {
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
      id={`shapo-form-${formId}`}
    />
  );
}

export default ShapoForm;
