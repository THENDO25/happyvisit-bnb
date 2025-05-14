import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchGroup: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchFormGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchControlGroup: {
    flex: 1,
    marginRight: 10,
  },
  searchFormText: {
    fontSize: 16,
    color: '#333',
  },
  searchControl: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  searchButton: {
    backgroundColor: '#34967C',
    padding: 10,
    borderRadius: 5,
  },
filterGroup: {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: 10,
  gap: 5,
},

filterContainer: {
  alignItems: "center",
  justifyContent: "center",
  marginRight: 1,
  width: 60,
},

filterIcon: {
  width: 80,
  height: 40,
  marginBottom: 2,
},

filterLabel: {
  fontSize: 12,
  
},
  listingContainer: {
    padding: 20,
  },
  selectedFilter: {
  borderColor: '#000',
  borderWidth: 2,
  borderRadius: 8
},
  paginationContainer: {
    paddingVertical: 10,
    alignItems: 'center',
    
  },
  showMoreButton: {
    backgroundColor: '#34967C',
    padding: 10,
    borderRadius: 5,
  },
  showMoreButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  // Add this to resolve the error
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: "#333",
  },
  card: {
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  cardInfo: {
    padding: 10,
    position: "relative",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardLocation: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 16,
    fontWeight: "600",
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});


export { styles };