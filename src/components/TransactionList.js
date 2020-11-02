import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export default function TransactionList() {
    let transaction = useContext(GlobalContext);
    return (
        <div >
            <h4>History</h4>
            <hr />
            <ul className="t-list">
                {transaction.map((tObj, ind) => {
                    return (
                        <li>
                          <span>{tObj.description}</span>
                          <span>${tObj.amount}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
