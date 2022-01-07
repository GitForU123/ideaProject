import React from "react";
import { Button, Text, View } from "react-native";
import { LogInScreenProps } from "../App";

const LogIn = ({ route, navigation }: LogInScreenProps) => {
  type LogInScreenNavigationProp = LogInScreenProps["navigation"];
  type LogInScreenRoutProp = LogInScreenProps["route"];

  const { userEmail } = route.params;
  return (
    <View>
      <Text>Welcome {userEmail} </Text>
      <Button
        title="go to tabs"
        onPress={() => navigation.navigate("HomeStack", { screen: "HomeTab" })}
      />
    </View>
  );
};

export default LogIn;
