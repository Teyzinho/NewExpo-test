import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
      <Link href={'profile'} >Go Profile<Link/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})