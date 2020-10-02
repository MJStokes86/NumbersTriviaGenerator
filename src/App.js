import React, { Component } from 'react'
import { createStore } from 'redux' 
import  Counter from './components/Counter'
import  counterReducer from './reducers/counterReducer'
import { Provider } from 'react-redux';
import './App.css'

const store = createStore(counterReducer)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Provider store={store}>
          <Counter/>
          </Provider>
        </header>
      </div>
    )
  }
}


export default App;
