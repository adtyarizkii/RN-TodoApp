import * as React from "react";
import { StyleSheet } from "react-native";
import {
  Input,
  Stack,
  FormControl,
  Text,
  View,
  Button,
  VStack,
  ScrollView,
  CheckIcon,
  HStack,
  Box,
  Select,
  TextArea,
} from "native-base";
import { useState, useEffect } from "react";

import axios from "axios";

export default function TodoAction() {
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [categories, setCategory] = useState([]);
  const [date, setDate] = useState(new Date().toLocaleDateString());

  const sendTodo = async () => {
    try {
      const data = JSON.stringify({
        name: name,
        description: description,
      });

      const response = await axios.post(
        "https://api.kontenbase.com/query/api/v1/af7c9231-cd1b-4c0c-af3c-6a8182f11074/todos",
        data
      );
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://api.kontenbase.com/query/api/v1/af7c9231-cd1b-4c0c-af3c-6a8182f11074/category?$lookup=*"
      );
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    // <View style={styles.containerForm}>
    //   <Text style={styles.labelTodo}>Add List</Text>
    //   <FormControl>
    //     <Stack space={5} style={styles.formAdd}>
    //       <Stack>
    //         <Text style={{ fontSize: 15 }}>Name</Text>
    //         <Input
    //           variant="underlined"
    //           p={2}
    //           placeholder="Todo"
    //           style={{}}
    //           value={name}
    //           onChangeText={(text) => setName(text)}
    //         />
    //       </Stack>
    //       <Stack>
    //         <Text style={{ fontSize: 15 }}>Description</Text>
    //         <TextArea
    //           h={20}
    //           mt={3}
    //           placeholder="Description"
    //           w="100%"
    //           maxW="300"
    //           style={{}}
    //           value={description}
    //           onChangeText={(text) => setDesc(text)}
    //         />
    //       </Stack>
    //       <Button
    //         style={{ backgroundColor: "#FF5555" }}
    //         onPress={() => {
    //           sendTodo();
    //         }}
    //       >
    //         Add List
    //       </Button>
    //     </Stack>
    //   </FormControl>
    // </View>
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
          onValueChange={(itemValue) => setCategory(itemValue)}
        >
          {categories.map((item) => (
            <Select.Item label={item.name} value={item._id} />
          ))}
        </Select>
        <Input
          placeholder={date.toLocaleString()}
          backgroundColor="gray.200"
          size="md"
          mb="3"
          editable={false}
          value={date}
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
