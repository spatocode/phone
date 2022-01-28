import React from "react";
import { FlatList, StyleSheet, Dimensions} from 'react-native';
import Header from "../Header";
import ContactItem from "./ContactItem";


const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const ContactList = ({contacts}) => {
  contacts = contacts.sort((current, next) => 
    current.displayName.toLowerCase() > next.displayName.toLowerCase()
  )
  const windowSize = contacts.length > 50 ? contacts.length / 4 : 21;
  const ITEM_HEIGHT = 20
  const renderItem = ({item, index, separators}) => (
    <ContactItem contact={item} index={index}
      separators={separators}
    />
  )
  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  }

  const getItemLayout = (data, index) => (
    {length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}
  )

  const renderHeaderComponent = () => <Header contacts={contacts} />

  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.flatlist}
      maxToRenderPerBatch={windowSize}
      // TODO: Add ListEmptyComponent to handle empty list
      getItemLayout={getItemLayout}
      windowSize={windowSize}
      ListHeaderComponent={renderHeaderComponent}
    />
  )
}

const styles = StyleSheet.create({
  flatlist: {
    height: "100%"
  },
})

export default ContactList
