import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default class Keypad extends Component {
  render() {
    const firstRow = {"1": "", "2": "ABC", "3": "DEF"}
    const secondRow = {"4": "GHI", "5": "JKL", "6": "MNO"}
    const thirdRow = {"7": "PQRS", "8": "TUV", "9": "WXYZ"}
    const keypads = [firstRow, secondRow, thirdRow]
    return (
      <View style={styles.container}>
        {
          keypads.map((o, i) =>
            <View key={i} style={styles.keypadContainer}>
              {
                Object.keys(o).map((k, i) =>
                  <TouchableOpacity key={i} style={styles.keypadButton}>
                    <Text style={styles.keypadText}>{k}</Text>
                    {o[k] ?
                      <Text style={styles.keypadSubText}>{o[k]}</Text>
                      :null
                    }
                  </TouchableOpacity>
                )
              }
            </View>
          )
        }
        <View style={styles.keypadContainer}>
          <TouchableOpacity style={styles.keypadButton}>
            <Text style={styles.keypadStarText}>*</Text>
            <Text style={styles.keypadSubText}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}>
            <Text style={styles.keypadText}>0</Text>
            <Text style={styles.keypadSubText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.keypadButton}>
            <Text style={styles.keypadText}>#</Text>
            <Text style={styles.keypadSubText}></Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      marginHorizontal: 60,
    },
    keypadContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8
    },
    keypadButton: {
      width: 50
    },
    keypadText: {
        fontSize: 30,
        color: "black",
        textAlign: "center"
    },
    keypadStarText: {
      fontSize: 40,
      color: "black",
      textAlign: "center",
    },
    keypadSubText: {
        color: "grey",
        textAlign: "center"
    }
})
