import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";

const data = [];

const Home = () => {
  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Bem vindo de volta
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMmastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image  className="w-9 h-10" source={images.logoSmall} resizeMode="contain"/>
              </View>
            </View>

            <SearchInput
              value=""
              handleChangeSearch={() => {}}
              placeHolder="Procure por um tópico"
            />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Últimos Videos
              </Text>

              <Trending posts={[{ id: 1 },{ id: 2 },{ id: 3 }] ?? []}/>
            </View>
          </View>
        )}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text className="text-white">{item.id}</Text>}
        ListEmptyComponent={() => (
          <EmptyState title="Nenhum vídeo encontrado" subTitle="Seja o primeiro a publicar!"/>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
