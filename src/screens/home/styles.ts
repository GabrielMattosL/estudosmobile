import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111010',
      fontSize: 24,
    },
  
    texto: {
      color: '#ffffff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },

    textoData: {
      color: '#8b8989',
    },
  
    caixa: {
      padding: 20
    },

    input: {
      flex: 1,
      height: 56,
      backgroundColor: 'grey',
      borderRadius: 5,
      color: '#FFF',
      padding: 10,
      fontSize: 16,
      marginRight: 12
    },

    buttonText: {
      color: '#FFF',
      fontSize: 24
    },

    button: {
      backgroundColor: '#31CF67',
      width: 56,
      height: 56,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },

    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42,
    },

    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center',
    },

    height: {
      height: "75%"
    }
  });