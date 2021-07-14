import React, { useState } from 'react';
import './NewExpense.css';
const NewExpense = (props) => {
	const [ enterTitle, setTitle ] = useState('');
    const [ enterAmount, setAmount ] = useState('');
    const [ enterDate, setDate] = useState('');

	const onChangeTitle = (event) => {
		setTitle(event.target.value);
		
	};
    const onChangeAmount = (event) => {
		setAmount(event.target.value);
		
	};
    const onChangeDate = (event) => {
		setDate(event.target.value);
		
	};

	const onSubmitHandler = (event) => {
		event.preventDefault();
        const expense = {
            title:enterTitle,
            amount:enterAmount,
            date:enterDate
        }
        console.log(expense);
	};

	return (
		<div className="new-expense">
			<form onSubmit={onSubmitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input type="text" onChange={onChangeTitle} />
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input type="number" onChange={onChangeAmount} min="0.01" />
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input type="date" onChange={onChangeDate} min="2019-01-01" max="2022-12-31" />
					</div>
				</div>
				<div className="new-expense__actions">
					<button type="submit">Add Expense</button>
				</div>
			</form>
		</div>
	);
};

export default NewExpense;
