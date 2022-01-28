import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


const Header = ({recents=false, contacts=[]}) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Phone</Text>
        <Text style={styles.contactLength}>
          {recents ?
            ""
            : contacts.length + " contacts"}
        </Text>
      </View>
      <View style={styles.actionIcons}>
        <TouchableOpacity>
          <Icon name={recents ? "sort-amount-up" : "plus"} color="black" size={20} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" color="black" size={20} style={styles.icons} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="ellipsis-v" color="black" size={20} style={styles.icons} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    marginTop: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    color: "black"
  },
  contactLength: {
    fontSize: 15,
    marginVertical: 25,
    color: "grey"
  },
  actionIcons: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 30,
    marginHorizontal: 20,
    justifyContent: "flex-end"
  },
  icons: {
    marginHorizontal: 15
  }
})

export default Header
