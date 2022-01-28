import React, { useState, useEffect } from "react";
import { View, StyleSheet } from 'react-native';
import Contacts from 'react-native-contacts';
import ContactList from "./ContactList";
import Menu from "../Menu"


const Contact = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    Contacts.getAll()
    .then(contacts => {
      setContacts(contacts)
    })
    .catch(err => console.error(err))
  }, [])

  return (
    <View style={styles.container}>
      <ContactList contacts={contacts} />
      <Menu navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
})

export default Contact
