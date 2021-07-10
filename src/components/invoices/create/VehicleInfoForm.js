import {Form, Input, Item, Text, View} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
import InputError from '../../common/InputError';
const VehicleInfoForm = ({control, errors}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Form>
        <Text style={{fontSize: 17, fontFamily: 'sans-serif-medium'}}>
          Vehicle info:
        </Text>
        <Item error={!!errors.make}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Make"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="make"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.make?.message} />

        <Item error={!!errors.model}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Model"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="model"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.model?.message} />

        <Item error={!!errors.color}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Color"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="color"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.color?.message} />

        <Item error={!!errors.odometer}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="Odometer"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="odometer"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.odometer?.message} />

        <Item error={!!errors.vin}>
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="VIN No."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="vin"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.vin?.message} />

        <Item error={!!errors.plate}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                placeholder="PLATE No."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="plate"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.plate?.message} />
      </Form>
    </View>
  );
};

export default VehicleInfoForm;
