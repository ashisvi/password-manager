import AsyncStorage from "@react-native-async-storage/async-storage";

export async function savePasswordToAsyncStorage(passwords: Password) {
  try {
    const jsonValue = JSON.stringify(passwords);
    await AsyncStorage.setItem("passwords", jsonValue);
  } catch (error) {
    console.error("Something went wrong while saving password", error);
  }
}

export async function loadPasswordToAsyncStorage(): Promise<Password[]> {
  try {
    const jsonValue = await AsyncStorage.getItem("passwords");
    if (jsonValue !== null) {
      return JSON.parse(jsonValue) as Password[];
    }
    return [];
  } catch (error) {
    console.error("Error while loading passwords from async storage", error);
    return [];
  }
}
