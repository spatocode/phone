import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Menu from "../Menu"
import Keypad from "./Keypad";


const windowWidth = Dimensions.get('window').width


const Dialer = ({navigation}) => {
  const [number, setNumber] = React.useState("")

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Phone</Text>
        <View style={styles.titleIconContainer}>
          <TouchableOpacity style={styles.searchIconContainer}>
            <Icon name="search" size={20} style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ellipsisIconContainer}>
            <Icon name="ellipsis-v" size={20} style={styles.ellipsisIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.numberInputContainer}>
        <TextInput
          style={styles.numberInput}
          autoFocus={true}
          value={number}
          showSoftInputOnFocus={false}
          textAlign="center"
        />
      </View>
      <Keypad number={number} setNumber={setNumber} />
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.callButton}>
          <Icon name="phone" size={20} color="#fff" style={styles.iconPhone} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton}>
          <Icon name="window-close" size={20} color="grey" style={styles.iconClose} />
        </TouchableOpacity>
      </View>
      <Menu navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  titleContainer: {
    marginHorizontal: 17,
    marginVertical: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  titleText: {
    color: "black",
    fontSize: 20
  },
  ellipsisIcon: {
    color: "black",
    marginHorizontal: 15
  },
  searchIcon: {
    color: "black",
    marginHorizontal: 15
  },
  titleIconContainer: {
    marginTop: 7,
    display: "flex",
    flexDirection: "row",
  },
  footerContainer: {
    margin: 20,
    marginTop: 5,
    marginBottom: 80,
    marginLeft: "43%",
    display: "flex",
    flexDirection: "row"
  },
  closeButton: {
    color: "grey",
    marginTop: 20,
    marginLeft: 80
  },
  callButton: {
    width: 61,
    padding: 20,
    borderRadius: 50,
    backgroundColor: "rgb(19, 107, 158)"
  },
  numberInputContainer: {
    alignItems: 'center',
    marginTop: "45%"
  },
  numberInput: {
    color: "black",
    fontSize: 40,
    width: windowWidth-40
  }
})

export default Dialer
