import { Star } from 'phosphor-react'
import { ContainerAssessment, ContainerStar } from './Styles'
import { AiFillStar } from 'react-icons/ai'
interface PropsAssessment {

}


export default function Assessment() {
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
            
            <button>AVALIAR PRODUTO</button>

        
        </ContainerAssessment>
    )
}