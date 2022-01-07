import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import {
  CompositeScreenProps,
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import Register from "./Screens/Register";
import LogIn from "./Screens/LogIn";
import Home from "./Screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "./Screens/TabScreens/HomeTab";
import Profile from "./Screens/TabScreens/Profile";

import { FontAwesome } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const BottomTabsNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="HomeTab">
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

type RootTabParamList = {
  HomeTab: undefined;
  Profile: undefined;
};

type RootStackParamList = {
  Register: undefined;
  LogIn: { userEmail: string }; // value is parameter
  HomeStack: NavigatorScreenParams<RootTabParamList>;
};

// type RootTabScreenProps<Screen extends keyof RootTabParamList> =
//   StackScreenProps<RootTabParamList, Screen>;

// type RootStackScreenProps<Screen extends keyof RootStackParamList> =
//   CompositeScreenProps<>;

// const RootTab = createBottomTabNavigator<RootTabParamList>();
const RootStack = createStackNavigator<RootStackParamList>(); // creates a Stack with Screens and Params

// To define Screen Type
export type LogInScreenProps = StackScreenProps<RootStackParamList, "LogIn">;
// export type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Register">
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen
          name="LogIn"
          component={LogIn}
          initialParams={{ userEmail: "dubeyvirendra92@gmail.com" }}
        />
        <RootStack.Screen
          name="HomeStack"
          component={BottomTabsNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
