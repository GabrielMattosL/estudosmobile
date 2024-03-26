import { Text, View, TextInput, TouchableOpacity } from "react-native"

import { Participant } from "../../../components/Participant";

import { styles } from "./styles"

export function Home() {

  function handleParticipantAdd() {
    console.log("Você adicionou");
    console.log("Você adicionou");
  }

  return(
    <View style={styles.container}>
      <View style={styles.caixa}>
        <Text style={styles.texto}>
          React Native
        </Text>

        <Text>
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

        <Participant name="Gabriel"/>
        <Participant name="Davi"/>
        <Participant name="Vinicius"/>

      </View>
    </View>
  )
}