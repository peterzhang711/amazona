import axios from 'axios';
import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from '../constants/productConstants' 




//listProducts is an action , and it is a function, and it returns another function.
//dispathc is a function ,accpets an object
export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try {
        const { data } = await axios.get("/api/products");
        //dispatch another actions, which will change the state in store in future
        dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
    } catch (error) {
        dispatch({type:PRODUCT_LIST_FAIL, payload: error.message})
    }
}