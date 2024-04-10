import React, { useState } from 'react'; // Import useState
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface PokemonData {
  nome: string;
  natureza: string;
  iv: number;
  dono: string;
}

const Home: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData>({
    nome: '',
    natureza: '',
    iv: 0,
    dono: '',
  });

  const navigation = useNavigation();

  const handleNavigateToResultado = () => {
    navigation.navigate('Resultado', { pokemonData }); // Pass pokemonData object
  };

  return (
    <View>
      <TextInput
        placeholder="Nome do Pokémon"
        onChangeText={(text) => setPokemonData({ ...pokemonData, nome: text })}
      />
      {/* ... other input fields */}
      <Button title="Enviar" onPress={handleNavigateToResultado} />
    </View>
  );
};

export default Home;
