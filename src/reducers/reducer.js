import { SignalCellularNullSharp } from "@material-ui/icons";


export const initialState = {
  basket:[
    {
		"id": "001",
		"name": "teli",
		"surname": "dhrako",
		"address": "misto mame",
		"age":31},
    {
            "id": "002",
            "name": "teli",
            "surname": "dhrako",
            "address": "misto mame",
            "age":31},
   {
                "id": "003",
                "name": "teli",
                "surname": "dhrako",
                "address": "misto mame",
                "age":31},
              ],
    isLogin: false,
   
  };
  
  // Selector
  
  const reducer = (state, action) => {

    switch (action.type) {
      case "SIGNIN_TRUE":
        return {
          
            ...state,
            isLogin:true
               
        };
     case "SIGNIN_FALSE":
       return{
         ...state,
         isLogin:false
       };
      default:
        return state;
    }
  };
  
  export default reducer;