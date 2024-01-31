import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AiFillStar } from 'react-icons/ai'
import { Form, StarContainer, TitleModal, InputContainer } from './styles';
import { Rating } from 'react-simple-star-rating'
import feedbackServices from '@/src/services/feedback/feedbackServices';

interface PropsModal {
    openModal: any;
    closeModal: any;
}


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      overflow: 'auto'
    },
  };

export default function FeedbackModal( props:PropsModal ) {
  const { openModal, closeModal } = props
  const [rating, setRating] = useState<number>(0)
  const [userName, setUserName] = useState<string>('')
  const [userEmail, setUserEmail] = useState<string>('')
  const [comentary, setComentary] = useState<string>('')

  async function sendFeedback() {
     try {
        const response = await feedbackServices.sendFeedback(userName, comentary)
        console.log('Resposta do servidor', response.json)
     } catch (error) {
      console.log('Erro ao enviar feedback', error)
     }
  }

  const handleRating = (rate: number) => {
    setRating(rate)
  }
    return(
    <div>
        <Modal
            isOpen={openModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
         >
            <Form>
            <StarContainer>
                <AiFillStar size={20} color='#ff9700' />
                <AiFillStar size={20} color='#ff9700' />
                <AiFillStar size={20} color='#ff9700' />
                <AiFillStar size={20} color='#ff9700' />
                <AiFillStar size={20} color='#ff9700' />
            </StarContainer>

            <TitleModal>
                <h2>Avaliar Produto</h2>
            </TitleModal>
             
              <InputContainer>
                <label htmlFor="">Nome:</label>
                <input 
                  onChange={(e:any) => setUserName(e.target.value)} 
                />
              </InputContainer>

              <InputContainer>
                <label htmlFor="">Email:</label>
                <input 
                  onChange={(e:any) => setUserEmail(e.target.value)} 
                />
              </InputContainer>
              
              <InputContainer>
                <label htmlFor="">Com quantas entrelas você gostaria de avaliar este produto?</label>
                <Rating
                  onClick={handleRating}
                 />
              </InputContainer>

              <InputContainer>
                <label htmlFor="">Escreva sua mensagem:</label>
                <textarea 
                  placeholder='Escreva sua mensagem aqui...'
                  onChange={(e:any) => setComentary(e.target.value)}
                />
              </InputContainer>

              <p>Ao avaliar você concorda com o tratamento dos seus dados pessoais conforme a nossa Política</p>
              <div id='btn-avaliar'>
                <button onClick={() => sendFeedback()}>
                  AVALIAR
                </button>
              </div>
            </Form>
      </Modal>
    </div>
    )
}