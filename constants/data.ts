import { PropertyListingProps } from "@/interfaces";


const SAMPLE_DATA : PropertyListingProps[] = [
    {
      propertyName: "Ocean View Apartment",
      rate: 4.5,
      currency: "$",
      amount: 1200,
      location: {
        street: "123 Seaside Blvd",
        city: "Cape Town",
        country: "South Africa",
      },
      favorite: true,
      image: require("@/assets/images/mansion1.jpg"),
      id: 1
    },
    
    {
      propertyName: "Sunset Paradise Villa",
      location: {
        street: "456 Beachfront Lane",
        city: "Cancun",
        country: "Mexico"
      },
      image: require("@/assets/images/mansion2.jpg"),
      rate: 4.85,
      currency: "$",
      amount: 750,
      favorite: true,
      id: 2
    },
    {
      propertyName: "Golden Sands Retreat",
      location: {
        street: "789 Coastal Road",
        city: "Gold Coast",
        country: "Australia"
      },
      image: require("@/assets/images/golden.jpg"),
      rate: 4.92,
      currency: "$",
      amount: 900,
      favorite: false,
      id: 3
    },
    {
      propertyName: "Cozy Cottage",
      location: {
        street: "321 Seaside Avenue",
        city: "Nice",
        country: "France"
      },
      image: require("@/assets/images/cottage.png"),
      rate: 4.78,
      currency: "$",
      amount: 680,
      favorite: false,
      id: 4
    },
    {
      propertyName: "Palm Villa",
      location: {
        street: "654 Palm Street",
        city: "Bali",
        country: "Indonesia"
      },
      image: require("@/assets/images/mansion5.jpg"),
      rate: 4.88,
      currency: "$",
      amount: 1200,
      favorite: true,
      id: 5
    },
    {
      propertyName: "Ocean Breeze Mansion",
      location: {
        street: "987 Marina Drive",
        city: "Dubai",
        country: "UAE"
      },
      image: require("@/assets/images/tropical.jpg"),
      rate: 4.95,
      currency: "$",
      amount: 2500,
      favorite: false,
      id: 6
    },
    {
      propertyName: "Seaside Serenity House",
      location: {
        street: "147 Ocean View Road",
        city: "Phuket",
        country: "Thailand"
      },
      image: require("@/assets/images/mansion3.jpg"),
      rate: 4.81,
      currency: "$",
      amount: 1500,
      favorite: false,
      id:7
    },
    {
      propertyName: "Rocky State",
      location: {
        street: "258 Furst Avenue",
        city: "Pretoria",
        country: "South Africa"
      },
      image: require("@/assets/images/mansion4.jpg"),
      rate: 4.89,
      currency: "$",
      amount: 850,
      favorite: false,
      id: 8
    },
    {
      propertyName: "Tropical Bliss Retreat",
      location: {
        street: "369 Palm Beach Road",
        city: "Maui",
        country: "USA"
      },
      image: require("@/assets/images/tropical.jpg"),
      rate: 4.83,
      currency: "$",
      amount: 720,
      favorite: false,
      id: 9
    },
    {
      propertyName: "Emerald Bay Cottage",
      location: {
        street: "741 Bayfront Avenue",
        city: "Cape Town",
        country: "SOUTH AFRICA"
      },
      image: require("@/assets/images/Villa.jpg"),
      rate: 4.90,
      currency: "$",
      amount: 780,
      favorite: true,
      id: 10
    }
  ];


const FILTERS: { label: string; image: any }[] = [

  {
    label: "Mansion",
    image: require("@/assets/images/mansion3.jpg"),
  },
  {
    label: "CountrySide",
    image: require("@/assets/images/golden.jpg"),
  },
  {
    label: "Villa",
    image: require("@/assets/images/aff.jpg"),
  },
  {
    label: "Tropical",
    image: require("@/assets/images/mansion3.jpg"),
  },
  {
    label: "New",
    image: require("@/assets/images/cottage.png"),
  },
  {
    label: "Amazing",
    image: require("@/assets/images/golden.jpg"),
  },
  {
    label: "Beachfront",
    image: require("@/assets/images/mansion3.jpg"),
  },
  {
    label: "Luxury",
    image: require("@/assets/images/mansion5.jpg"),
  },
  {
    label: "Secluded",
    image: require("@/assets/images/mansion1.jpg"),
  },
];

export { SAMPLE_DATA, FILTERS };
