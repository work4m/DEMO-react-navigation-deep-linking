import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home1', { name: 'Jane' })}
      >
        Home Screen
      </Text>
    </View>
  );
}

function HomeScreen1({ route }) {
  const { name = "name" } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {name}</Text>
    </View>
  );
}

const App = () => {

  const linking = {
    prefixes: ['demo://', 'https://demo.com'],
    config: {
      /* configuration for matching screens with paths */
      screens: {
        Home1: "Home/Home1/:name",
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home1" component={HomeScreen1} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App