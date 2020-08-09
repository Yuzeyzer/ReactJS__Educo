const http = axios.create({
  baseURL: 'http://data.fixer.io/api',
});
const key = '1ae27209db692293e8928baeb31838b7';

export default {
	getValute: http.get(`/latest?access_key=${key}&format=1`)
};
