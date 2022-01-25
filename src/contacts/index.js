import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Menu from "../Menu"


export default class Contacts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Menu navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    }
})
