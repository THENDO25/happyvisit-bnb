import { ImageSourcePropType } from "react-native";

export interface PropertyLocationProps {
  street: string;
  city: string;
  country: string;
}

export interface PropertyListingProps {
  id: number | string; // ✅ Add this line
  propertyName: string;
  rate: number;
  currency: string;
  amount: number;
  location: PropertyLocationProps;
  favorite: boolean;
  image?: ImageSourcePropType;
}

export interface PropertListing {
  listings: PropertyListingProps[];
}
