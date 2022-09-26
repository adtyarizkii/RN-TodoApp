import { StyleSheet, TouchableOpacity, View, Pressable } from "react-native";
import {
  ScrollView,
  FlatList,
  Heading,
  VStack,
  Text,
  Box,
  Flex,
  HStack,
  Avatar,
  Input,
  Icon,
  Select,
  CheckIcon,
} from "native-base";
import { useState, useEffect } from "react";
import { ListItem } from "react-native-elements";

import axios from "axios";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import dateFormat from "dateformat";
// import CardTodo from "../Commponent/CardTodo";

export default function TodoList({ navigation }) {
  const [todos, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [service, setService] = useState("");
  const [date, setDate] = useState(new Date());

  const getTodos = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://api.kontenbase.com/query/api/v1/af7c9231-cd1b-4c0c-af3c-6a8182f11074/todos?$lookup=*"
      );
      console.log(response);
      setTodo(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setIdDelete(id);
      await axios.delete(
        `https://api.kontenbase.com/query/api/v1/af7c9231-cd1b-4c0c-af3c-6a8182f11074/todos/${id}`
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  //   Create Component List
  const _renderItem = ({ item }) => {
    console.log(item);
    return (
      <ListItem key={item._id}>
        <ListItem.Content>
          <Pressable onPress={() => navigation.navigate("Detail")}>
            <Box backgroundColor="blue.200" style={{ overflow: "hidden" }}>
              <HStack justifyContent="space-between" space={2} px="3">
                <VStack>
                  <Box pt="4">
                    <Text fontWeight="bold" fontSize="md">
                      {item.name}
                    </Text>
                  </Box>
                  <Box pt="2">
                    <Text isTruncated maxW="48" w="95%" textAlign="justify">
                      {item.description}
                    </Text>
                  </Box>
                  <Box py={4}>
                    <HStack space={1}>
                      <MaterialIcons
                        name="date-range"
                        size={20}
                        color="black"
                      />
                      <Text>{dateFormat(item.date, "dd mmm yyyy")}</Text>
                    </HStack>
                  </Box>
                </VStack>
                <VStack space={1} py="3">
                  <Box py="2" borderRadius={9} backgroundColor="blue.300">
                    <Text px={2} color="white" bold>
                      {item.category[0].name}
                    </Text>
                  </Box>
                  <Text textAlign="center" mt={3}>
                    <Ionicons
                      name="md-checkmark-circle"
                      size={44}
                      color="lime"
                    />
                  </Text>
                  <HStack space={2} justifyContent="center">
                    <TouchableOpacity
                      onPress={() => {
                        handleDelete(item._id);
                      }}
                      style={{ backgroundColor: "blue.200", marginTop: 10 }}
                    >
                      <AntDesign name="delete" size={20} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Update", item)}
                      style={{ backgroundColor: "blue.200", marginTop: 10 }}
                    >
                      <MaterialIcons name="update" size={20} color="black" />
                    </TouchableOpacity>
                  </HStack>
                </VStack>
              </HStack>
            </Box>
          </Pressable>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <>
      <View>
        <VStack space={1} justifyContent="center" mx="6">
          <HStack justifyContent="space-between" space={5}>
            <Box alignItems="start">
              <Text fontSize="2xl" bold>
                Hi, User
              </Text>
              <Text fontSize="sm" color="red.400">
                200 List
              </Text>
            </Box>
            <Box mt="2">
              <Avatar
                bg="green.500"
                source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                }}
                borderWidth="2"
                borderColor="red.400"
              ></Avatar>
              <TouchableOpacity
                onPress={() => navigation.navigate("Index")}
                style={{ marginTop: 5 }}
              >
                <Text>Logout</Text>
                <AntDesign name="logout" size={20} color="black" />
              </TouchableOpacity>
            </Box>
          </HStack>
          <Input
            mt="5"
            placeholder="Search List..."
            backgroundColor="gray.200"
            width="100%"
            borderRadius="4"
            py="1"
            px="1"
            fontSize="14"
            fontWeight="medium"
            InputLeftElement={
              <Icon
                m="2"
                ml="2"
                size="5"
                color="gray.400"
                as={<AntDesign name="search1" size={24} color="black" />}
              />
            }
          />
          <HStack space={2} justifyContent="space-between">
            <Select
              selectedValue={service}
              maxWidth="24"
              accessibilityLabel="Pick Date"
              placeholder="Pick Date"
              backgroundColor="gray.200"
              _selectedItem={{
                bg: "gray.100",
                endIcon: (
                  <MaterialIcons name="date-range" size={5} color="black" />
                ),
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Date Time Picker" value="ux" />
            </Select>
            <Select
              selectedValue={service}
              maxWidth="24"
              accessibilityLabel="Category"
              placeholder="Category"
              backgroundColor="gray.200"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Study" value="study" />
              <Select.Item label="Homework" value="homework" />
              <Select.Item label="Workout" value="workout" />
            </Select>
            <Select
              selectedValue={service}
              maxWidth="24"
              accessibilityLabel="Status"
              placeholder="Status"
              backgroundColor="gray.200"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={(itemValue) => setService(itemValue)}
            >
              <Select.Item label="Finished" value="done" />
              <Select.Item label="Not Finished" value="notDone" />
            </Select>
          </HStack>
        </VStack>
        <ScrollView>
          <View style={styles.containerForm}>
            <FlatList
              navigation={navigation}
              data={todos}
              renderItem={_renderItem}
              keyExtractor={(item) => item._id}
              refreshing={isLoading}
              onRefresh={getTodos}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white ",
  },
});
