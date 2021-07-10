import {Form, Input, Item, Text, View} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
import InputError from '../../common/InputError';
const InvoiceInfoForm = ({control, errors}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Form>
        <Text style={{fontSize: 17, fontFamily: 'sans-serif-medium'}}>
          Invoive info:
        </Text>

        <Item error={!!errors.invoice?.number}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Invoice No."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="invoice.number"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.invoice?.number?.message} />

        <Item error={!!errors.invoice?.issue}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Customer Issue"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="invoice.issue"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.invoice?.issue?.message} />

        <Item error={!!errors.invoice?.order_number}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Work Order No."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="invoice.order_number"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.invoice?.order_number?.message} />

        <Item error={!!errors.invoice?.tech}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Tech"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="invoice.tech"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.invoice?.tech?.message} />
      </Form>
    </View>
  );
};

export default InvoiceInfoForm;
