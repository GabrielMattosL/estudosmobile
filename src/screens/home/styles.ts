import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5555',
      fontSize: 24,
    },
  
    texto: {
      color: 'red',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
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
    }
  });