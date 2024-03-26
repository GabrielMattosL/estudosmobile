import { Text, View, TextInput, TouchableOpacity, ScrollView } from "react-native"

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

        <ScrollView showsVerticalScrollIndicator = {false}>
          {
            participants.map(participant => (
              <Participant
              key={participant}
              name={participant}
              onRemove={handleParticipantRemove}/>
            ))
          }
        </ScrollView>

      </View>
    </View>
  )
}