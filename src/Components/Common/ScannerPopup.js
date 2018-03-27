import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {
    ModalPopup,
    Header,
    Body
} from './Popup/index';

export class ScannerPopup extends Component {
    render() {
        return (
            <ModalPopup>
            <Header>
                <Text> Scan Printer </Text>
                </Header>
            <Body>
                <Text>Please connect Printer</Text>
                </Body>
</ModalPopup>
        )
    }
}

