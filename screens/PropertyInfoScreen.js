import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { Children, useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalize } from "../components/Normalise";
import { MaterialIcons } from "@expo/vector-icons";

const PropertyInfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
      headerTitleStyle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 111,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  });
  console.log("Image", route.params);

  const diffrence = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(diffrence) / route.params.oldPrice) * 100;
  return (
    <SafeAreaView>
      <ScrollView>
        <Pressable
          style={{ flexDirection: "row", flexWrap: "wrap", margin: 10 }}
        >
          {route.params.photos.slice(0, 5).map((photo) => (
            <View style={{ margin: 2 }}>
              <Image
                style={{
                  width: 120,
                  height: pixelNormalize(80),
                  borderRadius: pixelNormalize(4),
                }}
                source={{ uri: photo?.image }}
              />
            </View>
          ))}
          <Pressable style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", marginLeft: 20 }}>
              Show More
            </Text>
          </Pressable>
        </Pressable>

        <View
          style={{
            marginHorizontal: 12,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>
              {route.params.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 6,
                marginTop: 7,
              }}
            >
              <MaterialIcons name="stars" size={24} color="green" />
              <Text>{route.params.rating}</Text>
              <View
                style={{
                  backgroundColor: "#003580",
                  paddingVertical: 4,
                  borderRadius: 6,
                  width: 100,
                }}
              >
                <Text style={{ textAlign: "center", color: "white" }}>
                  Genius Level
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />
        <Text
          style={{
            marginTop: 10,
            fontSize: 17,
            fontWeight: "500",
            marginHorizontal: 12,
          }}
        >
          Price for 1 Night and {route.params.adults} adults
        </Text>
        <View
          style={{
            marginTop: 4,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
            marginHorizontal: 12,
          }}
        >
          <Text
            style={{
              color: "red",
              fontSize: 18,
              textDecorationLine: "line-through",
            }}
          >
            {route.params.oldPrice * route.params?.adults}
          </Text>
          <Text style={{ fontSize: 20 }}>
            Rs {route.params.newPrice * route.params.adults}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 12,
            marginTop: 4,
            backgroundColor: "green",
            paddingHorizontal: 4,
            paddingVertical: 5,
            width: 78,
            borderRadius: 4,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            {offerPrice.toFixed(0)} % OFF
          </Text>
        </View>

        <Text
          style={{
            borderColor: "#E0E0E0",
            borderWidth: 3,
            height: 1,
            marginTop: 15,
          }}
        />

        <View
          style={{
            margin: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 60,
          }}
        >
          <View>
            <Text style={{ fontSize: 15, fontWeight: "600", marginBottom: 3 }}>
              Check In
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#007FFF" }}>
              {route.params.selectedDates.startDate}
            </Text>
          </View>

          <View>
            <Text style={{ fontSize: 15, fontWeight: "600", marginBottom: 3 }}>
              Check Out
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "600", color: "#007FFF" }}>
              {route.params.selectedDates.endDate}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyInfoScreen;

const styles = StyleSheet.create({});
