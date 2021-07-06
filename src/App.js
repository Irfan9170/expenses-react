
import ExpenseItem from './components/ExpenseItem';
function App() {
  const date = new Date();
  
  return (
    <>
      <h1>Lets Get Started</h1>
      <ExpenseItem date={date} title="Marketing" price="7600"/>
      <ExpenseItem date={date} title="Car Insurance" price="3600"/>
      <ExpenseItem date={date} title="Online Shopping" price="3500"/>
      <ExpenseItem date={date} title="Grocery" price="12600"/>
    </>
  );
}

export default App;
