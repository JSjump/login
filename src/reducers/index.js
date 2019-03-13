import {combineReducers} from "redux";
import auth from './auth';
import flashMessage from './flashMessages';
export default combineReducers({
    auth,
    flashMessage
})
