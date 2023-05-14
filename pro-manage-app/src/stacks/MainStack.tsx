import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../Screens/SignIn";
import ShowBottomTabs from "./MainTab";
import DetailStatus from "../Screens/DetailStatus";
import DetailTotal from "../Screens/DetailTotal";
import InfPartner from "../Screens/InfPartner";
import Members from "../Screens/Members";
import PartnerUpdate from "../Screens/PartnerUpdate";
import UserRegister from "../Screens/UserRegister";
import { ArquivePartners } from '../Screens/ArquivePartners'

const Stack = createStackNavigator();

export default class Navegador extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="MainTab" component={ShowBottomTabs} />
        <Stack.Screen name="DetailStatus" component={DetailStatus} />
        <Stack.Screen name="DetailTotal" component={DetailTotal} />
        <Stack.Screen name="InfPartner" component={InfPartner} />
        <Stack.Screen name="Members" component={Members} />
        <Stack.Screen name="PartnerUpdate" component={PartnerUpdate} />
        <Stack.Screen name="UserRegister" component={UserRegister} />
        <Stack.Screen name="ArquivePartners" component={ArquivePartners} />
      </Stack.Navigator>
    );
  }
}