import React,{useState,useContext} from 'react';
import {transactionContext} from '../context/GlobalState';

export default function AddTransaction() {

    let [newDescription,setDescription] = useState("");
    let [newAmount,setAmount] = useState(0);
    let {addTransaction} = useContext(transactionContext);

    const handleAddition = (event) => {
        event.preventDefault();
        const newTransaction = {
            amount : newAmount,
            description : newDescription
        }
        addTransaction(newTransaction);   
    }

    return (
        <div>
            <h4>Add New Transaction</h4>
            <hr/>
            <form className="t-form" onSubmit={handleAddition}>
                <label>
                    Enter Description <br/>
                    <input type="text" required onChange={(ev)=>setDescription(ev.target.value)} />
                </label>
                <br/>
                <label>
                    Enter Amount <br/>
                    <input type="number" required onChange={(ev)=>setAmount(ev.target.value)} />
                </label>
                <br/>
                <input type="submit" id="t-btn" value="Add Transaction"/>
            </form>
        </div>
    )
}
