
import ExpenseItem from './components/ExpenseItem';
import React from 'react';
import NewExpense from './components/NewExpense';
function App() {
  const date = new Date();
  
  return (
    <>
     
      <NewExpense />
      <ExpenseItem date={date} title="Marketing" price="7600"/>
      <ExpenseItem date={date} title="Car Insurance" price="3600"/>
      <ExpenseItem date={date} title="Online Shopping" price="3500"/>
      <ExpenseItem date={date} title="Grocery" price="12600"/>
    </>
  );
}

export default App;
