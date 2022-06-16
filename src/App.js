import { Provider } from 'react-redux';
import store from './app/store';
import './App.css';
import Users from './components/Users';




function App() {
  return (
    <div className="App">
        <Provider store={store}>
          <Users />
        </Provider>
    </div>
  );
}

export default App;
