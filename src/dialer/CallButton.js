import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class CallButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.callButton}>
                    <Icon name="phone" size={20} color="#fff" style={styles.iconPhone} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgb(19, 107, 158)"
    },
    callButton: {
        width: 61,
        padding: 20,
        borderRadius: 50,
        backgroundColor: "rgb(19, 107, 158)"
    }
})
