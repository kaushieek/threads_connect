export type HealthStatus = 'ok' | 'degraded';

export interface HealthResponse {
  status: HealthStatus;
  timestamp: string;
  checks: { database: 'up' | 'down'; redis: 'up' | 'down' };
}
