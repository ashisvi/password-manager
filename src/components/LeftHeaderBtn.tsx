import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { darkTheme } from "@/utils/theme"

export default function LeftHeaderBtn() {
  return (
    <Pressable style={{ marginRight: 15 }}>
      <Ionicons name="settings-sharp" size={28} color={darkTheme.textColor} />
    </Pressable>
  )
}
