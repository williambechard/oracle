import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'oracle',
  webDir: 'www',
  "server": {
    "url": "http://10.0.2.2:80",
    "cleartext": true
  }
};

export default config;
