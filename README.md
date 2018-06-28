# react-native-microphone-stream
React Native module used for two-way audio

## Install
```
$ npm i git://github.com/chadsmith/react-native-microphone-stream.git
$ react-native link react-native-microphone-stream
```

## Usage
```javascript
import MicStream from 'react-native-microphone-stream';

const listener = MicStream.addListener(data => console.log(data));
MicStream.init({
  bufferSize: 4096,
  sampleRate: 44100,
  bitsPerChannel: 16,
  channelsPerFrame: 1,
});
MicStream.start();
...
MicStream.stop();
listener.remove();
```
