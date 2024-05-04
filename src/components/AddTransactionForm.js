import React, { useState } from "react";

function AddTransactionForm(props) {
  const {transactions, setTransactions, getTransactions } = props;
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  console.log(date);
  console.log(description);
  console.log(category);
  console.log(amount);


  function submit(){
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  date,
  description,
  category,
  amount,
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:3000/transactions", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    getTransactions();
  })
  .catch((error) => console.error(error));
  }


  return (
    <div className="ui segment">
      <div className="ui form">
        <div className="inline fields">
          <input 
            type="date" 
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input 
          type="text" 
          name="description" 
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}

          />
          <input 
          type="text" 
          name="category" 
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
          value ={category}
          />
          <input 
          type="number" 
          name="amount" 
          placeholder="Amount" 
          step="0.01"
          onChange = {(e) => setAmount(e.target.value)}
          value = {amount}
          />
        </div>
        <button className="ui button" type="submit" onClick={submit}>
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default AddTransactionForm;
