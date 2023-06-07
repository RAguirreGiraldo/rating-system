import Dialog from './components/Dialog';
import StarRating from './components/StarRating';
import './style/index.css';

function App() {
  return (
    <main>
	      <div className= 'container'>
          <h3>Rating System</h3>
          <StarRating/>
          <Dialog/>
          <button>OPEN DIALOG</button>
	      </div>
	  </main>
  );
}

export default App;
