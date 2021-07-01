import React from 'react';
import {View, Text, Button} from 'native-base';
import {connect} from 'react-redux';
import {addNewInvoice, clearInvoices} from '../redux/actions';
const Home = props => {
  console.log('props', props);
  const save = () => {
    const invoice = {
      name: 'Mohsen',
      code: '111',
      price: 25000,
    };
    props.addNewInvoice(invoice);
  };
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={() => props.navigation.navigate('AllInvoices')}>
        <Text>Go To About</Text>
      </Button>
      <Button onPress={() => save()}>
        <Text>Add invoice</Text>
      </Button>
      <Button onPress={() => props.clean()}>
        <Text>Clean</Text>
      </Button>
    </View>
  );
};
const mapStateToProps = state => {
  return {
    invoices: state.invoices,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addNewInvoice: data => {
      dispatch(addNewInvoice(data));
    },
    clean: () => {
      dispatch(clearInvoices());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
