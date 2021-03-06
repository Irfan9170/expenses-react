
import ExpenseItem from './components/ExpenseItem';
import React,{useState} from 'react';
import NewExpense from './components/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  const [expenses,setExpenses] = useState(DUMMY_DATA);
 

 
  const onExpenseData = (expense)=>{
    setExpenses ( prevExpenses =>{
      return [expense,...prevExpenses]
    })
  }
  return (
    <>
      <NewExpense onExpenseData={onExpenseData}/>
      {expenses.map( expense =>{ 
        return <ExpenseItem key={expense.id} title={expense.title} date={expense.date} price={expense.amount} />})}
    </>
  );
}

export default App;
