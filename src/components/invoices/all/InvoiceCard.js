import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import {Icon, Text, View} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
const InvoiceCard = ({item}) => {
  const navigation = useNavigation();
  const getTotalPrice = () => {
    let total = 0.0;
    if (Array.isArray(item.items)) {
      if (item.items.length > 0) {
        item.items.map(item => (total += parseFloat(item.totalPrice)));
      }
    }
    return total;
  };
  const getDate = () => {
    const date = item.invoice.date;
    if (date) {
      return moment(date).format('L');
    } else {
      return '---';
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() =>
        navigation.navigate('InvoiceDetail', {
          invoice: item,
        })
      }>
      <View
        style={{
          padding: 10,
          borderRadius: 5,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 20,
          borderWidth: 1,
          borderColor: '#ddd',
        }}>
        <View>
          <Text>Invoice No.: {item.invoice.number}</Text>
          <Text>Issue: {item.invoice.issue}</Text>
          <Text>Price: {getTotalPrice()}</Text>
          <Text>Date: {getDate()}</Text>
        </View>
        <Icon type="Feather" name="chevron-right" />
      </View>
    </TouchableOpacity>
  );
};

export default InvoiceCard;
