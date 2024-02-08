import { JSXElementConstructor, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { ContainerFeedback } from "./styles";
import feedbackServices from '@/src/services/feedback/feedbackServices';

interface FeedBackProps {
    name: string;
    comentary: string;
}

// interface dataFeedback {
//     feedback: []
// }

export default function FeedbackProduct(props: FeedBackProps) {
    const [feedback, setFeedback] = useState<any>([])

    async function getFeedback() {
        try {
           const response = await feedbackServices.getFeedback()
           setFeedback(response.list)
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
                feedback.map((item: { content: string; createdAt: string; id: string; title: string }) => (
                    <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.content}</p>
                    </div>
                ))
            }
             
        </ContainerFeedback>
    )
}