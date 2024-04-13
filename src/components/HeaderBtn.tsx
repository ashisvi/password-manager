import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { darkTheme } from "@/utils/theme"

type Props = {
  onPress?: () => void
  iconName: string
}

export default function HeaderBtn({ onPress, iconName }: Props) {
  return (
    <TouchableOpacity style={{ marginRight: 10 }} onPress={onPress}>
      <Ionicons name={iconName} size={28} color={darkTheme.textColor} />
    </TouchableOpacity>
  )
}
