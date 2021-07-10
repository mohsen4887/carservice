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
import {addNewInvoice} from '../../../redux/actions';
import {connect} from 'react-redux';

const CreateInvoice = ({navigation, addNewInvoice}) => {
  const [items, setItems] = useState([]);
  const {
    reset,
    control,
    handleSubmit,
    formState: {isSubmitted, errors},
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onAddItemPress = data => {
    setItems([...items, data]);
  };

  const submitInvoice = data => {
    const invoice = {
      ...data,
      items,
    };
    addNewInvoice(invoice);
    setItems([]);
    reset();
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button dark transparent onPress={() => handleSubmit(submitInvoice)()}>
          <Text>Save</Text>
        </Button>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Content padder>
        <CustomerInfo control={control} errors={errors} />
        <VehicleInfoForm control={control} errors={errors} />
        <InvoiceInfoForm control={control} errors={errors} />
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

const mapDispatchToProps = dispatch => {
  return {
    addNewInvoice: data => {
      dispatch(addNewInvoice(data));
    },
  };
};
export default connect(null, mapDispatchToProps)(CreateInvoice);
