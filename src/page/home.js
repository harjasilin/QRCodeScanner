

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('ScannerQR')}
                style={styles.centerText}>
                <Text style={styles.buttonText}>Scan QR Code</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    wrapper:
    {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    centerText: {
        height: 40,
        width: '80%',
        backgroundColor: '#355f85',
        justifyContent: 'center',
        alignItems: 'center', borderRadius: 10

    },
    buttonText: { color: 'white' }

});

export default Home;
