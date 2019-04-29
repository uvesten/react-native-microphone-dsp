# react-native-microphone-dsp
React Native module used for reading raw pcm data

## Install
```
$ npm i git://github.com/uvesten/react-native-microphone-dsp.git
$ react-native link react-native-microphone-dsp
```

## Usage
```javascript
import MicStream from 'react-native-microphone-dsp';

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

## TODO

Right now, the bit stream is different on the two platforms once it gets into the javascript layer. Need to investigate if the settings for the native recording needs to be changed on one of the platforms, or if the problem lies in differing React Native WritableArray implementation on one of the platforms. 
