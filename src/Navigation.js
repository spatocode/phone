import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Dialer from "./dialer";
import Recents from "./recents";
import Contacts from "./contacts";


const SwitchNavigator = createSwitchNavigator(
    {
        Dialer: {
            screen: Dialer
        },
        Recents: {
            screen: Recents        },
        Contacts: {
            screen: Contacts
        }
    },
    {
        initialRouteName: 'Dialer'
    }
)

export default createAppContainer(SwitchNavigator)
