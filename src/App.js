import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import './style/index.css';

function App() {
  return (
    <main>
	      <div className= 'container'>
          <StarRating/>
          <Dialog/>
          <button>OPEN DIALOG</button>
	      </div>
	  </main>
  );
}

export default App;
