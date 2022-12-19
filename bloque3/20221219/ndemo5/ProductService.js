// Implementado utilizando Axios https://axios-http.com/
// npm i axios
// yarn add axios
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
const PRODUCT_URL = 'http://localhost:3000/products';
export default class ProductService {
    constructor() {
        console.log('ProductService via Axios ...');
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios(`${PRODUCT_URL}/${id}`);
            if (response.status === 200) {
                return response.data;
            }
            return null;
        });
    }
    search(filter = "") {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${PRODUCT_URL}?productName_like=${filter}`;
            //console.log(`URL: ${url}`);
            let response = yield axios(url);
            let data = [];
            if (response.status === 200) {
                data = response.data;
            }
            return data;
        });
    }
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            let postResponse = yield axios.post(`${PRODUCT_URL}`, data);
            if (postResponse.status === 200) {
                alert("¡La operación fué satisfactoria!");
            }
        });
    }
    edit(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let putResponse = yield axios.put(`${PRODUCT_URL}/${id}`, data);
            if (putResponse.status === 200) {
                alert("¡La operación fué satisfactoria!");
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios.delete(`${PRODUCT_URL}/${id}`);
            if (response.status === 200) {
                alert("¡La operación fué satisfactoria!");
            }
        });
    }
}
