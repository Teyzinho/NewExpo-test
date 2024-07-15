import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";

import { images } from "@/constants";
import FormField from "@/components/FormField";
import CustomButton from "@/components/CustomButton";


const SignUp = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(!form.userName || !form.email || !form.password) {
      Alert.alert('Error', 'Por favor preencha todos os campos')
    }

    setIsSubmitting(true)
    try{
      const result = await createUser(form.email, form.password, form.userName);

      // set to global state...

      router.replace('/home')

    } catch(error: any){
      if (error.message) {
        throw new Error(`Erro ao criar sessão: ${error.message}`);
      } else {
        throw new Error('Erro desconhecido ao criar sessão');
      }
    } finally {
      setIsSubmitting(false)
    }

  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Inscreva-se em Aora
          </Text>
          <FormField
            title="Nome Usuário"
            value={form.userName}
            handleChangeText={(e) => setForm({ ...form, userName: e })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Senha"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Criar"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Já tem uma conta?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary-100"
            >
              Logar
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
