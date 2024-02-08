import apiBase from "./api";

class FeedbackService {
    title!: string | undefined;
    content!: string | undefined;

    constructor() {
    }

    public async sendFeedback(title: string, content: string): Promise<any> {
        try {
            const { data } = await apiBase.post('/routes', {
                title,
                content
            })
            return data
        } catch (err: any) {
            console.log('error in service sendFeedback', err)
        }
    }

    public async getFeedback(): Promise<any> {
        try {
            const { data } = await apiBase.get('/get-feedback')
            return data
        } catch (err: any) {
            console.log('error in service getFeedback', err)
        }
    }
}
export default new FeedbackService()