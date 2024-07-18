import { images } from "@/constants";
import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

interface EmptyStateProps {
  title: string;
  subTitle: string;
}

const EmptyState = ({ subTitle, title }: EmptyStateProps) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-2xl font-psemibold text-white">{title}</Text>
      <Text className="font-pmedium text-sm text-gray-100">{subTitle}</Text>

      <CustomButton
        handlePress={() => router.push('/create')}
        title="Criar vídeo"
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
