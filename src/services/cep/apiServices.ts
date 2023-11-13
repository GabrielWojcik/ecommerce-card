import apiCep from "./apiCep";

class CepService {
    cep!: string | undefined;

    constructor() {
    }

    public async sendCep(cep: string): Promise<any> {
        try {
            const { data } = await apiCep.get(`/${cep}/json/`)
            return data;
        } catch (err: any) {
            console.log('error in services cep', err);
        }
    }
}

export default new CepService();