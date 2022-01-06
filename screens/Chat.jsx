import { useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const Chat = () => {
  const route = useRoute();

  const [messages, setMessages] = useState([]);

  const [uid, setUID] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
   console.log("burasi da neeee")
    
  }, []);

  useEffect(() => {
    return null
     
  }, []);

  const onSend = (m = []) => {
   console.log(m);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <GiftedChat
        messages={messages.map((x) => ({
          ...x,
          createdAt: x.createdAt?.toDate(),
        }))}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: uid,
          name: name,
        }}
      />
    </View>
  );
};

export default Chat;
