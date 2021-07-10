import {Button, Form, Input, Item, Text, View} from 'native-base';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';

const CustomerInfo = ({onGetInvoiceInfo}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => console.log(data);
  return (
    <View style={{marginBottom: 20}}>
      <Form>
        <Text style={{fontSize: 17, fontFamily: 'sans-serif-medium'}}>
          Customer info:
        </Text>
        <Controller
          control={control}
          rules={{
            required: 'Enter customer name',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Item error={errors.customerName}>
              <Input
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                placeholder="Customer Name"
              />
            </Item>
          )}
          name="customerName"
          defaultValue=""
        />
        {errors.customerName && (
          <Text style={{color: 'red', marginLeft: 20, fontSize: 12}}>
            {errors.customerName.message}
          </Text>
        )}
        <Controller
          control={control}
          rules={{
            required: 'Enter Address',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Item error={errors.Address}>
              <Input
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                placeholder="Address"
              />
            </Item>
          )}
          name="Address"
          defaultValue=""
        />
        {errors.Address && (
          <Text style={{color: 'red', marginLeft: 20, fontSize: 12}}>
            {errors.Address.message}
          </Text>
        )}
      </Form>
    </View>
  );
};

export default CustomerInfo;
