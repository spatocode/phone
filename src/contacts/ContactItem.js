import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


class ContactItem extends React.PureComponent {
  randomRGB(number="", name) {
    const rgb = number.slice(-3)
    if (!number || !rgb) {
      const r = name.charCodeAt(0) + 12*2
      const g = name.charCodeAt(1) + 23*3
      const b = name.charCodeAt(2) + 34*4
      return `rgb(${r},${g},${b})`
    }
    return `rgb(${rgb[0]*24},${rgb[1]*26},${rgb[2]*28})`
  }

  render() {
    const {contact, item, separators} = this.props
    return (
      <TouchableOpacity
        key={item?.key}
        onShowUnderlay={separators.highlight}
        onHideUnderlay={separators.unhighlight}
      >
        <View style={styles.container}>
          <View>
            <View style={{...styles.contactAvatar, backgroundColor: this.randomRGB(contact?.phoneNumbers[0]?.number, contact?.givenName)}}>
              <Text style={styles.contactInitial}>{contact?.givenName[0]}</Text>
            </View>
          </View>
          <View style={styles.contactData}>
            <Text style={styles.name}>
              {contact?.givenName} {contact?.middleName && contact.middleName + " "}
              {contact?.familyName}
            </Text>
            {/* <Text style={styles.phoneNumber}>
              {contact?.phoneNumbers[0]?.number}
            </Text> */}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
    padding: 11,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
  },
  contactAvatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8
  },
  contactInitial: {
    fontSize: 18,
    color: "white"
  },
  contactData: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  name: {
    fontSize: 18,
    color: "black"
  },
  phoneNumber: {
    color: '#888',
  }
})

export default ContactItem
