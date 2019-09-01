import React from 'react';
import logo from './logo.svg';
import {_Node, LinkedList} from './linked-list';
import './App.css';

function App() {
  function main(){
    let SLL = new LinkedList();
    SLL.insertFirst('Apollo')
    SLL.insertLast('Boomer')
    SLL.insertLast('Helo')
    SLL.insertLast('Husker')
    SLL.insertLast('Starbuck')
    console.log(SLL)
    SLL.insertLast('Tauhida')
    console.log(SLL)
    SLL.remove('Husker')
    console.log(SLL)
    SLL.insertBefore('Athena', 'Boomer')
    console.log(SLL)
    SLL.insertAfter('Hotdog', 'Helo')
    console.log(SLL)
    SLL.insertAt('Kat', 3)
    console.log(SLL)
    console.log(SLL.display())
    console.log(SLL.size())
    console.log(SLL.findPrevious('Helo'))
    console.log(SLL.findLast())
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <script src='./linked-list'>{main()}</script>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
