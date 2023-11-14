

import React from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const App = () => {

  return (
    <QRCodeScanner
      onRead={({ data }) => Alert.alert('hi')}
      flashMode={RNCamera.Constants.FlashMode.torch}
      reactivate={true}
      reactivateTimeout={500}
      showMarker={true}
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code.
        </Text>
      }
    />

  );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default App;
