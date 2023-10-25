import React, { useState } from 'react';
import Modal from 'react-modal';
// import ReactStars from "react-rating-stars-component";
import { AiFillStar } from 'react-icons/ai'
import { Form, StarContainer, TitleModal, InputContainer } from './styles';
import { Rating } from 'react-simple-star-rating'

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

  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate)

    // other logic
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
                <label htmlFor="">Nome e sobrenome:</label>
                <input />
              </InputContainer>

              <InputContainer>
                <label htmlFor="">Email:</label>
                <input />
              </InputContainer>
              
              <InputContainer>
                <label htmlFor="">Com quantas entrelas você gostaria de avaliar este produto?</label>
                <Rating
                  onClick={handleRating}
                 />
              </InputContainer>

              <InputContainer>
                <label htmlFor="">Escreva sua mensagem:</label>
                <textarea placeholder='Escreva sua mensagem aqui...'></textarea>
              </InputContainer>

              

              <p>Ao avaliar você concorda com o tratamento dos seus dados pessoais conforme a nossa Política</p>
              <div id='btn-avaliar'>
                <button>AVALIAR</button>
              </div>
            </Form>
      </Modal>
    </div>
    )
}