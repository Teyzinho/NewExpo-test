import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction, useState } from "react";

import { icons } from "@/constants";

interface FormFieldProps {
  title: string;
  value: string;
  placeHolder?: string;
  handleChangeText: Dispatch<string>;
  otherStyles?: string;
  keyboardType?: string;
}

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeHolder = "",
}: FormFieldProps) => {

    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View
        className="border-2 border-black-200 w-full 
                        h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-100
                        items-center flex-row"
      >
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeHolder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Senha' && !showPassword}
        />

        {title === 'Senha' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image 
                    source={!showPassword ? icons.eye : icons.eyeHide}
                    className="w-6 h-6"
                    resizeMode="contain"
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
