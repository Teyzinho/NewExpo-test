
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Client, Account, ID } from 'react-native-appwrite';
import React, { useState } from 'react';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.aoracourse',
    projectid: '668fec53000ab747d856',
    databaseId: '668ff066001d2ecd58dc',
    userCollectionId:'668ff19f000585b7bce4',
    videoCollectionId:'669120b30017673623bd',
    storageId: '669123da003a5f2a88e6',
}

let client;
let account;

client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectid)
  .setPlatform(config.platform);

account = new Account(client);

export const login = async (email:string, password:string) => {
    await account.createEmailPasswordSession(email, password);
    // setLoggedInUser(await account.get());
}

export  const createUser = async (email:string, password:string, name:string) => {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
    // setLoggedInUser(await account.get());
}
/*
export default function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  async function register(email, password, name) {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
    setLoggedInUser(await account.get());
  }
  return (
    // ... Implement your UI here
  );
}

const styles = StyleSheet.create({
    // ... define some tyles
});
*/