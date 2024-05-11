import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Montserrat-Black": require("../../assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Bold": require("../../assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-ExtraBold": require("../../assets/fonts/Montserrat-ExtraBold.ttf"),
    "Monserrat-ExtraLight": require("../../assets/fonts/Montserrat-ExtraLight.ttf"),
    "Monserrat-Light": require("../../assets/fonts/Montserrat-Light.ttf"),
    "Monserrat-Medium": require("../../assets/fonts/Montserrat-Medium.ttf"),
    "Monserrat-Regular": require("../../assets/fonts/Montserrat-Regular.ttf"),
    "Monserrat-SemiBold": require("../../assets/fonts/Montserrat-SemiBold.ttf"),
    "Monserrat-Thin": require("../../assets/fonts/Montserrat-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;

  return (
    <Stack
      screenOptions={
        {
          // headerShown: false,
        }
      }
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
