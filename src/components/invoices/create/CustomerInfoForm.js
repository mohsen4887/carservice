import {Button, Form, Input, Item, Text, View} from 'native-base';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import InputError from '../../common/InputError';

const CustomerInfo = ({control, errors}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Form>
        <Text style={{fontSize: 17, fontFamily: 'sans-serif-medium'}}>
          Customer info:
        </Text>
        <Item error={!!errors.customer?.name}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Customer Name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="customer.name"
          />
        </Item>
        <InputError message={errors.customer?.name?.message} />
        <Item error={!!errors.customer?.address}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="customer.address"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.customer?.address?.message} />
      </Form>
    </View>
  );
};

export default CustomerInfo;
