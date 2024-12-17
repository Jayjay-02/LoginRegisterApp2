import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const sampleReceipt = {
  storeName: 'JJK Store',
  date: new Date().toLocaleString(),
  items: [
    { name: 'T-shirt Jay Brand', price: 250 },
    { name: 'T-shirt Jade Brand', price: 250 },
    { name: 'T-shirt Kim Brand', price: 250 },
  ],
  total: 750,
};

export default function ReceiptPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sampleReceipt.storeName}</Text>
      <Text style={styles.date}>Date: {sampleReceipt.date}</Text>

      <View style={styles.itemsContainer}>
        {sampleReceipt.items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price} pesos</Text>
          </View>
        ))}
      </View>

      <Text style={styles.total}>Total: {sampleReceipt.total} pesos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    marginBottom: 20,
  },
  itemsContainer: {
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 14,
    color: '#777',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
