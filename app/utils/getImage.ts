import { Platform } from "react-native";

export function getImage(webPath: string, nativePath: any) {
  return Platform.OS === "web"
    ? { uri: webPath } 
    : nativePath;     
}