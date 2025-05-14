import PropertyListing from "@/components/PropertyListing";
import { styles } from "@/styles/_homestyle";
import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";
import { useState } from "react";
import { PropertyListingProps } from "@/interfaces";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [propertyData, setPropertyData] = useState<PropertyListingProps[]>(SAMPLE_DATA);

  const toggleFavorite = (propertyName: string) => {
    const updated = propertyData.map((item) =>
      item.propertyName === propertyName
        ? { ...item, favorite: !item.favorite }
        : item
    );
    setPropertyData(updated);
  };

  const filteredData = propertyData
    .filter((item) => 
      item.propertyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.country.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((item) => {
      if (!selectedFilter) return true;
      const label = selectedFilter.toLowerCase();
      return (
        item.propertyName.toLowerCase().includes(label) ||
        item.location.city.toLowerCase().includes(label) ||
        item.location.country.toLowerCase().includes(label)
      );
    });

  return (
    <View style={styles.container}>
      {/* Company Logo */}
      <View style={localStyles.companyLogo}>
        <Image source={require("@/assets/images/hvlogo1.png")} />
      </View>

      {/* Search Bar */}
      <View style={styles.searchGroup}>
        <View style={styles.searchFormGroup}>
          <View style={styles.searchControlGroup}>
            <Text style={styles.searchFormText}>Where to?</Text>
            <TextInput
              style={{ ...styles.searchControl, ...styles.searchFormText }}
              placeholder="Location . Date . Add guest"
              onChangeText={(text) => setSearchQuery(text)}
              value={searchQuery}
            />
          </View>
          <View style={styles.searchButton}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      {/* Filter Scroll */}
      <View style={{ backgroundColor: "white", paddingVertical: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.filterGroup}>
            {FILTERS.map((filter, index) => (
              <TouchableHighlight
                key={index}
                style={[
                  styles.filterContainer,
                  selectedFilter === filter.label && styles.selectedFilter,
                ]}
                onPress={() =>
                  setSelectedFilter(selectedFilter === filter.label ? null : filter.label)
                }
                underlayColor="#ddd"
              >
                <View style={styles.filterContainer}>
                  <Image
                    style={styles.filterIcon}
                    source={filter.image}
                    resizeMode="contain"
                  />
                  <Text style={styles.filterLabel}>{filter.label}</Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Property Listing */}
      <ScrollView style={styles.listingContainer}>
        <PropertyListing listings={filteredData} onToggleFavorite={toggleFavorite} />

        {/* Show More */}
        <View style={styles.paginationContainer}>
          <TouchableHighlight style={styles.showMoreButton} underlayColor="#ddd">
            <Text style={styles.showMoreButtonText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

const localStyles = StyleSheet.create({
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 30,
  },
});

export default Home;

