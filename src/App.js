import React from 'react';
import './App.css';
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";
import RedditList from "./components/RedditList";

function App() {
  return (
    <div className="App">
      <AddTodo/>
      <VisibleTodoList />
      <RedditList/>
      <Footer/>
    </div>
  );
}

export default App;
