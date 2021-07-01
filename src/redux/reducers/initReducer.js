import {INIT} from '../actions/types';

const defaultValue = null;
export default init = (state = defaultValue, action) => {
  switch (action.type) {
    case INIT: {
      return action.data;
    }
  }
  return state;
};
