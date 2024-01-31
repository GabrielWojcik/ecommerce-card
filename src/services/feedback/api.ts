import axios from "axios";

const baseURL = 'http://localhost:3000/api/routes'

const apiBase = axios.create({ baseURL });

export default apiBase;