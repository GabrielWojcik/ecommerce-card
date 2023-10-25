import { Star } from 'phosphor-react'
import { ContainerAssessment, ContainerStar } from './Styles'
import { AiFillStar } from 'react-icons/ai'
import FeedbackModal from '../FeedbackModal/FeedbackModal'
import { useState } from 'react'

interface PropsAssessment {

}


export default function Assessment() {
    const [openFeedbackModal, setOpenFeedbackModal] = useState(false);

    function closeModal() {
        setOpenFeedbackModal(false)
    }

    return(
        <ContainerAssessment>
            <h2>Avaliações</h2>
            <ContainerStar>
                <AiFillStar size={20} color='#ff9700' />
                <AiFillStar size={20} color='#ff9700' />
                <AiFillStar size={20} color='#ff9700' />
                <AiFillStar size={20} color='#ff9700' />
                <AiFillStar size={20} color='#ff9700' />
            </ContainerStar>
            
            <button 
            onClick={() => setOpenFeedbackModal(true)}>
                AVALIAR PRODUTO
            </button>

            <FeedbackModal
            openModal={openFeedbackModal}
            closeModal={closeModal}
            />
        
        </ContainerAssessment>
    )
}