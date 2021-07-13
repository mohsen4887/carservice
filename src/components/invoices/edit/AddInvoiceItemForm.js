import {Button, Form, Input, Item, Text, View} from 'native-base';
import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import InputError from '../../common/InputError';

const AddInvoiceItemForm = ({onAddItemPress, itemForm}) => {
  const {
    reset,
    control,
    handleSubmit,
    formState: {isSubmitted, errors},
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const onSubmit = data => {
    onAddItemPress(data);
    reset();
  };

  return (
    <View>
      <Form style={{marginBottom: 20}}>
        <Text style={{fontSize: 17, fontFamily: 'sans-serif-medium'}}>
          Add Item:
        </Text>
        <Item error={!!errors.title}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                multiline
                placeholder="Work Performed"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="title"
          />
        </Item>
        <InputError message={errors.title?.message} />
        <Item error={!!errors.unitPrice}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                keyboardType="number-pad"
                placeholder="Unit price"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="unitPrice"
          />
        </Item>
        <InputError message={errors.unitPrice?.message} />
        <Item error={!!errors.totalPrice}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                keyboardType="number-pad"
                placeholder="Total price"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="totalPrice"
          />
        </Item>
        <InputError message={errors.totalPrice?.message} />
      </Form>
      <Button onPress={() => handleSubmit(onSubmit)()}>
        <Text>Add Item</Text>
      </Button>
    </View>
  );
};

export default AddInvoiceItemForm;
