import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn, signOut } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1>React - Redux </h1>

      <hr />
      <h3>{isLogged ? 'User Info (only visible when logged in)' : null}</h3>
      <img src={logo} className='App-logo' alt='logo' />
      {!isLogged ? (
        <button id='signIn' onClick={() => dispatch(signIn())}>
          Sign In
        </button>
      ) : (
        <button id='signOut' onClick={() => dispatch(signOut())}>
          Sign Out
        </button>
      )}
      <hr />
      <h2>Counter: {counter}</h2>
      <button id='increment' onClick={() => dispatch(increment())}>
        Increment +
      </button>
      <button id='decrement' onClick={() => dispatch(decrement())}>
        Decrement -
      </button>
      <hr />
      <div className='footer'>
        <p>Built with Create-React-App & Redux</p>
      </div>
    </div>
  );
}

export default App;
