import axios from 'axios';

import { API_PATHS } from '@/constants/api-paths';
import { Product } from '@/models/product';

import productList from './productList.json';

const fetchAvailableProducts = async (): Promise<Product[]> => {
	return axios
		.get(`${API_PATHS.bff}/products/available/`)
		.then(res => res.data)
		.catch(e => {
			console.error(e);
			// << !!! mocks if any error !!!
			return productList;
		});
};

const fetchProducts = async (): Promise<Product[]> => {
	return axios
		.get(`${API_PATHS.bff}/products`)
		.then(res => res.data)
		.catch(e => {
			console.error(e);
			// << !!! mocks if any error !!!
			return productList;
		});
};

const fetchProductById = async (id: string) => {
	console.info(`GET fetchProductById: ${id}`);

	return axios.get(`${API_PATHS.bff}/products/${id}`).then(res => res.data);
};

const deleteProductById = (id: string) => {
	console.info(`DELETE deleteProductById: ${id}`);

	return axios.delete(`${API_PATHS.bff}/products/${id}`);
};

const saveProduct = (productToSave: Product) => {
	console.info(`PUT saveProduct: ${JSON.stringify(productToSave)}`);

	return axios.put(`${API_PATHS.bff}/products`, productToSave);
};

const createProduct = (productToSave: Product) => {
	console.info(`POST saveProduct: ${JSON.stringify(productToSave)}`);

	return axios.post(`${API_PATHS.bff}/products`, productToSave);
};

export const productApi = {
	fetchAvailableProducts,
	deleteProductById,
	fetchProducts,
	fetchProductById,
	saveProduct,
	createProduct,
};
