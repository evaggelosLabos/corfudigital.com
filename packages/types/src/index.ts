export interface Property {
  id: string;
  name: string;
  slug: string;
  type: "villa" | "hotel" | "apartment" | "resort";
  location: {
    island: string;
    area: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  capacity: {
    maxGuests: number;
    bedrooms: number;
    bathrooms: number;
  };
  basePricePerNight: number;
  currency: "EUR" | "USD" | "GBP";
  amenities: string[];
  images: string[];
}

export interface BookingRequest {
  propertyId: string;
  checkIn: string; // ISO date YYYY-MM-DD
  checkOut: string; // ISO date YYYY-MM-DD
  guests: {
    adults: number;
    children: number;
    infants?: number;
  };
  guestDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country?: string;
    specialRequests?: string;
  };
}

export interface BookingQuote {
  nights: number;
  pricePerNight: number;
  baseTotal: number;
  cleaningFee: number;
  localTax: number;
  totalPrice: number;
  currency: string;
  breakdown: Array<{
    date: string;
    price: number;
  }>;
}

export interface AgencyLead {
  id?: string;
  businessName: string;
  businessType: "hotel" | "villa_owner" | "restaurant" | "transfers" | "other";
  location: string;
  contactName: string;
  email: string;
  phone: string;
  currentWebsite?: string;
  needs: Array<"direct_booking" | "new_website" | "qr_menu" | "seo_ranking" | "custom_software">;
  message?: string;
  createdAt: string;
}
