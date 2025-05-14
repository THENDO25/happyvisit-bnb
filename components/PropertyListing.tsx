import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "@/styles/_homestyle";
import { PropertyListingProps } from "../interfaces";

type Props = {
  listings: PropertyListingProps[];
  onToggleFavorite: (propertyName: string) => void;
};

const PropertyListing: React.FC<Props> = ({ listings, onToggleFavorite }) => {
  return (
    <FlatList
      data={listings}
      keyExtractor={(item) => item.propertyName}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.image} style={styles.cardImage} />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{item.propertyName}</Text>
            <Text style={styles.cardLocation}>
              {item.location.city}, {item.location.country}
            </Text>
            <Text style={styles.cardPrice}>
              {item.currency}
              {item.amount} / night
            </Text>
            <TouchableOpacity
              style={styles.heartIcon}
              onPress={() => onToggleFavorite(item.propertyName)}
            >
              <Feather
                name={item.favorite ? "heart" : "heart"}
                size={24}
                color={item.favorite ? "red" : "gray"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default PropertyListing;
