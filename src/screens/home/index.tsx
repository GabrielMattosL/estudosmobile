import { Text, View, TextInput, TouchableOpacity } from "react-native"

import { styles } from "./styles"

export function Home() {

  function handleParticipantAdd() {
    console.log("Você adicionou");
    console.log("Você adicionou");
  }

  return(
    <View style={styles.container}>
      <Text style={styles.texto}>
        React Native
      </Text>

      <View style={styles.caixa}>
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

      </View>
    </View>
  )
}