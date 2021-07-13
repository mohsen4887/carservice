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
        <Item error={!!errors.vehicle?.make}>
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
            name="vehicle.make"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.vehicle?.make?.message} />

        <Item error={!!errors.vehicle?.model}>
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
            name="vehicle.model"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.vehicle?.model?.message} />

        <Item error={!!errors.vehicle?.color}>
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
            name="vehicle.color"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.vehicle?.color?.message} />

        <Item error={!!errors.vehicle?.odometer}>
          <Controller
            control={control}
            rules={{
              required: 'This field is required',
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                keyboardType="number-pad"
                placeholder="Odometer"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="vehicle.odometer"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.vehicle?.odometer?.message} />

        <Item error={!!errors.vehicle?.vin}>
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
            name="vehicle.vin"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.vehicle?.vin?.message} />

        <Item error={!!errors.vehicle?.plate}>
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
            name="vehicle.plate"
            defaultValue=""
          />
        </Item>
        <InputError message={errors.vehicle?.plate?.message} />
      </Form>
    </View>
  );
};

export default VehicleInfoForm;
