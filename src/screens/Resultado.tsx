import React, { useEffect } from 'react'; // Import useState (not needed here)
import { View, Text, Image } from 'react-native';

interface PokemonData {
  nome: string;
  natureza: string;
  iv: number;
  dono: string;
}

const Resultado: React.FC<{ pokemonData: PokemonData }> = ({ pokemonData }) => {
  const [imagemPokemon, setImagemPokemon] = useState('');

  useEffect(() => {
    // Buscar a imagem do Pokémon
    const urlImagem = `URL_DA_IMAGEM_DO_POKEMON/${pokemonData.nome}.png`;
    setImagemPokemon(urlImagem);
  }, [pokemonData]); // Re-run effect when pokemonData changes

  return (
    <View>
      <Text>Nome: {pokemonData.nome}</Text>
      <Text>Natureza: {pokemonData.natureza}</Text>
      <Text>IV: {pokemonData.iv}</Text>
      <Text>Dono: {pokemonData.dono}</Text>
      <Image
        source={{ uri: imagemPokemon }}
        style={{ width: 400, height: 400 }}
      />
    </View>
  );
};

export default Resultado;
