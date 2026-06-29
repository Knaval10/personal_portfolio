/**
 * useFetch.ts
 * A typed fetch hook that returns dummy dev data in development
 * and calls the real API in production.
 *
 * Usage:
 *   const { data, loading, error } = useFetch<ProjectProps[]>("/api/update-projects", DEV_PROJECTS);
 */

"use client";

import { useEffect, useState } from "react";

const IS_DEV = process.env.NODE_ENV === "development";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string, devFallback: T): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: IS_DEV ? devFallback : null,
    loading: !IS_DEV,
    error: null,
  });

  useEffect(() => {
    // In development, skip the API call entirely — use devFallback
    if (IS_DEV) {
      setState({ data: devFallback, loading: false, error: null });
      return;
    }

    let cancelled = false;

    const run = async () => {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: T = await res.json();
        if (!cancelled) setState({ data: json, loading: false, error: null });
      } catch (err) {
        if (!cancelled)
          setState({
            data: null,
            loading: false,
            error: err instanceof Error ? err.message : "Unknown error",
          });
      }
    };

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
}
