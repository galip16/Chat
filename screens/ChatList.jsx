import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  List,
  Avatar,
  Divider,
  FAB,
  Portal,
  Dialog,
  Button,
  TextInput,
} from "react-native-paper";

const ChatList = () => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <List.Item
        title="User Name"
        description="Hi i am last Message"
        left={(props) => <Avatar.Text label="UN" size={56} />}
      />
      <Divider inset />

      <Portal>
        <Dialog
          visible={isDialogVisible}
          onDismiss={() => setIsDialogVisible(true)}
        >
          <Dialog.Title>New Chat</Dialog.Title>
          <Dialog.Content>
            <TextInput label="Enter User Email"></TextInput>
          </Dialog.Content>
          <Dialog.Actions>
            <Button>Save</Button>
            <Button onPress={() => setIsDialogVisible(false)}>Cancel</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FAB
        icon="plus"
        style={{ position: "absolute", bottom: 16, right: 16 }}
        onPress={() => setIsDialogVisible(true)}
      />
    </View>
  );
};

export default ChatList;
