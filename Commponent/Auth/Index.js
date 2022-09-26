import { VStack, Text, Button, Image, View } from "native-base";

const Indeximg = require("../../assets/index.png");
const TodoImg = require("../../assets/WaysTodo.png");

function Index({ navigation }) {
  return (
    <VStack space={5} width="100%" marginTop="20px">
      <View alignItems="center">
        <Image source={Indeximg} w="250" h="230" marginTop="60" />
      </View>
      <View alignItems="center">
        <Image source={TodoImg} w="230px" h="40px" marginTop="10" />
      </View>
      <Text
        font="avenir"
        fontSize="18"
        fontWeight="400"
        padding="5"
        textAlign="center"
      >
        Write your activity and finish your activity. Fast, Simple and Easy to
        Use
      </Text>
      <View alignItems="center">
        <Button
          marginBottom="4"
          width={80}
          bg="danger.500"
          rounded="md"
          shadow={3}
          onPress={() => navigation.navigate("Login")}
        >
          <Text color="white" fontWeight="bold" fontSize="20">
            Login
          </Text>
        </Button>
        <Button
          width={80}
          alignItems="center"
          bg="muted.400"
          rounded="md"
          shadow={3}
          onPress={() => navigation.navigate("Register")}
        >
          <Text color="white" fontWeight="bold" fontSize="20">
            Register
          </Text>
        </Button>
      </View>
    </VStack>
  );
}

export default Index;
