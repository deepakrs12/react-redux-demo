import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContainer from './components/UserContainer';
// import IceCreamContainer from './components/IceCreamContainer';
// import CakeContainer from './components/CakeContainer';
// import HooksBurgerContainer from './components/HooksBurgerContainer';
// import HooksCakeContainer from './components/HooksCakeContainer';
// import NewCakeContainer from './components/NewCakeContainer';
// import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <IceCreamContainer />
        <HooksBurgerContainer />
        <HooksCakeContainer /> */}
        {/* <NewCakeContainer />
        <ItemContainer cake/>
        <ItemContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
