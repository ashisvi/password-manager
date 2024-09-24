import { CustomInput } from "@/components"
import { Link } from "expo-router"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useAuth } from "../context/AuthContext"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { onLogin } = useAuth()

  const handleLogin = async () => {
    const result = await onLogin(email, password)

    if (result && result?.error) {
      alert(result?.msg)
    }
  }

  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-grey/20 w-[90%] rounded-lg p-5 justify-between items-center">
        <Text className="text-primary text-2xl font-bold mb-5">Login</Text>
        <View className="w-full py-3">
          <CustomInput
            placeholder="Email"
            type="email"
            value={email}
            setValue={setEmail}
          />
        </View>
        <View className="w-full py-3">
          <CustomInput
            placeholder="Password"
            value={password}
            setValue={setPassword}
            password
          />
        </View>
        <TouchableOpacity
          className="bg-primary/80 px-3 py-2 rounded-lg w-[150px] items-center justify-center mt-4"
          onPress={handleLogin}
        >
          <Text className="text-white font-semibold text-lg">Submit</Text>
        </TouchableOpacity>
        <Link href="register" className="text-blue-900 mt-3">
          Register
        </Link>
      </View>
    </View>
  )
}

export default Login
