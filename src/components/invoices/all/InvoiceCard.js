import {Text, View} from 'native-base';
import React from 'react';
const InvoiceCard = ({item}) => {
  const getTotalPrice = () => {
    let total = 0.0;
    if (Array.isArray(item.items)) {
      if (item.items.length > 0) {
        item.items.map(item => (total += parseFloat(item.totalPrice)));
      }
    }
    return total;
  };
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
        elevation: 3,
        marginBottom: 20,
      }}>
      <View>
        <Text>Invoice No.: {item.invoice.number}</Text>
        <Text>Issue: {item.invoice.issue}</Text>
        <Text>price: {getTotalPrice()}</Text>
      </View>
    </View>
  );
};

export default InvoiceCard;
