import { StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import {
  VStack,
  Text,
  View,
  Button,
  FormControl,
  Input,
  HStack,
  Box,
  Flex,
  ScrollView,
} from "native-base";
import axios from "axios";

const AddCategoryScreen = () => {
  const [name, setName] = useState("");
  const [categories, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendCategory = async () => {
    try {
      const data = JSON.stringify({
        name: name,
      });

      const response = await axios.post(
        "https://api.kontenbase.com/query/api/v1/af7c9231-cd1b-4c0c-af3c-6a8182f11074/category",
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
      setIsLoading(true);
      const response = await axios.get(
        "https://api.kontenbase.com/query/api/v1/af7c9231-cd1b-4c0c-af3c-6a8182f11074/category?$lookup=*"
      );
      setCategory(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <>
      <VStack space={1} mx="5" my="2">
        <Text fontSize="24" fontWeight="bold">
          Add Category
        </Text>
        <FormControl my="5">
          <Input
            placeholder="Category"
            backgroundColor="gray.200"
            size="md"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Button
            backgroundColor="danger.500"
            marginTop="4"
            onPress={() => {
              sendCategory();
            }}
          >
            <Text color="muted.50" fontSize="17" fontWeight="bold">
              Add Category
            </Text>
          </Button>
        </FormControl>
      </VStack>
      <Text fontSize="24" fontWeight="bold" mx="5" my="2">
        List Category
      </Text>
      <ScrollView>
        <VStack space={1} mx="5" my="1" maxW="xs">
          <HStack space={2} my="2" maxWidth="xs" flexWrap="wrap">
            {categories.map((item) => (
              <Box backgroundColor="blue.300" borderRadius={4} my="3">
                <Text mx="3" my="2" bold color="white">
                  {item.name}
                </Text>
              </Box>
            ))}
          </HStack>
        </VStack>
      </ScrollView>
    </>
  );
};

export default AddCategoryScreen;

const styles = StyleSheet.create({});
