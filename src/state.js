import { reactive } from "vue";
import axios from 'axios';
export const state = reactive ({

    products :[],
    base_produtcs_api_url:'http://localhost:3000/products',

    getProducts(url){
        axios.get(url).then(response =>{
            console.log(response);
            this.products = response.data
        })
        .catch(err =>{
            console.error(err.message);
        })
    }
})