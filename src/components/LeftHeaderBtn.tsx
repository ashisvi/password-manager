import { TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { darkTheme } from "@/theme"

export default function LeftHeaderBtn() {
  return (
    <TouchableOpacity>
      <Ionicons name="settings-sharp" size={28} color={darkTheme.textColor} />
    </TouchableOpacity>
  )
}
