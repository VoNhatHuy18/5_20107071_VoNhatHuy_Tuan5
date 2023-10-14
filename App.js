import { NavigationContainer } from "@react-navigation/native";
import man1 from "./screens/man1";
import man2 from "./screens/man2";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
   
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={man1} />
        <Stack.Screen name="Details" component={man2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
