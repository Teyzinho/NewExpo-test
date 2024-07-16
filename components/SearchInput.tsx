import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { Dispatch, useState } from "react";

import { icons } from "@/constants";

interface SearchInputProps {
  value: string;
  placeHolder?: string;
  handleChangeSearch: Dispatch<string>;
  otherStyles?: string;
}

const SearchInput = ({
  value,
  handleChangeSearch,
  otherStyles,
  placeHolder = "",
}: SearchInputProps) => {
  return (
    <View
      className="border-2 border-black-200 w-full 
                        h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-100
                        items-center flex-row space-x-4"
    >
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeHolder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeSearch}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
