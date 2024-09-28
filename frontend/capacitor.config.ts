import type { CapacitorConfig } from '@capacitor/cli';
import {KeyboardResize, KeyboardStyle} from "@capacitor/keyboard";

const config: CapacitorConfig = {
  appId: 'com.bechard.oracle',
  appName: 'oracle',
  webDir: 'www',
  server: {
    url: 'http://10.0.2.2:5000',
    cleartext: true,
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
