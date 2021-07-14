
import ExpenseItem from './components/ExpenseItem';
import React ,{useState} from 'react';
function App() {
  const date = new Date();
   const [name,setName]= useState('');
   const onChange = (e)=>{
     
     setName(e.target.value)

   }
      const onSubmitHandler = (e)=>{
    e.preventDefault();
    console.log(name)
    setName('')
      }
 
  return (
    <>
      <h1>Lets Get Started </h1>
      <h1>Hello</h1>
      <form onSubmit={onSubmitHandler}>
        <input value={name} onChange={onChange} />
        <button>Submit</button>
      </form>
      <ExpenseItem date={date} title="Marketing" price="7600"/>
      <ExpenseItem date={date} title="Car Insurance" price="3600"/>
      <ExpenseItem date={date} title="Online Shopping" price="3500"/>
      <ExpenseItem date={date} title="Grocery" price="12600"/>
    </>
  );
}

export default App;
