import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Menu from "../Menu"
import Keypad from "./Keypad";


export default class Dialer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Keypad/>
                <View style={styles.callButtonContainer}>
                    <TouchableOpacity style={styles.callButton}>
                        <Icon name="phone" size={20} color="#fff" style={styles.iconPhone} />
                    </TouchableOpacity>
                </View>
                <Menu navigation={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    callButtonContainer: {
        margin: 20,
        marginTop: 5,
        marginHorizontal: "43%",
    },
    callButton: {
        width: 61,
        padding: 20,
        borderRadius: 50,
        backgroundColor: "rgb(19, 107, 158)"
    },
})
