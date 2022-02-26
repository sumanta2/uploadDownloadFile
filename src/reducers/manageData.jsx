var initialState=""
const changeUrl=(state=initialState,action)=>{
    switch(action.type){
        case "ShowData" :return action.payload;  
        default :return state;
    }
}
export default changeUrl;
