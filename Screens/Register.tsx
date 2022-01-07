import React from "react";
import { Alert, Button, Text, View } from "react-native";

const Register = (props: any) => {
  console.log(props);
  return (
    <View>
      <Text>This is Register Page</Text>
      <Button
        title="goto LogIn"
        onPress={() =>
          props.navigation.navigate("LogIn", { userEmail: "abc@gmail.com" })
        }
      />
    </View>
  );
};

export default Register;
