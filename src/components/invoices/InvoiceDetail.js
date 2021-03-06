import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Container,
  Content,
  List,
  ListItem,
  Left,
  Right,
  H2,
  H3,
  Button,
} from 'native-base';
import {Alert} from 'react-native';
import InvoiceItem from '../common/InvoiceItem';
import moment from 'moment';
import {removeInvoice} from '../../redux/actions';
import {connect} from 'react-redux';
const InvoiceDetail = ({route, navigation, removeInvoice, invoices}) => {
  const [invoice, setInvoice] = useState();
  const renderItems = () => {
    if (Array.isArray(invoice.items)) {
      return invoice.items.map((item, index) => {
        return (
          <InvoiceItem
            key={`item-${index}`}
            item={{...item, index: index + 1}}
          />
        );
      });
    }
    return <View />;
  };
  const onRemovePress = () => {
    Alert.alert('Are you sure?', 'do you want to remove this invoice ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Remove it',
        onPress: () => {
          removeInvoice(invoice);
          navigation.goBack();
        },
      },
    ]);
  };
  const getDate = () => {
    const date = invoice.invoice.date;
    if (date) {
      return moment(date).format('L');
    } else {
      return '---';
    }
  };

  useEffect(() => {
    const invoice_id = route.params.invoice?.id;
    const selected_invoice = invoices.find(item => item.id == invoice_id);
    if (!selected_invoice) {
      navigation.goBack();
    } else {
      setInvoice(selected_invoice);
    }
  }, [invoices]);

  if (!invoice) {
    return <View></View>;
  }

  return (
    <Container>
      <Content padder>
        <List style={{marginBottom: 30}}>
          <H3>Customer</H3>
          {!!invoice.customer?.name && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Name:{' '}
                  <Text style={{color: '#666'}}>{invoice.customer?.name}</Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.customer?.address && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Address:{' '}
                  <Text style={{color: '#666'}}>
                    {invoice.customer?.address}
                  </Text>
                </Text>
              </View>
            </ListItem>
          )}
        </List>
        <List style={{marginBottom: 30}}>
          <H3>Vehicle info</H3>
          {!!invoice.vehicle?.make && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Make:{' '}
                  <Text style={{color: '#666'}}>{invoice.vehicle?.make}</Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.vehicle?.model && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Model:{' '}
                  <Text style={{color: '#666'}}>{invoice.vehicle?.model}</Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.vehicle?.color && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Color:{' '}
                  <Text style={{color: '#666'}}>{invoice.vehicle?.color}</Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.vehicle?.odometer && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Odometer:{' '}
                  <Text style={{color: '#666'}}>
                    {invoice.vehicle?.odometer}
                  </Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.vehicle?.vin && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  VIN No.:{' '}
                  <Text style={{color: '#666'}}>{invoice.vehicle?.vin}</Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.vehicle?.plate && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Plate No.:{' '}
                  <Text style={{color: '#666'}}>{invoice.vehicle?.plate}</Text>
                </Text>
              </View>
            </ListItem>
          )}
        </List>
        <List style={{marginBottom: 30}}>
          <H3>Invoice info</H3>
          {!!invoice.invoice?.number && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Invoice No.:{' '}
                  <Text style={{color: '#666'}}>{invoice.invoice?.number}</Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.invoice?.issue && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Customer issue:{' '}
                  <Text style={{color: '#666'}}>{invoice.invoice?.issue}</Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.invoice?.order_number && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Work Order No.:{' '}
                  <Text style={{color: '#666'}}>
                    {invoice.invoice?.order_number}
                  </Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.invoice?.tech && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Tech:{' '}
                  <Text style={{color: '#666'}}>{invoice.invoice?.tech}</Text>
                </Text>
              </View>
            </ListItem>
          )}
          {!!invoice.invoice?.date && (
            <ListItem>
              <View>
                <Text style={{color: '#222'}}>
                  Date: <Text style={{color: '#666'}}>{getDate()}</Text>
                </Text>
              </View>
            </ListItem>
          )}
        </List>
        <List style={{marginBottom: 30}}>
          <H3>Items</H3>
          {renderItems()}
        </List>
        <View style={{flexDirection: 'row'}}>
          <Button
            full
            style={{marginRight: 15, flex: 1}}
            onPress={() =>
              navigation.navigate('EditInvoice', {
                invoice: invoice,
              })
            }>
            <Text>Edit</Text>
          </Button>
          <Button
            full
            danger
            bordered
            style={{flex: 1}}
            onPress={onRemovePress}>
            <Text>Remove</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    removeInvoice: invoice => {
      dispatch(removeInvoice(invoice));
    },
  };
};

const mapStateToProps = store => {
  return {
    invoices: store.invoices,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InvoiceDetail);
