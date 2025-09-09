declare global {
  interface Window {
    __domTicks: number;
    __lastCheck: { t: number; v: number };
  }
}

export { global };
