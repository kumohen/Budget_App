import React, { useState } from "react";
import { connect } from "react-redux";
import { addIncome, addExpence } from "../actions";

const Expence = ({ addIncome, addExpence }) => {
  const [selectI, setselectI] = useState("");
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setselectI(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleSubmmit = (e) => {
    e.preventDefault();
    if (selectI === "-") {
      const id = Math.floor(Math.random() * 10000);
      const expence = { id, description, value };
      addExpence(expence);
      setValue("");
      setDescription("");
    } else {
      const id = Math.floor(Math.random() * 10000);
      const income = { id, description, value };
      addIncome(income);
      setValue("");
      setDescription("");
    }
  };
  return (
    <div className="form_style">
      <form onSubmit={handleSubmmit}>
        <label style={{ display: "flex" }}>
          <select
            value={selectI}
            onChange={handleChange}
            style={{ height: "38px", marginLeft: "3px" }}
          >
            <option value="+">+</option>
            <option value="-">-</option>
          </select>
          <input
            name="numberOfGuests"
            type="number"
            value={value}
            style={{ height: "32px", marginLeft: "3px", width: "20%" }}
            onChange={(e) => setValue(e.target.value)}
          />

          <input
            type="text"
            value={description}
            onChange={handleDescription}
            placeholder="description"
            style={{ height: "32px", width: "60%", marginLeft: "5px" }}
          />
          <button
            style={{ borderRadius: "50%", marginLeft: "5px", outline: "none" }}
          >
            ✔
          </button>
        </label>
      </form>
    </div>
  );
};

export default connect(null, { addIncome, addExpence })(Expence);
