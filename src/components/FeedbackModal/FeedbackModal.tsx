import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiFillStar } from 'react-icons/ai'
import { Form, StarContainer, TitleModal, InputContainer } from './styles';

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
                <input />
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