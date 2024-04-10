import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your components
import Home from './scr/screens/Home';
import Resultado from './src/screens/Resultado';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Resultado"
          component={Resultado}
          initialParams={{ pokemonData }} // Pass pokemonData as props
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
