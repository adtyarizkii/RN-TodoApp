import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Box, HStack, VStack, Text, View, ScrollView } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import dateFormat from "dateformat";
import axios from "axios";

// import Footer from "../components/Footer";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { StackParamList } from "../routes/Routes";

const Detail = ({ route }) => {
  const [date, setDate] = useState(new Date());
  const [todo, setTodo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { _id } = route.params;
  console.log(_id);
  const getTodo = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.kontenbase.com/query/api/v1/af7c9231-cd1b-4c0c-af3c-6a8182f11074/todos/${_id}`
      );
      console.log(response);
      setTodo(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);
  return (
    <>
      <ScrollView p="3">
        <Box
          backgroundColor="blue.200"
          my="2"
          style={{ overflow: "hidden" }}
          p="4"
        >
          <HStack justifyContent="space-between" space={2} px="3">
            <Box pt="4">
              <Text fontWeight="bold" fontSize="20">
                {route.params.name}
              </Text>
            </Box>
            <VStack space={1}>
              <Box py="2" borderRadius={9} backgroundColor="blue.300">
                <Text px={2} color="white" bold>
                  Todo
                </Text>
              </Box>
              <Text textAlign="center" mt={3}>
                <Ionicons name="md-checkmark-circle" size={44} color="lime" />
              </Text>
            </VStack>
          </HStack>
          <VStack space={2} px="3" py="3">
            <Box pt="2">
              <Text textAlign="justify">{route.params.description}</Text>
            </Box>
            <Box py={4}>
              <HStack space={1}>
                <MaterialIcons name="date-range" size={20} color="black" />
                <Text>{dateFormat(route.params.date, "dd mmm yyyy")}</Text>
              </HStack>
            </Box>
          </VStack>
          <VStack space={1} py="3"></VStack>
        </Box>
      </ScrollView>
      {/* <Footer navigation={navigation} /> */}
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({});
