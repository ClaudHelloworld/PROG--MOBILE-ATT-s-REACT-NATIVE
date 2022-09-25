import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import { styles } from './styles.js';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <ScrollView>

          <View style={styles.box1}>
          <Text style={styles.title}>Desenvolvedor React</Text>
          <Text style={styles.subtitle}>Salário: 4323 R$</Text>
          <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
          <Text style={styles.subtitle}>Contato: 13 99695-4237</Text>
          <Button
          title="Eu quero"
        />
          </View>

          <View style={styles.box1}>
          <Text style={styles.title}>Desenvolvedor Java</Text>
          <Text style={styles.subtitle}>Salário: 6000 R$</Text>
          <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
          <Text style={styles.subtitle}>Contato: 13 99635-4787</Text>
          <Button
          title="Eu quero"
        />
          </View>

          <View style={styles.box1}>
          <Text style={styles.title}>Desenvolvedor Web</Text>
          <Text style={styles.subtitle}>Salário: 4330 R$</Text>
          <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
          <Text style={styles.subtitle}>Contato: 13 92395-4787</Text>
          <Button
          title="Eu quero"
        />
          </View>

          <View style={styles.box1}>
          <Text style={styles.title}>Desenvolvedor Pearl</Text>
          <Text style={styles.subtitle}>Salário: 1000 R$</Text>
          <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
          <Text style={styles.subtitle}>Contato: 13 996755-4787</Text>
          <Button
          title="Eu quero"
        />
          </View>

          <View style={styles.box1}>
          <Text style={styles.title}>Desenvolvedor Ruby</Text>
          <Text style={styles.subtitle}>Salário: 7000 R$</Text>
          <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
          <Text style={styles.subtitle}>Contato: 13 99695-4117</Text>
          <Button
          title="Eu quero"
        />
          </View>
         
          

        </ScrollView>
      </View>
    )
  }
}
 

 
export default App;