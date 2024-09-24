import { CustomInput } from "@/components"
import { Link } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

const SignUp = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <View className="bg-grey/20 w-[90%] rounded-lg p-5 justify-between items-center">
        <Text className="text-primary text-2xl font-bold mb-5">Sign Up</Text>
        <View className="w-full py-3">
          <CustomInput placeholder="Full name" type="text" />
        </View>
        <View className="w-full py-3">
          <CustomInput placeholder="Email" type="email" />
        </View>
        <View className="w-full py-3">
          <CustomInput placeholder="Password" password />
        </View>
        <TouchableOpacity className="bg-primary/80 px-3 py-2 rounded-lg w-[150px] items-center justify-center mt-4">
          <Text className="text-white font-semibold text-lg">Submit</Text>
        </TouchableOpacity>
        <Link href="sign-in">Sign In</Link>
      </View>
    </View>
  )
}

export default SignUp
