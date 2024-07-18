import { View, Text, FlatList, Image, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import Trending from "@/components/Trending";
import EmptyState from "@/components/EmptyState";
import RefreshControl from "@/components/RefreshControl";
import { getAllPosts } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";

// const data: any = [{ id: 1 }, { id: 2 }, { id: 3 }];

const Home = () => {
  const { data: posts, isLoading, refetch } = useAppwrite(getAllPosts);
  
  const [ refreshing, setRefreshing ] = useState(false);

  const onRefresh = async () => {
    // setRefreshing(true);
    // await refetch();
    setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
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
                <Image
                  className="w-9 h-10"
                  source={images.logoSmall}
                  resizeMode="contain"
                />
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

              <Trending posts={posts ?? []} />
            </View>
          </View>
        )}
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <Text className="text-white">{item.title}</Text>}
        ListEmptyComponent={() => (
          <EmptyState
            title="Nenhum vídeo encontrado"
            subTitle="Seja o primeiro a publicar!"
          />
        )}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
      />
    </SafeAreaView>
  );
};

export default Home;
