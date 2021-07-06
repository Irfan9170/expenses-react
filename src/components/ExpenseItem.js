import './ExpenseItem.css';
function ExpenseItem(props){
    console.log(props)
    return (
       <div className="expense-item">
           <div>July 06 2021</div>
           <div className="expense-item__description">
                <h6> Car Insurance</h6>
                <div className="expense-item__price">Rs3600</div>
           </div>

       </div>
    )

}
export default ExpenseItem;