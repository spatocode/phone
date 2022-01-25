import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';


export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.navigate('Dialer')}>
                    <Text style={styles.menuText}>Dialer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.navigate('Recents')}>
                    <Text style={styles.menuText}>Recents</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => this.props.navigation.navigate('Contacts')}>
                    <Text style={styles.menuText}>Contacts</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#F5FCFF",
        padding: 20,
        paddingHorizontal: 40
    },
    menuText: {
        color: "rgb(19, 107, 158)",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center"
    },
    menuButton: {
        width: "20%"
    },
})
