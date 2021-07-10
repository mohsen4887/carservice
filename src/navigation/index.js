import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Home';
import AllInvoices from '../components/invoices/AllInvoices';
import CreateInvoice from '../components/invoices/create/CreateInvoice';
import EditInvoice from '../components/invoices/EditInvoice';
import InvoiceDetail from '../components/invoices/InvoiceDetail';

const Stack = createStackNavigator();

const InvoicesStack = () => {
  return (
    <Stack.Navigator initialRouteName="AllInvoices">
      <Stack.Screen name="AllInvoices" component={AllInvoices} />
      <Stack.Screen
        options={{title: 'Create Invoice'}}
        name="CreateInvoice"
        component={CreateInvoice}
      />
      <Stack.Screen name="EditInvoice" component={EditInvoice} />
      <Stack.Screen name="InvoiceDetail" component={InvoiceDetail} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Invoices" component={InvoicesStack} />
        <Stack.Screen
          options={{title: 'Create Invoice'}}
          name="CreateInvoice"
          component={CreateInvoice}
        />
        <Stack.Screen name="EditInvoice" component={EditInvoice} />
        <Stack.Screen name="InvoiceDetail" component={InvoiceDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
