import {ListItem, Text, View} from 'native-base';
import React from 'react';
const InvoiceItem = ({item}) => {
  return (
    <ListItem key={`item-${item.index}`}>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 30,
              height: 30,
              backgroundColor: '#666',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
            }}>
            <Text style={{color: 'white'}}>{item.index}</Text>
          </View>
          <View>
            <Text>{item.title}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 10, fontSize: 13, color: '#666'}}>
                {item.unitPrice}$
              </Text>
              <Text style={{fontSize: 13, color: '#666'}}>
                {item.totalPrice}$
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ListItem>
  );
};

export default InvoiceItem;
