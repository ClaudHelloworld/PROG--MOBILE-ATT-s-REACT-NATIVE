import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { styles } from './styles.js';

let img = 'https://imgnike-a.akamaihd.net/1300x1300/0137937T.jpg';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

          <View style={styles.box1}>
            <Image
              source={{ uri: img }}
              style={{ width: 90, height: 90, borderRadius: 30,}}
            />
            <Text style={styles.title}>Tenis Nike</Text>
            <Text style={styles.subtitle}>Valor: 4323 R$</Text>
            <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
            <Button
              title="Comprar"
            />
          </View>

          <View style={styles.box1}>
            <Image
              source={{ uri: img }}
              style={{ width: 90, height: 90, borderRadius: 30,}}
            />
            <Text style={styles.title}>Tenis Nike</Text>
            <Text style={styles.subtitle}>Valor: 4323 R$</Text>
            <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
            <Button
              title="Comprar"
            />
          </View>
          <View style={styles.box1}>
            <Image
              source={{ uri: img }}
              style={{ width: 90, height: 90, borderRadius: 30,}}
            />
            <Text style={styles.title}>Tenis Nike</Text>
            <Text style={styles.subtitle}>Valor: 4323 R$</Text>
            <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
            <Button
              title="Comprar"
            />
          </View>
          <View style={styles.box1}>
            <Image
              source={{ uri: img }}
              style={{ width: 90, height: 90, borderRadius: 30,}}
            />
            <Text style={styles.title}>Tenis Nike</Text>
            <Text style={styles.subtitle}>Valor: 4323 R$</Text>
            <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
            <Button
              title="Comprar"
            />
          </View>
          <View style={styles.box1}>
            <Image
              source={{ uri: img }}
              style={{ width: 90, height: 90, borderRadius: 30,}}
            />
            <Text style={styles.title}>Tenis Nike</Text>
            <Text style={styles.subtitle}>Valor: 4323 R$</Text>
            <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
            <Button
              title="Comprar"
            />
          </View>
          <View style={styles.box1}>
            <Image
              source={{ uri: img }}
              style={{ width: 90, height: 90, borderRadius: 30,}}
            />
            <Text style={styles.title}>Tenis Nike</Text>
            <Text style={styles.subtitle}>Valor: 4323 R$</Text>
            <Text style={styles.subtitle}>Descrição: desdesdesdesdedesdesdesdesdedesdesdesdesde</Text>
            <Button
              title="Comprar"
            />
          </View>



        </ScrollView>
      </View>
    )
  }
}



export default App;