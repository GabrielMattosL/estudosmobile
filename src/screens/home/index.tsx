import { Text, View, TextInput, TouchableOpacity, FlatList } from "react-native"

import { Participant } from "../../../components/Participant";

import { styles } from "./styles"

export function Home() {
  const participants = ['Rodrigo', 'Vinicius', 'Gabriel', 'Diego', 'Biro','Mayk', 'Ana', 'João', 'Felipe', 'Maria', 'Mateus', 'Yago', 'Davi'];

  function handleParticipantAdd() {
    console.log("Você adicionou");
  }

  function handleParticipantRemove() {
    console.log('Removeu')
  }

  return(
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Text style={styles.texto}>
          React Native
        </Text>

        <Text style={styles.textoData}>
          React Native - Data: 21/03/2023
        </Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#FFF"
          />
          
          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={[]}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}/>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda, adicione participantes a sua lista de presença
            </Text>
          )}
        />

      </View>
    </View>
  )
}