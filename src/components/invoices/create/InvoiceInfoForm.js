import {Button, Form, Icon, Input, Item, Text, View} from 'native-base';
import React, {useState} from 'react';
import {Controller} from 'react-hook-form';
import InputError from '../../common/InputError';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
const InvoiceInfoForm = ({control, errors, setValue, watch}) => {
  const [showDatePicker, setShowDatepicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || watch('invoice.date');
    setValue('invoice.date', currentDate);
    setShowDatepicker(false);
  };

  const getDate = () => {
    const date = watch('invoice.date');
    if (date) {
      return moment(date).format('L');
    } else {
      return '---';
    }
  };

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

        <Item error={!!errors.invoice?.date}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Date: {getDate()}</Text>
            <Button onPress={() => setShowDatepicker(true)}>
              <Icon type="MaterialCommunityIcons" name="calendar" />
            </Button>
          </View>
        </Item>
        <InputError message={errors.invoice?.date?.message} />

        {showDatePicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={watch('invoice.date')}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </Form>
    </View>
  );
};

export default InvoiceInfoForm;
