import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal';
import { AiFillStar } from 'react-icons/ai'
import { Form, StarContainer, TitleModal, InputContainer } from './styles';
import { Rating } from 'react-simple-star-rating'
import feedbackServices from '@/src/services/feedback/feedbackServices';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface PropsModal {
    openModal: any;
    closeModal: any;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #FF006C',
  boxShadow: 15,
  p:4,
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
  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <p>Deixe sua avaliação sobre o produto</p>
              {/* <StarContainer>
                  <AiFillStar size={20} color='#ff9700' />
                  <AiFillStar size={20} color='#ff9700' />
                  <AiFillStar size={20} color='#ff9700' />
                  <AiFillStar size={20} color='#ff9700' />
                  <AiFillStar size={20} color='#ff9700' />
              </StarContainer> */}
            </div>
          </Typography>
          <div className='mb-3 mt-3'>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome:</label>
            <input 
              id="nome" 
              type="text" 
              onChange={(e) => setUserName(e.target.value)} 
              className="mt-1 p-2 block w-full  border-gray-300 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              />          
          </div>

          <div className='mb-3'>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail:</label>
            <input 
              id="email" 
              type="text" 
              onChange={(e) => setUserEmail(e.target.value)} 
              className="mt-1 p-2 block w-full  border-gray-300 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>

          <div className='mb-3'>
            <label htmlFor="comentario" className="block text-sm font-medium text-gray-700">Comentário:</label>
            <input 
              id="comentario" 
              type="text" 
              onChange={(e) => setComentary(e.target.value)} 
              className="mt-1 p-2 block w-full  border-gray-300 border-2 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
            />
          </div>
          
          <div className='flex justify-center items-center'>
            <button
              onClick={() => sendFeedback()}
              className='bg-green-500 text-white font-bold p-5 w-screen hover:bg-green-400'>
              Enviar
            </button>
          </div>

        </Box>
      </Modal>
    </div>
  );
}