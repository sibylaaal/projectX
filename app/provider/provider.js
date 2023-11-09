
'use client'
import { Provider } from "react-redux";
import store from "../componenets/redux/store/store";
import Navbar from "../componenets/header";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../componenets/query/queryclint";




export default function ProviderRedux(props){
    return(
        <QueryClientProvider client={queryClient}>

        <Provider store={store}>
           
            {props.data}
        </Provider>
        </QueryClientProvider>

    )
}