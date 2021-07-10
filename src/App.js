
import ExpenseItem from './components/ExpenseItem';
import React ,{useState} from 'react';
function App() {
  const date = new Date();
 
  const [state, setstate] = useState("irfan");
  const clickHandeler=()=>{
    setstate("Updatedddddddd")
  }
  return (
    <>
      <h1>Lets Get Started </h1>
      <h1>Hello {state}</h1> 
      <button onClick={clickHandeler}>Click To change name</button>
      <ExpenseItem date={date} title="Marketing" price="7600"/>
      <ExpenseItem date={date} title="Car Insurance" price="3600"/>
      <ExpenseItem date={date} title="Online Shopping" price="3500"/>
      <ExpenseItem date={date} title="Grocery" price="12600"/>
    </>
  );
}

export default App;
