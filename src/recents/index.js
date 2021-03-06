import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from "../Header";
import CallLogList from "./CallLogList";
import Menu from "../Menu"


const CallLog = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header recents={true}/>
      <CallLogList />
      <Menu navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  }
})

export default CallLog
