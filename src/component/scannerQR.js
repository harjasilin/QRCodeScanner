

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

        Alert.alert(data, '', [
            {
                text: 'OK',
                onPress: () => {
                    navigation.navigate('Detail', { data: data });
                },
            },
        ]);
        console.log(data[0].empId, 'data')
        // const dataArray = data.split(',').map(item => item.trim());
        // console.log(dataArray[0].empId, 'khvkhvk');
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
