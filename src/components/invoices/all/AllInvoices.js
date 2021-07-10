import React from 'react';
import {View, Text, Container, Content, Button} from 'native-base';
import {connect} from 'react-redux';
import InvoiceCard from './InvoiceCard';
const AllInvoices = ({navigation, invoices}) => {
  console.log(invoices);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          dark
          transparent
          onPress={() => navigation.navigate('CreateInvoice')}>
          <Text>Add</Text>
        </Button>
      ),
    });
  }, [navigation]);

  const renderInvoices = () => {
    console.log(invoices);
    if (Array.isArray(invoices)) {
      if (invoices.length > 0) {
        return invoices.map((invoice, index) => {
          return <InvoiceCard item={invoice} key={`invoice-${index}`} />;
        });
      }
    }
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: 10,
          minHeight: 300,
        }}>
        <Text style={{marginBottom: 50}}>Nothing !</Text>
        <Button
          onPress={() => navigation.navigate('CreateInvoice')}
          dark
          bordered
          style={{alignSelf: 'center'}}>
          <Text>Add first invoice</Text>
        </Button>
      </View>
    );
  };

  return (
    <Container>
      <Content padder>{renderInvoices()}</Content>
    </Container>
  );
};

const mapStateToProps = store => {
  return {
    invoices: store.invoices,
  };
};

export default connect(mapStateToProps, null)(AllInvoices);
