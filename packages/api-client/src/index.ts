import type { HealthResponse } from '@threads-connect/types';

export function createApiClient(baseUrl: string) {
  return {
    async health(signal?: AbortSignal): Promise<HealthResponse> {
      const response = await fetch(new URL('/health', baseUrl), { signal });
      if (!response.ok) throw new Error(`API health request failed (${response.status})`);
      return (await response.json()) as HealthResponse;
    },
  };
}
