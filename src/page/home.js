

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Home = ({ navigation }) => {
    const [showQR, setshowQr] = useState(false)
    const handlePress = () => {
        setshowQr(true)
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('ScannerQR')}
                style={styles.centerText}>
                <Text style={styles.buttonText}>Scan QR Code</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('QRScannerFromGallery')}
                style={[styles.centerText, { marginTop: 20 }]}>
                <Text style={styles.buttonText}>Take From Gallery</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    centerText: {
        height: 40,
        width: '80%', backgroundColor: '#355f85', justifyContent: 'center', alignItems: 'center', borderRadius: 10

    },
    buttonText: { color: 'white' }

});

export default Home;
