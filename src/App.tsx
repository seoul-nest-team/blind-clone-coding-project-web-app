import React from 'react';
import { Provider } from 'react-redux';
import store from './common/store';
import Appbar from './appbar/container/Appbar';
import Content from './content/container/Content';

function App() {
    return (
		//Provider 컴포넌트는 리액트에서 액션이 처리되었을 때 이벤트를 받아서 하위에 있는 다른 컴포넌트가 다시 렌더링 될 수 있도록 도와줌
        <Provider store={store}>
            <div className="App">
			    <Appbar/>
                <Content/>
            </div>
        </Provider>
    );
}

export default App;
