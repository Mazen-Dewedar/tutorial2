import React, { useRef, useState } from 'react'

export default function InstaApp() {
    let value = useRef();
    const [name] = useState("Mazen")
    const [Balance, editBalance] = useState(0)
    const [showIndex, editSowIndex] = useState(false)
    const [showTransaction, editshowTransaction] = useState(false)
    const [Transactions, editTransaction] = useState(JSON.parse(localStorage.getItem("Transactions")) || [])
    
    
    let Deposite = () => {
        let amount = +value.current.value
        if (amount!=""){
            editBalance(Balance + amount)
            value.current.value = "";
            let trans = {
                Before: Balance,
                type: "deposite",
                After: Balance + amount
            }
            let copy = [...Transactions]
            copy.push(trans)
            editTransaction(copy)
            localStorage.setItem("Transactions", JSON.stringify(copy))
        }else{
            alert("you have to enter a value")
        }
    }


    let withdraw = () => {
        let amount = +value.current.value
        if(amount!=""){
            if (amount <= Balance) {
                editBalance(Balance - amount)
                let trans = {
                    Before: Balance,
                    type: "withdraw",
                    After: Balance - amount
                }
                let copy = [...Transactions]
                copy.push(trans)
                editTransaction(copy)
                localStorage.setItem("Transactions", JSON.stringify(copy))
    
            }
    
            else {
                alert("Not enough")
            }
        }else{
            alert("you have to enter a value")
        }
        value.current.value = "";
    }
    return (
        <div className='flex w-full justify-center'>
            <div className='container w-full flex justify-center gap-4 flex-col'>
                <p className='font-bold text-center'>Name : {name}</p>
                <p className='font-bold text-center'>Balance : {showIndex ? Balance : "****"}</p>
                <div className='flex flex-col md:flex-row justify-center gap-3'>
                    <button className={`btn text-white w-[200px] btn-neutral`} onClick={() => { editshowTransaction(!showTransaction) }}>{showTransaction ? "Hide Transactions" : "Show Transactions"}</button>
                    <button className={`btn text-white w-[150px] ${showIndex ? "btn-warning" : "btn-primary"}`} onClick={() => { editSowIndex(!showIndex) }}>{showIndex ? "Hide Balance" : "Show Balance"}</button>
                    {
                        showIndex && (
                            <div className='flex flex-row gap-3'>
                                <input ref={value} type="text" placeholder='Enter amount' className='input' />
                                <button onClick={Deposite} className='btn btn-success'>Deposite</button>
                                <button onClick={withdraw} className='btn btn-error'>Withdraw</button>
                            </div>

                        )
                    }

                </div>
                {
                    showTransaction && (

                        Transactions.length == 0 ? (<div className='flex justify-center text-error'>No Transactions</div>) : (
                            <table className='table text-center'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Before Amount</th>
                                        <th>Type</th>
                                        <th>After Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Transactions.map((el, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{el.Before}</td>
                                                    <td className={`p-3 ${el.type == "withdraw" ? "btn btn-error" : "btn btn-success"}`} >{el.type}</td>
                                                    <td>{el.After}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        )
                    )
                }
            </div>
        </div>
    )
}
