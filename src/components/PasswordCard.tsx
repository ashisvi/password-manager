import { StyleSheet, Text, View } from 'react-native'

type Props = {
  item: Password
}

export default function PasswordCard({item}: Props) {
  return (
    <View>
      <Text style={{color: "white"}}>{item.site}</Text>
      <Text style={{color: "white"}}>{item.username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})