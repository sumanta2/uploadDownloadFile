import changeUrl from "./manageData";//here import the upDown file which is a reducer

 import  {combineReducers} from "redux"; //it help to combine multiple reducer Here use only one reducer

const rootReducer=combineReducers({
    changeUrl:changeUrl
});

export default rootReducer;