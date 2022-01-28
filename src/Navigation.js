import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Dialer from "./dialer";
import CallLog from "./recents";
import Contact from "./contacts";


const SwitchNavigator = createSwitchNavigator(
    {
        Dialer: {
            screen: Dialer
        },
        Recents: {
            screen: CallLog
        },
        Contact: {
            screen: Contact
        }
    },
    {
        initialRouteName: 'Dialer'
    }
)

export default createAppContainer(SwitchNavigator)
