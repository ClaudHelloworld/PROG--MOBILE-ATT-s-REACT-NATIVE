import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>,

    <View>
      <Text>Jogo do N° Aleátorio</Text>

      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUdKjq0LUwMXP8APEtd8OX9PDFgxFXIyySf8FdkKYxavpcMHWrCzgjtw_ki6NHfrXqAy4&usqp=CAU'}}
        style={{ width: 300, height: 300 }}
      />

      <Button
        title="pense em um número"
        onPress={geraNumeroAleatorio}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
