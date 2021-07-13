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
  const {
    reset,
    control,
    handleSubmit,
    register,
    setValue,
    watch,
    formState: {isSubmitted, errors},
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      items: [],
      invoice: {
        date: new Date(),
      },
    },
  });

  const onAddItemPress = data => {
    let items = watch('items');
    items = [...items, data];
    setValue('items', items, {
      shouldValidate: true,
    });
  };

  const submitInvoice = data => {
    const items = watch('items');
    const invoice = {
      ...data,
      items: [...items],
    };
    addNewInvoice(invoice);
    reset();
    navigation.goBack();
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

  useEffect(() => {
    register('items');
    register('invoice.date', {
      required: 'This filed is required',
    });
  }, []);

  return (
    <Container>
      <Content padder>
        <CustomerInfo control={control} errors={errors} />
        <VehicleInfoForm control={control} errors={errors} />
        <InvoiceInfoForm
          control={control}
          errors={errors}
          setValue={setValue}
          watch={watch}
        />
        <AddInvoiceItemForm onAddItemPress={onAddItemPress} />

        <List>
          {watch('items').map((item, index) => {
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
