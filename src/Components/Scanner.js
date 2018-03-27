import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ScannerPopup from './Common/ScannerPopup';

export class Scanner extends Component {
    render() {
        return (
            <View>
                <ScannerPopup />
            </View>
        )
    }
}