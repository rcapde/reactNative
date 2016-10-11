/* the place where we combine the reducers to call
them later in our containers or components¡
*/
import { combineReducers } from 'redux';
import dataReducer from './data_reducer';
import SelectionReducer from './selection_reducer';
import SelectItem from './selectItem_reducer';

export default combineReducers ({
    data: dataReducer,
    selectedLibraryId: SelectionReducer,
    selectedItem: SelectItem
});
