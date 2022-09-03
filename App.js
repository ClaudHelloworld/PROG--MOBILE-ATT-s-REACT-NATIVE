import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {

    let dp = 'Dados Pessoais';
    let fm = 'Formação';
    let xp = 'Experiência';
    let prjct = 'Projetos';
    let img = 'https://i.pinimg.com/originals/4b/42/7a/4b427a9469d3c297ff6af776cb56e992.jpg';

    return (
      <View style={{ margin: 200, marginLeft: 800}}>
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300, borderRadius: 100, }}
        />

        <Text style={{ fontSize: 30 }}>{dp}</Text>
        <Text>Claudinei Gomes</Text>

        <Text style={{ fontSize: 30 }}>{fm}</Text>
        <Text>Análise e Desenvolvimento de Sistemas</Text>

        <Text style={{ fontSize: 30 }}>{xp}</Text>
        <Text>Estágiaria NA HealthBiT</Text>

        <Text style={{ fontSize: 30 }}>{prjct}</Text>
        <Text>Aplicativos em React Native e sistemas em DRUPAL</Text>
      </View>
    )
  }
}

export default App;
