import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Box, HStack, VStack, Text, Button, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import dateFormat from "dateformat";

const CardTodo = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Pressable onPress={() => navigation.navigate("Detail")}>
        <Box backgroundColor="blue.200" my="2" style={{ overflow: "hidden" }}>
          <HStack justifyContent="space-between" space={2} px="3">
            <VStack>
              <Box pt="4">
                <Text fontWeight="bold" fontSize="md">
                  Title
                </Text>
              </Box>
              <Box pt="2">
                <Text isTruncated maxW="48" w="95%" textAlign="justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
                  enim eum est quasi consequatur! Quo commodi quidem eum. Cumque
                  repudiandae maiores voluptas illo nisi minus magnam molestias
                  iure debitis consequatur.
                </Text>
              </Box>
              <Box py={4}>
                <HStack space={1}>
                  <MaterialIcons name="date-range" size={20} color="black" />
                  <Text>{dateFormat(date, "dd mmm yyyy")}</Text>
                </HStack>
              </Box>
            </VStack>
            <VStack space={1} py="3">
              <Box py="2" borderRadius={9} backgroundColor="blue.300">
                <Text px={2} color="white" bold>
                  Home Work
                </Text>
              </Box>
              <Text textAlign="center" mt={3}>
                <Ionicons name="md-checkmark-circle" size={44} color="lime" />
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
    </>
  );
};

export default CardTodo;

const styles = StyleSheet.create({});
