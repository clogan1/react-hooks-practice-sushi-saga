import React, { useState } from 'react'

function SushiWallet({ balance, setBalance}) {
    const [walletForm, setWalletForm] = useState(0)

    function changeHandler(e){
        setWalletForm(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault();
        setBalance(balance + parseInt(walletForm));
        document.querySelector('#wallet').reset();
    }

    return (
        <div className="walletDiv">
            <h3>Add Balance</h3>
                <form id="wallet" onChange={changeHandler} onSubmit={submitHandler}>
                    <input type="radio" id="10" value="10" name="amount"/>
                    <label>$10</label><br></br>
                    <br></br>
                    <input type="radio" id="25" value="25" name="amount" />
                    <label>$25</label><br></br>
                    <br></br>
                    <input type="radio" id="50" value="50"  name="amount" />
                    <label>$50</label><br></br>
                    <br></br>
                    <input type="radio" id="100" value="100" name="amount" />
                    <label>$100</label><br></br>
                    <br></br>
                    <input type='submit' value="Add" id="add-btn"/>

            </form>
            
        </div>
    )
}

export default SushiWallet
