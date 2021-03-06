import React from 'react';
import ReactDOM from 'react-dom';
// **** (1) createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// **** (2) 스토어를 만들고 현재 값 확인해보기
const store = createStore(rootReducer);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
