import { useState } from 'react';
import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import './style/index.css';

function App() {

  const [showDialog, setShowDialog] = useState(false);

  function closeDialog()
  {
    setShowDialog(false);
  }
  
  return (
    <main>
	      <div className= 'container'>
          <div className='stars-Rating-Container'>
            {!showDialog && <StarRating/>}
          </div>
          {showDialog && <Dialog onClose={closeDialog} /> }
          <button onClick={() => setShowDialog(true)}>
            Open Dialog
          </button>   
	      </div>
	  </main>
  );
}

export default App;
