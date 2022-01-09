import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useQuery, gql, useMutation } from "@apollo/client";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const variables = {
    name: name,
    email: email,
    password: password,
  };

  const ADD_USER_MUTATION = gql`
    mutation ($name: String!, $email: String!, $password: String!) {
      createAUser(name: $name, email: $email, password: $password) {
        id
        name
        email
      }
    }
  `;

  const [createAUser, { data, loading, error }] =
    useMutation(ADD_USER_MUTATION);

  const navigation = useNavigation();

  if (loading) return <Text>Submitting...</Text>;
  if (error) return <Text> {`Error! : ${error.message}`} </Text>;

  return (
    <View style={{ margin: 16 }}>
      {!!error && (
        <Subheading
          style={{ color: "red", textAlign: "center", marginBottom: 16 }}
        >
          {error}
        </Subheading>
      )}
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Email"
        style={{ marginTop: 12 }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
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
        <Button compact onPress={() => navigation.navigate("SignIn")}>
          Sign In
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            createAUser({ variables: variables });
            navigation.popToTop();
          }}
        >
          Sign Up
        </Button>
      </View>
    </View>
  );
};
export default SignUp;
