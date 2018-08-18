import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';
import MyImages from './MyImages';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{marginTop:20}}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap'            
          }}>
          { renderAllImages() }
        </ScrollView>

        {/* { getRandomImage() } */}
      </View>
    );
  }
};

function renderAllImages() {
  let imgList = Object.keys(MyImages);
  return imgList.map((item) => {
    return (
      <Image source={MyImages[item]} key={item} style={styles.image} />
    );
  });
}

function getRandomImage() {
  const randomImages = ['_facebook', '_linkedin', '_youtube'];
  const chosenImage = MyImages[randomImages[Math.round(Math.random() * 2)]];
  return <Image source={chosenImage} style={styles.image} />
}

const size = Dimensions.get('window').width/3 - (20);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  image: {
    width: size,
    height: size,
    margin: 10
  }
});
