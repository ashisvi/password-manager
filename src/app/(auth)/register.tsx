import { CustomInput } from "@/components"
import { Link } from "expo-router"
import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import { useAuth } from "../context/AuthContext"

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [disabled, setDisabled] = useState(true)

  const { onRegister, onLogin } = useAuth()

  const register = async () => {
    const result = await onRegister(name, email, password)

    if (result?.error) {
      alert(result?.msg)
    }

    onLogin(email, password)
  }

  useEffect(() => {
    if (
      name &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [name, email, password, confirmPassword])

  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-grey/20 w-[90%] rounded-lg p-5 justify-between items-center">
        <Text className="text-primary text-2xl font-bold mb-5">Register</Text>
        <View className="w-full py-3">
          <CustomInput
            placeholder="Full name"
            type="text"
            value={name}
            setValue={setName}
          />
        </View>
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
            password
            value={password}
            setValue={setPassword}
          />
        </View>
        <View className="w-full py-3">
          <CustomInput
            placeholder="Confirm password"
            password
            value={confirmPassword}
            setValue={setConfirmPassword}
          />
        </View>
        <TouchableOpacity
          className={`bg-primary/80 px-3 py-2 rounded-lg w-[150px] items-center justify-center mt-4 ${disabled && "bg-primary/50"}`}
          onPress={register}
          disabled={disabled}
        >
          <Text className="text-white font-semibold text-lg">Submit</Text>
        </TouchableOpacity>
        <Text className="mt-3">
          Already registered?
          <Link href="login" className="text-primary">
            Login
          </Link>
        </Text>
      </View>
    </View>
  )
}

export default Register
