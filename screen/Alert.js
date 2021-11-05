/* eslint-disable prettier/prettier */
import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    Header,
    SearchBar
} from 'react-native-elements';

const primary = '#2e3190';
const secondary = '#fab917';

const AlertScreen = props => {
     return (
        <View style={styles.container}>
            <Header backgroundColor={primary} />
        </View>
     );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AlertScreen;