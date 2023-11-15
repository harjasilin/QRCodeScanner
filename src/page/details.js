

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
const Detail = ({ navigation }) => {
    const route = useRoute();
    const data = route?.params?.data;
    return (
        <View style={{ alignItems: 'center', flex: 1, marginTop: 20 }}>
            <Text style={{ color: 'black', fontSize: 30 }}>Details</Text>
            <Text style={{ color: 'red', fontSize: 20 }}>{data}</Text>

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

export default Detail;
