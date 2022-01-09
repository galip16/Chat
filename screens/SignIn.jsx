import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button, Subheading } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { useQuery, gql } from "@apollo/client";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = async () => {};

  const CHATS_QUERY = gql`
    {
      users {
        name
        email
        id
        password
      }
    }
  `;

  const { loading, error, data } = useQuery(CHATS_QUERY);

  if (loading) return <Text>Still Loading</Text>;
  if (error) return <Text>{error.message}</Text>;
  console.log("---------------------");
  console.log(data.users[0].email);
  console.log(data.users[0].password);


  return (
    <View style={{ margin: 16 }}>
      <TextInput
        label="Email"
        style={{ marginTop: 12 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Password"
        style={{ marginTop: 12 }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 16,
        }}
      >
        <Button compact onPress={() => navigation.navigate("SignUp")}>
          Sign Up
        </Button>
        <Button mode="contained" onPress={() => handleSignIn()}>
          Sign In
        </Button>
      </View>
    </View>
  );
};

export default SignIn;
