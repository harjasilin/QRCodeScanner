

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    Alert,
    View,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const ScannerQR = ({ navigation }) => {
    const [qrData, setQRData] = useState('')
    const handleRead = ({ data }) => {
        setQRData(data);

        Alert.alert('Scanned', '', [
            {
                text: 'OK',
                onPress: () => {
                    navigation.navigate('Detail', { data: data });
                },
            },
        ]);


    };



    return (
        <QRCodeScanner
            onRead={handleRead}
            flashMode={RNCamera.Constants.FlashMode.auto}
            reactivate={true}
            reactivateTimeout={500}
            showMarker={true}
            topContent={
                <Text style={styles.centerText}>
                    Scan Here!!
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
});

export default ScannerQR;
