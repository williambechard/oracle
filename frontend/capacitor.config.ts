import type { CapacitorConfig } from '@capacitor/cli';
import {KeyboardResize, KeyboardStyle} from "@capacitor/keyboard";

const config: CapacitorConfig = {
  appId: 'com.bechard.oracle',
  appName: 'oracle',
  webDir: 'www',
  server: {
    hostname: '127.0.0.1',
    cleartext: true,
    allowNavigation: ['*'],
  },
  plugins: {
    Keyboard: {
      resize: KeyboardResize.Body,
      style: KeyboardStyle.Dark,
      resizeOnFullScreen: true,
    },
  },
};

export default config;
