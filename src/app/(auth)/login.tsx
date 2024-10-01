import { CustomInput } from "@/components";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const { onLogin } = useAuth();

  const handleLogin = async () => {
    const result = await onLogin(email, password);

    if (result && result?.error) {
      alert(result?.msg);
    }
  };

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

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
          className={`bg-primary/80 px-3 py-2 rounded-lg w-[150px] items-center justify-center mt-4 ${disabled && "bg-primary/50"}`}
          onPress={handleLogin}
          disabled={disabled}
        >
          <Text className="text-white font-semibold text-lg">Submit</Text>
        </TouchableOpacity>
        <Text className="mt-3">
          Not registered?
          <Link href="register" className="text-primary">
            Register
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Login;
