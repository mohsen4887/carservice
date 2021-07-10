import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Text,
  View,
} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';
const Home = ({navigation}) => {
  return (
    <Container>
      <Content padder>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            paddingBottom: 20,
            marginBottom: 20,
            borderBottomColor: '#eee',
            borderBottomWidth: 2,
          }}>
          <Text style={{fontSize: 20}}>Car Service</Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          <HomeButton
            title="Invoices"
            onPress={() => navigation.navigate('Invoices')}
          />
          <HomeButton
            title="Customers"
            onPress={() => console.log('Go to customers')}
          />
        </View>
      </Content>
    </Container>
  );
};
export default Home;

const HomeButton = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          minWidth: 150,
          minHeight: 150,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#eee',
          borderRadius: 10,
          elevation: 2,
        }}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
