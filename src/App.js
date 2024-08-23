
import React, { useState } from 'react';
import designOverview from '../src/assets/designOverview.png'
import Modal from 'react-modal/lib/components/Modal';
import Chessboard from './components/Chessboard';



function App() {

  const [modalIsOpen, setModalOpen] = useState(true)

  function closeModal() {
    setModalOpen(false)
  }

  return (
    
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4em'}}>
      <Chessboard />
    </div>
  );
}

export default App
