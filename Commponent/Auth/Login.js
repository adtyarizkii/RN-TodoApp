import React from "react";
import {
  Input,
  Stack,
  FormControl,
  View,
  Text,
  Image,
  Button,
  HStack,
  VStack,
} from "native-base";
import { TouchableOpacity } from "react-native-web";

const AuthImg = require("../../assets/authimg.png");

function Login({ navigation }) {
  return (
    <VStack padding="8">
      <View alignItems="center">
        <Image
          source={AuthImg}
          w="250"
          h="230"
          marginTop="60"
          marginBottom="10"
        />
      </View>

      <View>
        <Text style={{ fontSize: "30px", fontWeight: 700 }}>Login</Text>
      </View>

      <View>
        <FormControl marginTop="5">
          <Stack space={5}>
            <Stack>
              <Input
                border="1px black solid"
                backgroundColor="whitesmoke"
                p={2}
                placeholder="Email"
                keyboardType="email-address"
              />
            </Stack>
            <Stack>
              <Input
                border="1px black solid"
                backgroundColor="whitesmoke"
                p={2}
                placeholder="Password"
                secureTextEntry={true}
              />
            </Stack>
          </Stack>
        </FormControl>
      </View>

      <View>
        <Button
          onPress={() => navigation.navigate("Home")}
          backgroundColor="danger.500"
          marginTop="4"
        >
          <Text color="muted.50" fontSize="17" fontWeight="bold">
            Login
          </Text>
        </Button>
      </View>

      <View>
        <HStack justifyContent="center" marginTop="2" fontSize="16">
          <Text marginRight="1">New user ?</Text>
          <TouchableOpacity
            fontWeight="800"
            onPress={() => navigation.navigate("Register")}
          >
            <Text color="red.500" marginleft="1" fontWeight="500">
              Register
            </Text>
          </TouchableOpacity>
        </HStack>
      </View>
    </VStack>
  );
}

export default Login;
