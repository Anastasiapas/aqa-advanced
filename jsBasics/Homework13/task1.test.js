const axios = require('axios');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const baseUrl = 'https://jsonplaceholder.typicode.com/';
const postData = JSON.parse(readFileSync(resolve(__dirname, 'dataPost.json'), 'utf-8'));
const putData = JSON.parse(readFileSync(resolve(__dirname, 'dataPut.json'), 'utf-8'));

axios.interceptors.request.use(
	function (config) {
		if (!baseUrl) {
			console.error('BaseUrl is null or undefined');
			return Promise.reject(new Error('BaseUrl should be present'));
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

test('Get user by ID', async () => {
	const response = await axios.get(baseUrl + 'users/5', {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	console.log(response.data);
	expect(response.status).toEqual(200);
	expect(response.data.username).toEqual('Kamren');
	expect(response.data.id).toEqual(5);
	expect(response.data.address.zipcode).toContain('33');
});

test('Get all posts', async () => {
	const response = await axios.get(baseUrl + 'posts', {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	console.log(response.data);
	expect(response.data.length).toEqual(100);
});

test('Get ToDo', async () => {
	const response = await axios.get(baseUrl + '/todos/5', {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	console.log(response.data);
	expect(response.data.completed).toEqual(false);
});

test('Update ToDo', async () => {
	const response = await axios.put(baseUrl + '/todos/5', putData, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	console.log(response.data);
	expect(response.data.completed).toEqual(true);
});

test('Create new post', async () => {
	const response = await axios.post(baseUrl + 'posts', postData, {
		headers: {
			'Content-Type': 'application/json',
		},
	});
	console.log(response.data);
	expect(response.data.title).toEqual('The Great Gatsby');
});
