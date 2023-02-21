import DeviceInfo from 'react-native-device-info';

const bundleId = DeviceInfo.getBundleId();
let env;

if (bundleId.includes('wl1')) env = require('./env.wl1.json');
else if (bundleId.includes('wl2')) env = require('./env.wl2.json');

Object.assign(global, env);
