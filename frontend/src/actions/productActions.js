import { 
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL
 } from '../constants/productConstants'

 const listProducts = () => async (dispatch) => {
   try {
     dispatch({ type: PRODUCT_LIST_REQUEST })

   }catch  (error) {


   }
 }