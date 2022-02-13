import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
  {
    title: "Spicy Shoyu Ramen",
    description:
      "Topped with soft-boiled egg, fish-cake, nori and fall-apart tender chashu",
    price: "$14.50",
    image:
      "https://www.justonecookbook.com/wp-content/uploads/2017/07/Spicy-Shoyu-Ramen-NEW-500x375.jpg",
  },
  {
    title: "Karaage Donburi",
    description: "Crispy juicy fried chicken served on white rice🔥",
    price: "$14.50",
    image:
      "https://www.justonecookbook.com/wp-content/uploads/2018/06/Chinese-style-Chicken-Karaage-Donburi-w600-500x375.jpg",
  },
  {
    title: "Salt Grilled Mackerel lunch set",
    description:
      "With white rice, Japanese pickled vegetables and homemade miso soup",
    price: "$14.50",
    image: "https://image.hitosara.com/gg/image/0006100506/0006100506F2.jpg",
  },
  {
    title: "Miso Ramen",
    description:
      "Our infamous homemade Miso Ramen topped with chicken and soft-boiled eggs ",
    price: "$17.50",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrPZrbYGYV6OsmffnIo72qnpc5jooxep2Q5aVf4pSwQNZwvWZv6usQ09AcuEumOaIy5vo&usqp=CAU",
  },
  {
    title: "Grilled Eel (Unagi) Don",
    description: "On top of white rice",
    price: "$13.50",
    image:
      "https://www.justonecookbook.com/wp-content/uploads/2019/05/Unagi-Donburi-I-1.jpg",
  },
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
