import { configureStore} from "@reduxjs/toolkit";
const store = configureStore({
    reducer:{ 
        auth: authslicereducer
    },
    devTools:true

});
export default store;