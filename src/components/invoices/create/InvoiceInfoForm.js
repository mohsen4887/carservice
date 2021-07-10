import {Form, Input, Item, Text, View} from 'native-base';
import React from 'react';
const InvoiceInfoForm = ({onGetInvoiceInfo}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Form>
        <Text style={{fontSize: 17, fontFamily: 'sans-serif-medium'}}>
          Invoive info:
        </Text>
        <Item>
          <Input placeholder="Invoice No." />
        </Item>
        <Item>
          <Input multiline placeholder="Customer Issue " />
        </Item>
        <Item>
          <Input placeholder="Work Order No." />
        </Item>
        <Item>
          <Input placeholder="Tech" />
        </Item>
      </Form>
    </View>
  );
};

export default InvoiceInfoForm;
