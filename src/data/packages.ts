import gulmargImage from "@/assets/gulmarg.jpg";
import pahalgamImage from "@/assets/pahalgam.jpg";
import sonamargImage from "@/assets/sonamarg.jpg";
import srinagarImage from "@/assets/srinagar.jpg";

export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  nights: number;
  days: number;
  destinations: string[];
  image: string;
  startingPrice: number;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
}

export const packages: TourPackage[] = [
  {
    id: "kashmir-essentials-3n4d",
    name: "Kashmir Essentials",
    duration: "3 Nights / 4 Days",
    nights: 3,
    days: 4,
    destinations: ["Srinagar", "Gulmarg"],
    image: srinagarImage,
    startingPrice: 12999,
    highlights: [
      "Shikara ride on Dal Lake",
      "Mughal Gardens visit",
      "Gulmarg Gondola ride",
      "Houseboat stay experience"
    ],
    inclusions: [
      "3 nights accommodation (2N Srinagar + 1N Houseboat)",
      "Daily breakfast & dinner",
      "Airport transfers",
      "Sightseeing as per itinerary",
      "All permits and taxes"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Lunch and personal expenses",
      "Gondola tickets (Phase 1 & 2)",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Welcome to the Paradise on Earth! Arrive at Srinagar Airport and transfer to your hotel.",
        activities: ["Airport pickup", "Check-in at hotel", "Evening Shikara ride on Dal Lake", "Overnight at Srinagar"]
      },
      {
        day: 2,
        title: "Srinagar Local Sightseeing",
        description: "Explore the beautiful Mughal Gardens and local attractions of Srinagar.",
        activities: ["Visit Nishat Bagh", "Explore Shalimar Garden", "Shankaracharya Temple", "Transfer to Houseboat", "Overnight on Houseboat"]
      },
      {
        day: 3,
        title: "Gulmarg Excursion",
        description: "Full day excursion to Gulmarg, the meadow of flowers.",
        activities: ["Drive to Gulmarg (54 km)", "Gondola ride (optional)", "Explore snow point", "Pony ride", "Return to Srinagar", "Overnight at Srinagar"]
      },
      {
        day: 4,
        title: "Departure",
        description: "Check out and transfer to Srinagar Airport for your onward journey.",
        activities: ["Breakfast at hotel", "Check-out", "Airport transfer", "Tour ends"]
      }
    ]
  },
  {
    id: "kashmir-delight-4n5d",
    name: "Kashmir Delight",
    duration: "4 Nights / 5 Days",
    nights: 4,
    days: 5,
    destinations: ["Srinagar", "Gulmarg", "Pahalgam"],
    image: pahalgamImage,
    startingPrice: 16999,
    highlights: [
      "Shikara ride on Dal Lake",
      "Gulmarg Gondola experience",
      "Pahalgam valley exploration",
      "Mughal Gardens tour",
      "Houseboat stay"
    ],
    inclusions: [
      "4 nights accommodation",
      "Daily breakfast & dinner",
      "All transfers & sightseeing",
      "Experienced driver",
      "All permits and taxes"
    ],
    exclusions: [
      "Airfare/train tickets",
      "Lunch and personal expenses",
      "Adventure activities",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Arrive at Srinagar and begin your Kashmir journey.",
        activities: ["Airport pickup", "Hotel check-in", "Shikara ride on Dal Lake", "Overnight at Srinagar"]
      },
      {
        day: 2,
        title: "Srinagar to Pahalgam",
        description: "Drive to the Valley of Shepherds through scenic routes.",
        activities: ["Drive to Pahalgam (95 km)", "Visit Saffron fields en route", "Explore Aru Valley", "Overnight at Pahalgam"]
      },
      {
        day: 3,
        title: "Pahalgam Exploration",
        description: "Full day to explore Pahalgam and its beautiful surroundings.",
        activities: ["Betaab Valley visit", "Chandanwari excursion", "Lidder River walk", "Return to Srinagar", "Houseboat stay"]
      },
      {
        day: 4,
        title: "Gulmarg Day Trip",
        description: "Experience the snow-covered meadows of Gulmarg.",
        activities: ["Drive to Gulmarg", "Gondola ride (optional)", "Snow activities", "Return to Srinagar", "Overnight at Srinagar"]
      },
      {
        day: 5,
        title: "Departure",
        description: "Bid farewell to Kashmir with beautiful memories.",
        activities: ["Visit local markets", "Airport transfer", "Tour ends"]
      }
    ]
  },
  {
    id: "kashmir-complete-5n6d",
    name: "Complete Kashmir",
    duration: "5 Nights / 6 Days",
    nights: 5,
    days: 6,
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    image: sonamargImage,
    startingPrice: 21999,
    highlights: [
      "All major Kashmir destinations",
      "Thajiwas Glacier trek",
      "Gulmarg cable car",
      "Betaab Valley visit",
      "Premium houseboat stay"
    ],
    inclusions: [
      "5 nights accommodation",
      "Daily breakfast & dinner",
      "All transfers in private vehicle",
      "Sightseeing as per itinerary",
      "All permits and taxes"
    ],
    exclusions: [
      "Flight tickets",
      "Lunch & personal expenses",
      "Pony/sledge rides",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Srinagar",
        description: "Welcome to Kashmir! Start your dream vacation.",
        activities: ["Airport pickup", "Hotel check-in", "Evening at leisure", "Shikara ride", "Overnight at Srinagar"]
      },
      {
        day: 2,
        title: "Srinagar Sightseeing",
        description: "Explore the cultural heritage of Srinagar.",
        activities: ["Mughal Gardens tour", "Hazratbal Shrine", "Local handicraft shops", "Transfer to Houseboat", "Overnight on Houseboat"]
      },
      {
        day: 3,
        title: "Gulmarg Excursion",
        description: "Full day in the meadow of flowers.",
        activities: ["Drive to Gulmarg", "Gondola ride Phase 1 & 2", "Snow activities", "Golf course visit", "Return to Srinagar"]
      },
      {
        day: 4,
        title: "Pahalgam",
        description: "Experience the serene beauty of Pahalgam.",
        activities: ["Drive to Pahalgam", "Aru Valley", "Betaab Valley", "Chandanwari", "Overnight at Pahalgam"]
      },
      {
        day: 5,
        title: "Sonamarg Day Trip",
        description: "Visit the Meadow of Gold.",
        activities: ["Drive to Sonamarg", "Thajiwas Glacier", "Zero Point (subject to weather)", "Return to Srinagar", "Overnight at Srinagar"]
      },
      {
        day: 6,
        title: "Departure",
        description: "End of your memorable Kashmir journey.",
        activities: ["Breakfast", "Airport transfer", "Tour ends"]
      }
    ]
  },
  {
    id: "kashmir-honeymoon-6n7d",
    name: "Kashmir Honeymoon Special",
    duration: "6 Nights / 7 Days",
    nights: 6,
    days: 7,
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    image: gulmargImage,
    startingPrice: 28999,
    highlights: [
      "Romantic houseboat stay",
      "Candlelight dinner",
      "Couple spa session",
      "Private Shikara ride",
      "All scenic destinations"
    ],
    inclusions: [
      "6 nights deluxe accommodation",
      "Daily breakfast & dinner",
      "Candlelight dinner on houseboat",
      "Flower bed decoration",
      "All transfers & sightseeing",
      "Honeymoon cake"
    ],
    exclusions: [
      "Airfare",
      "Lunch & beverages",
      "Personal expenses",
      "Travel insurance"
    ],
    itinerary: [
      {
        day: 1,
        title: "Romantic Arrival",
        description: "Begin your romantic journey in Kashmir.",
        activities: ["VIP airport pickup", "Welcome drink", "Premium houseboat check-in", "Private Shikara ride at sunset", "Overnight on Houseboat"]
      },
      {
        day: 2,
        title: "Srinagar Romance",
        description: "Explore Srinagar with your beloved.",
        activities: ["Late breakfast", "Mughal Gardens", "Local market shopping", "Candlelight dinner", "Overnight at Srinagar hotel"]
      },
      {
        day: 3,
        title: "Gulmarg Snow Paradise",
        description: "Experience the snow together.",
        activities: ["Drive to Gulmarg", "Gondola ride", "Snow photography", "Coffee at Khyber", "Overnight at Gulmarg"]
      },
      {
        day: 4,
        title: "Pahalgam Journey",
        description: "Travel to the valley of shepherds.",
        activities: ["Drive to Pahalgam", "Saffron fields stop", "Lidder River picnic", "Overnight at Pahalgam"]
      },
      {
        day: 5,
        title: "Pahalgam Exploration",
        description: "Explore the romantic valleys.",
        activities: ["Betaab Valley (DDLJ fame)", "Aru Valley", "Horse riding together", "Return to Srinagar"]
      },
      {
        day: 6,
        title: "Sonamarg Day Trip",
        description: "Visit the golden meadow.",
        activities: ["Drive to Sonamarg", "Thajiwas Glacier", "Picnic lunch", "Evening shopping", "Farewell dinner"]
      },
      {
        day: 7,
        title: "Sweet Farewell",
        description: "Departure with lifetime memories.",
        activities: ["Late checkout", "Airport transfer", "Tour ends"]
      }
    ]
  }
];
