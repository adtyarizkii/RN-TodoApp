import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Input,
  FormControl,
  Text,
  Button,
  VStack,
  Select,
  TextArea,
} from "native-base";
import { useState, useEffect } from "react";
import dateFormat from "dateformat";

import axios from "axios";

export default function TodoAction() {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [category, setCategory] = useState();
  const [date, setDate] = useState(new Date());
  const [convertDate, setConvertDate] = useState(
    dateFormat(date, "yyyy-mm-dd")
  );

  console.log(date);
  console.log(convertDate);

  const sendTodo = async () => {
    try {
      const data = JSON.stringify({
        name: name,
        category: category,
        date: convertDate,
        description: description,
      });
      console.log("ini: ", data);
      const response = await axios.post(
        "https://api.kontenbase.com/query/api/v1/af7c9231-cd1b-4c0c-af3c-6a8182f11074/todos",
        data
      );
      console.log("succes: ", data);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VStack space={1} mx="5" my="2">
      <Text fontSize="24" fontWeight="bold">
        Add List
      </Text>
      <FormControl my="5">
        <Input
          placeholder="Name"
          backgroundColor="gray.200"
          size="md"
          mb="3"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Select
          accessibilityLabel="Category"
          placeholder="Category"
          backgroundColor="gray.200"
          size="md"
          mb="3"
          onValueChange={(Value) => setCategory(Value)}
        >
          <Select.Item label="Study" value="" />
          <Select.Item label="Home Work" value="" />
          <Select.Item label="Work Out" value="" />
        </Select>
        <Input
          placeholder={dateFormat(date, "dd mmm yyyy")}
          backgroundColor="gray.200"
          size="md"
          mb="3"
          editable={false}
          value={convertDate}
          onChangeText={(text) => setConvertDate(text)}
        />
        <TextArea
          h={24}
          backgroundColor="gray.200"
          placeholder="Description"
          minWidth="200"
          value={description}
          onChangeText={(text) => setDesc(text)}
          size="lg"
          mb="3"
        />
        <Button
          backgroundColor="danger.500"
          marginTop="4"
          onPress={() => {
            sendTodo();
          }}
        >
          <Text color="muted.50" fontSize="17" fontWeight="bold">
            Add List
          </Text>
        </Button>
      </FormControl>
    </VStack>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white ",
  },
  labelTodo: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  formAdd: {
    width: "auto",
    marginLeft: 50,
    marginRight: 50,
    justifyContent: "center",
    color: "black",
  },
  datePickerStyle: {
    width: 230,
  },
});
