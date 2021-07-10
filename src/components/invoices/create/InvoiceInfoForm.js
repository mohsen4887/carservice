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

        <Item error={!!errors.invoice_number}>
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
            name="invoice_number"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.invoice_number?.message} />

        <Item error={!!errors.issue}>
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
            name="issue"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.issue?.message} />

        <Item error={!!errors.order_number}>
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
            name="order_number"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.order_number?.message} />

        <Item error={!!errors.tech}>
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
            name="tech"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.tech?.message} />
      </Form>
    </View>
  );
};

export default InvoiceInfoForm;
