import { images } from "@/constants";
import { View, Text, Image } from "react-native";

interface EmptyStateProps {
  title: string;
  subTitle: string;
}

const EmptyState = ({ subTitle, title }: EmptyStateProps) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className=""
        resizeMode="contain"
      />
    </View>
  );
};

export default EmptyState;
