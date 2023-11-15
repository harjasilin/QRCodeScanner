import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import RNQRCodeScanner from 'react-native-qrcode-scanner';


const QRScannerFromGallery = () => {
    const [reader, setReader] = useState('');

    const handleImagePicker = async () => {
        const options = {
            title: 'Select QR Code Image',
            mediaType: 'photo',
        };
        ImagePicker.launchImageLibrary({}, (response) => {
            console.log(response.assets[0].uri, 'jhvbchv')
            if (response.assets[0].uri) {
                var path = response.assets[0].originalPath;

                RNQRCodeScanner.scanFile(path)
                    .then((data) => {
                        setReader(data);
                        console.log(data, 'Scanned QR code data');
                    })
                    .catch((error) => {
                        console.error('Error scanning QR code:', error);
                    });

            }
        })
        // const result = await launchImageLibrary(options);
        // setSelectedImage(result.assets[0]?.uri)
        // console.log(result, 'igdbziyvgi')
    };



    return (
        <View>
            <Button title="Select QR Code Image" onPress={handleImagePicker} />
            {reader && (
                <Image
                    source={{ uri: selectedImage }}
                    style={{ width: 200, height: 200 }}
                />
            )}
            {/* {selectedImage && (
                <QRCodeScanner
                    onRead={handleRead}
                    reactivate={true}
                    reactivateTimeout={500}
                    showMarker={true}
                    cameraProps={{ ratio: '1:1' }}

                />
            )} */}
        </View>
    );
};

export default QRScannerFromGallery;

