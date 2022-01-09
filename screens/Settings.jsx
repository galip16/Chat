import React from "react";
import { Text, View } from "react-native";
import { Avatar, Title, Subheading, Button } from "react-native-paper";
import { useQuery, gql } from "@apollo/client";

const Settings = () => {
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

  return (
    <View style={{ alignItems: "center", marginTop: 16 }}>
      <Avatar.Text
        label={data.users[0].name
          .split(" ")
          .reduce((prev, current) => prev + current[0], "")}
      />
      <Title>{data.users[0].name}</Title>
      <Subheading>{data.users[0].email}</Subheading>
      <Button onPress={() => console.warn("You are successfully signed out")}>
        Sign Out
      </Button>
    </View>
  );
};

export default Settings;
