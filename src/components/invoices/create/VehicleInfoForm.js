import {Form, Input, Item, Text, View} from 'native-base';
import React from 'react';
const VehicleInfoForm = ({onGetVehicleInfo}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Form>
        <Text style={{fontSize: 17, fontFamily: 'sans-serif-medium'}}>
          Vehicle info:
        </Text>
        <Item>
          <Input placeholder="Make" />
        </Item>
        <Item>
          <Input placeholder="Model" />
        </Item>
        <Item>
          <Input placeholder="Color" />
        </Item>
        <Item>
          <Input placeholder="Odometer" />
        </Item>
        <Item>
          <Input placeholder="VIN No." />
        </Item>
        <Item>
          <Input placeholder="PLATE No." />
        </Item>
      </Form>
    </View>
  );
};

export default VehicleInfoForm;
