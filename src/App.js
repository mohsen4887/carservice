import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import Navigation from './navigation';
import Home from './components/Home';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Root} from 'native-base';
import {store, persistedStore} from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <Root>
          <Navigation />
        </Root>
      </PersistGate>
    </Provider>
  );
};

export default App;
