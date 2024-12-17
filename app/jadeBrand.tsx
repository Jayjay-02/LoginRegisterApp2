import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

interface Product {
  id: number;
  image: any;
  price: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    image: require("../assets/images/pumaa3.webp"),
    price: "250 pesos",
    description: "Jade Brand T-Shirt - Design 1",
  },
  {
    id: 2,
    image: require("../assets/images/pumaa5.webp"),
    price: "300 pesos",
    description: "Jade Brand T-Shirt - Design 2",
  },
  {
    id: 3,
    image: require("../assets/images/pumaa3.webp"),
    price: "275 pesos",
    description: "Jade Brand T-Shirt - Design 3",
  },
  {
    id: 4,
    image: require("../assets/images/pumaa4.webp"),
    price: "320 pesos",
    description: "Jade Brand T-Shirt - Design 4",
  },
  {
    id: 5,
    image: require("../assets/images/puma5.webp"),
    price: "280 pesos",
    description: "Jade Brand T-Shirt - Design 5",
  },
  
];

export default function PumaBrandPage() {
  const router = useRouter();

  const handleAddToCart = (product: Product) => {
    alert(`${product.description} added to cart!`);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Jade Brand T-Shirts</Text>
        {products.map((product) => (
          <View key={product.id} style={styles.itemContainer}>
            <Image source={product.image} style={styles.image} />
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddToCart(product)}
            >
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.push("/home")}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => router.push("/payments")}
        >
          <Text style={styles.buttonText}>Check out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  backButton: {
    backgroundColor: "#f00",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: 200,
    alignItems: "center",
  },

  checkoutButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    width: 200,
    alignItems: "center",
  },
});