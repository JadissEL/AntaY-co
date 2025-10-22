/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Contact form request type
 */
export interface ContactRequest {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Contact form response type
 */
export interface ContactResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: Record<string, unknown>;
}
