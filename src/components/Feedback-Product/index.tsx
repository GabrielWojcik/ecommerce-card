import { useEffect, useState } from "react";
import { ContainerFeedback } from "./styles";
import feedbackServices from '@/src/services/feedback/feedbackServices';

interface FeedBackProps {
    name: string;
    comentary: string;
}

export default function FeedbackProduct(props: FeedBackProps) {
    const [feedback, setFeedback] = useState<any>([]);

    async function getFeedback() {
        try {
           const response = await feedbackServices.getFeedback()
           setFeedback(response)
           console.log('Resposta do servidor GET', response)
        } catch (error) {
         console.log('Erro ao enviar feedback', error)
        }
     }
    
     useEffect(() => {
        getFeedback()
        console.log("feedback carregado",feedback)
     },[feedback])

    return(
        <ContainerFeedback>
            {
                feedback.length === 0 
                ? 
                    <p>Este produto ainda não tem avaliações</p> 
                :   
                    <p>Feedbacks</p>

            }
        </ContainerFeedback>
    )
}