import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, Button, Subheading } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";
import { useQuery, gql, useMutation } from "@apollo/client";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CHECK_USER = gql`
    mutation ($email: String!, $password: String!) {
      loginControl(email: $email, password: $password) {
        name
      }
    }
  `;

  const [loginControl, { data, loading, error }] = useMutation(CHECK_USER, {
    variables: {
      email: email,
      password: password,
    },
    onCompleted: (data) =>  navigation.popToTop()
  });

  const navigation = useNavigation();

  if (loading) return <Text>Still Loading</Text>;
  // if (error) return <Text>{error.message}</Text>;

  return (
    <View style={{ margin: 16 }}>
      {!!error && (
        <Subheading
          style={{ color: "red", textAlign: "center", marginBottom: 16 }}
        >
          {error.message}
        </Subheading>
      )}
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
        <Button
          mode="contained"
          onPress={(e) => {
            e.preventDefault();
            loginControl();

            // navigation.popToTop();
  
          }}
        >
          Sign In
        </Button>
      </View>
    </View>
  );
};

export default SignIn;
