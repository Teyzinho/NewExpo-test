import { View, Text } from 'react-native'

interface RefreshControlProps {
    refreshing: boolean;
    onRefresh: Function;
}

const RefreshControl = ({refreshing, onRefresh}:RefreshControlProps) => {
  return (
    <View>
      <Text className='text-white'>RefreshControl</Text>
    </View>
  )
}

export default RefreshControl