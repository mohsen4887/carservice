import React, {useEffect, useState} from 'react';
import {
  Container,
  ListItem,
  List,
  Content,
  Form,
  Button,
  Icon,
  Item,
  Input,
  View,
  Text,
} from 'native-base';
import InvoiceItem from '../../common/InvoiceItem';
import AddInvoiceItemForm from './AddInvoiceItemForm';
import InvoiceInfoForm from './InvoiceInfoForm';
import VehicleInfoForm from './VehicleInfoForm';
import CustomerInfo from './CustomerInfoForm';
import {useForm} from 'react-hook-form';

const CreateInvoice = ({navigation}) => {
  const [items, setItems] = useState([]);

  const onAddItemPress = data => {
    setItems([...items, data]);
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button dark transparent onPress={() => alert()}>
          <Text>Save</Text>
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Content padder>
        <CustomerInfo />
        <VehicleInfoForm />
        <InvoiceInfoForm />
        <AddInvoiceItemForm onAddItemPress={onAddItemPress} />

        <List>
          {items.map((item, index) => {
            return (
              <InvoiceItem
                key={`item-${index}`}
                item={{...item, index: index + 1}}
              />
            );
          })}
        </List>
      </Content>
    </Container>
  );
};

export default CreateInvoice;
