import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Avatar, Title, Subheading, Button } from "react-native-paper";

const Settings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {}, []);

  return (
    <View style={{ alignItems: "center", marginTop: 16 }}>
      <Avatar.Text
        label={name.split(" ").reduce((prev, current) => prev + current[0], "")}
      />
      <Title>{name}</Title>
      <Subheading>{email}</Subheading>
      <Button onPress={() => console.warning("Sign Out")}>Sign Out</Button>
    </View>
  );
};

export default Settings;
