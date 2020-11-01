import React,{useContext,useState} from 'react';
import {transactionContext} from '../context/GlobalState';

export default function TransactionList() {
    let transaction = useContext(transactionContext);
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
