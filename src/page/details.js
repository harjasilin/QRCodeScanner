

import React from 'react';
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
        <View style={styles.wrapper}>
            <Text style={styles.detail}>Details</Text>
            <Text style={{ color: 'red', fontSize: 20 }}>{data}</Text>

        </View>

    );
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        marginTop: 20
    },
    detail: {
        color: 'black',
        fontSize: 30
    }
});

export default Detail;
