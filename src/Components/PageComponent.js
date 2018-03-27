import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import SimpleCard from './SimpleCard/SimpleCard';
import CardComponent from './CardComponent/CardComponent';
import Header from './Common/Header';
import Footer from './Common/Footer';
import PrinterPopup from './PopupModal/PrinterPopup';

export default class PageComponent extends Component {
    render() {
        return (
             <PrinterPopup />
             <ScrollView>
                <Header />
                <CardComponent />
                <SimpleCard />
                <Footer />
            </ScrollView>
            
            
        )
    }
}


