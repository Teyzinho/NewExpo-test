import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Client, Account, ID, Avatars, Databases, Query } from "react-native-appwrite";
import React, { useState } from "react";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aoracourse",
  projectid: "668fec53000ab747d856",
  databaseId: "668ff066001d2ecd58dc",
  userCollectionId: "668ff19f000585b7bce4",
  videoCollectionId: "669120b30017673623bd",
  storageId: "669123da003a5f2a88e6",
};

let client;
let account: any;

client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectid)
  .setPlatform(config.platform);

account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

// export const login = async (email:string, password:string) => {
//     await account.createEmailPasswordSession(email, password);
//     // setLoggedInUser(await account.get());
// }

export const createUser = async (
  email: string,
  password: string,
  userName: string
) => {
  try {
    const newAccount = await account.create(ID.unique(), email, password, userName);

    if (!newAccount) throw Error;
    const AvatarUrl = avatars.getInitials(userName);
    await singIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        userName,
        avatar: AvatarUrl
      }
    );

    return newUser;
  } catch (error: any) {
    console.log(error);
    throw new Error(error.massage);
  }

  // await account.create(ID.unique(), email, password, userName);
  // await login(email, password);
  // setLoggedInUser(await account.get());
};

export async function singIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error: any) {
    if (error.message) {
      throw new Error(`Erro ao criar sessão: ${error.message}`);
    } else {
      throw new Error('Erro desconhecido ao criar sessão');
    }
  }
}

export const getCurrentUser = async () => {
  try {
    const currentAccount = await account.get();
    if(!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      config.databaseId,
      config.userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )
    if(!currentUser) throw Error

    return currentUser.documents[0]
  } catch (error:any) {
    console.log(error)
  }
}