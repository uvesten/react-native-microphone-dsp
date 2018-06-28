import { NativeModules, NativeEventEmitter } from 'react-native';

const { MicrophoneStream } = NativeModules;
const emitter = new NativeEventEmitter(MicrophoneStream);

export default {
  // TODO: params check
  init: options => MicrophoneStream.init(options),
  start: () => MicrophoneStream.start(),
  pause: () => MicrophoneStream.pause(),
  stop: () => MicrophoneStream.stop(),
  addListener: listener => emitter.addListener('audioData', listener),
};
