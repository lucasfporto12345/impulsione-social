/// <reference types="vite/client" />

declare const __BASE_PATH__: string;

interface Window {
  dataLayer: Array<Record<string, unknown>>;
}
