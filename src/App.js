import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHomeData } from './services/homeApi';
import { updateHome } from './redux/actions/home-actions';
import Home from './components/Home/Home';
import TestItem from './components/TestItem/TestItem';
import './styles.scss';

function App() {
  const data = useSelector(state => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchHomeData().then(res => dispatch(updateHome(res.data)));
  }, [dispatch]);

  return (
    <div className="container">
      {
        <Home data={data}>
          <TestItem />
        </Home>
      }
    </div>
  );
}

export default App;
