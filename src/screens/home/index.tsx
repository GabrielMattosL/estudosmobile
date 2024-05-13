import React, { useState } from "react";

import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"

import { Participant } from "../../../components/Participant";

import { styles } from "./styles"

export function Home() {
  const [participants, setParticipants] = useState<string[]>(['Ana']);
  const [participantName, setParticipantName] = useState('');


  function handleParticipantAdd() {
    
    if(participantName == "") {
      return Alert.alert("Não pode adicionar um elemento vazio")
    }

    if(participants.includes(participantName)) {
      return Alert.alert("Participante Existe", "Já existe um participante na lista com esse nome");
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName('');
    participants.push('Ana')
  }

  function handleParticipantRemove(name: string) {

    setParticipants(prevState => prevState.filter(participant => participant !== name))


    Alert.alert("Remover", `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
    
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
            onChangeText={setParticipantName}
            value={participantName}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          style={styles.height}
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}/>
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