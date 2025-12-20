'use client';

import { useEffect } from 'react';

export default function ConsoleFilter() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const originalLog = console.log;
      console.log = (...args: unknown[]) => {
        const firstArg = args[0];
        if (typeof firstArg === 'string' && firstArg.includes('[Fast Refresh]')) return;
        if (typeof firstArg === 'string' && firstArg.includes('[HMR]')) return;
        originalLog.apply(console, args);
      };
    }
  }, []);

  return null;
}
