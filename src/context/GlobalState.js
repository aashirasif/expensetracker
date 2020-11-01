import React,{createContext,useReducer} from 'react';

const transaction_list = [
    { amount: 60, description: "Aashir" },
    { amount: 50, description: "Checking"},
    { amount: 40, description: "Food"}
]

export const transactionContext = createContext (transaction_list)

export const TransactionProvider = ({children}) => {
    const [state,dispatch] = useReducer(TransactionProvider,transaction_list);

    function addTransaction(tObj){
        dispatch({
            type: "ADD",
            payload: {
                amount : tObj.amount,
                description : tObj.description
            }
        })
    }
    return (
        <transactionContext.Provider value={{
            transaction: state,
            addTransaction
        }}>
            {children}
        </transactionContext.Provider>
    )
}