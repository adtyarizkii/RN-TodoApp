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
import { useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";

export default function UpdateTodo({ route }) {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [category, setCategory] = useState();
  const [date, setDate] = useState(new Date());
  const [convertDate, setConvertDate] = useState(
    dateFormat(date, "yyyy-mm-dd")
  );

  const { _id } = route.params;
  console.log(_id);
  console.log(route.params);

  const updateTodo = async () => {
    try {
      const data = JSON.stringify({
        name: name,
        category: category,
        date: convertDate,
        description: description,
      });

      await axios.patch(
        `https://api.kontenbase.com/query/api/v1/af7c9231-cd1b-4c0c-af3c-6a8182f11074/todos/${_id}`,
        data
      );
      window.location.reload();
    } catch (error) {
      console.log();
    }
  };

  return (
    <VStack space={1} mx="5" my="2">
      <Text fontSize="24" fontWeight="bold">
        Edit Todo
      </Text>
      <FormControl my="5">
        <Input
          placeholder={route.params.name}
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
          placeholder={route.params.description}
          minWidth="200"
          value={description}
          onChangeText={(text) => setDesc(text)}
          size="lg"
          mb="3"
        />
        <Button backgroundColor="danger.500" marginTop="4" onPress={updateTodo}>
          <Text color="muted.50" fontSize="17" fontWeight="bold">
            Edit Todo
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
    backgroundColor: "#0583D2",
  },
  labelTodo: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  formAdd: {
    width: "auto",
    marginLeft: 50,
    marginRight: 50,
    justifyContent: "center",
    color: "white",
  },
});
