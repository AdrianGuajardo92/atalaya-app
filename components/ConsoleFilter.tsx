'use client';

import { useEffect } from 'react';

export default function ConsoleFilter() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const originalLog = console.log;
    const originalError = console.error;

    console.log = (...args: unknown[]) => {
      const firstArg = args[0];
      if (typeof firstArg === 'string' && (firstArg.startsWith('[Fast Refresh]') || firstArg.startsWith('[HMR]'))) return;
      originalLog.apply(console, args);
    };

    // Filter Next.js 16 params/searchParams proxy warnings (dev-only noise)
    console.error = (...args: unknown[]) => {
      const firstArg = args[0];
      if (typeof firstArg === 'string') {
        if (firstArg.includes('params are being enumerated')) return;
        if (firstArg.includes('searchParams.length')) return;
        if (firstArg.includes('keys of searchParams were accessed')) return;
        if (firstArg.includes('params` is a Promise and must be unwrapped')) return;
      }
      originalError.apply(console, args);
    };

    return () => {
      console.log = originalLog;
      console.error = originalError;
    };
  }, []);

  return null;
}
