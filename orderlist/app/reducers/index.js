/* the place where we combine the reducers to call
them later in our containers or components¡
*/
import { combineReducers } from 'redux';
import dataReducer from './data_reducer';
import SelectionReducer from './selection_reducer';
import CheckoutReducer from  './checkout_reducer';

export default combineReducers ({
    data: dataReducer,
    selectedLibraryId: SelectionReducer,
    checkoutData: CheckoutReducer,
});
