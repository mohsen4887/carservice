import React from 'react';
import {
  Container,
  ListItem,
  List,
  Content,
  Form,
  Left,
  Body,
  Item,
  Input,
  View,
  Text,
} from 'native-base';
const CreateInvoice = () => {
  const items = [
    {
      index: 1,
      title: 'this is first title',
      unitPrice: 100,
      totalPrice: 200,
    },
    {
      index: 2,
      title: 'this is second title',
      unitPrice: 3500,
      totalPrice: 3500,
    },
    {
      index: 3,
      title: 'this is third title',
      unitPrice: 410,
      totalPrice: 4100,
    },
  ];

  const renderItem = item => {
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
  return (
    <Container>
      <Content padder>
        <Form style={{marginBottom: 20}}>
          <Text style={{fontSize: 17, fontFamily: 'sans-serif-medium'}}>
            Customer info:
          </Text>
          <Item>
            <Input placeholder="Customer Name" />
          </Item>
          <Item>
            <Input multiline placeholder="Address" />
          </Item>
        </Form>
        <Form style={{marginBottom: 20}}>
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

        <Form style={{marginBottom: 20}}>
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

        <Form style={{marginBottom: 20}}>
          <Text style={{fontSize: 17, fontFamily: 'sans-serif-medium'}}>
            Add Item:
          </Text>
          <Item>
            <Input multiline placeholder="Work Performed" />
          </Item>
          <Item>
            <Input placeholder="Unit Price" />
          </Item>
          <Item>
            <Input placeholder="Total Price" />
          </Item>
        </Form>

        <List>
          {items.map(item => {
            return renderItem(item);
          })}
        </List>
      </Content>
    </Container>
  );
};

export default CreateInvoice;
