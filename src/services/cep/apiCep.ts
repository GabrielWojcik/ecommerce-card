import axios from "axios";

const baseURL = 'https://viacep.com.br/ws/'

const apiCep = axios.create({ baseURL });

export default apiCep;