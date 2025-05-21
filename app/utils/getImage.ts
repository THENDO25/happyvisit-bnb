import { Platform } from "react-native";

export const getImage = (webPath: string, nativeImage: any) => {
  return Platform.OS === "web" ? { uri: webPath } : nativeImage;
};