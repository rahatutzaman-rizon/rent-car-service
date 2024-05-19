// import all images from assets/images directory

import img02 from "../all-images/hiace.jpg";
import img03 from "../all-images/newnoah.jpg";
import img04 from "../all-images/cars-img/nissan-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/platz.jpg";
import img08 from "../all-images/cars-img/mercedes-offer.png";


const carData = [
  
   

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Platz",
    imgUrl: img07,
    model: "Model-2022",
    price: 5200,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "4 seats",
    automatic: "Automatic",
    description:
      "Toyota Motor Corp (Toyota) is an automobile manufacturer. The company designs, manufactures and sells passenger cars, buses, minivans, trucks, specialty cars, recreational and sport-utility vehicles. It provides financing to dealers and customers for the purchase or lease of vehicles.",
    carRentalService: "AC/Non AC Toyota X-Noah/Hi-Ace Super GL/Car rental",
    features: [
      "AC/Non-AC options",
      "Spacious seating for up to 4 passengers",
      "Ample luggage space",

      "Suitable for short term tour ",
    ],
  },

  {
    id: 3,
    brand: "Toyota",
    rating: 118,
    carName: "Toyota X-Noah",
    imgUrl: img03,
    model: "X-Noah",
    price: 6800,
    speed: "22 mpg",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    description:
      "The Toyota X-Noah is a spacious and comfortable minivan ideal for group travel and family trips. It offers ample seating and luggage space, with the option of a hybrid powertrain for improved fuel efficiency and reduced emissions.",
    carRentalService: "AC/Non AC Toyota X-Noah/Hi-Ace Super GL/Car rental",
    features: [
      "AC/Non-AC options",
      "Spacious seating for up to 8 passengers",
      "Ample luggage space",
      "Family trips",
      "Suitable for group travel ",
    ],
  },

  {
    id: 4,
    brand: "Toyota",
    rating: 125,
    carName: "Toyota Hi-Ace Super GL",
    imgUrl:img02,
    model: "Hi-Ace Super GL",
    price: 6200,
    speed: "20 mpg",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Automatic",
    description:
      "The Toyota Hi-Ace Super GL is a versatile and reliable van suitable for group transportation, cargo hauling, and long-distance travel. It offers a spacious interior, comfortable seating, and ample cargo space.",
    carRentalService: "AC/Non AC Toyota X-Noah/Hi-Ace Super GL/Car rental",
    features: [
      "AC/Non-AC options",
      "Spacious seating  12 passengers",
      "Suitable for group transportation ",
      "Reliable  for long-distance travel",
    ],
  },
];

export default carData;