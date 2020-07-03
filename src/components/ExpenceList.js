import React from "react";
import { connect } from "react-redux";
import { deleteExpence } from "../actions";
import { useEffect } from "react";

const ExpenceList = ({ data, deleteExpence, incomes }) => {
  useEffect(() => {}, [data, incomes]);
  const removeItem = (id) => {
    deleteExpence(id);
    console.log(id);
  };
  let income = 0;
  for (var item of incomes) {
    let value = parseInt(item.value);

    income += value;
  }

  return (
    <div className="expence_list">
      <p>E{data.description}</p>
      <p>
        <span style={{ fontSize: "20px" }}>{data.value}</span>
        <span style={{ fontSize: "10px" }}>
          {((data.value / income) * 100).toFixed(1) + "%"}
        </span>
      </p>
      <button
        onClick={() => removeItem(data.id)}
        style={{
          borderRadius: "50%",
          backgroundColor: "rgb(191 17 17)",
          color: "white",
          marginRight: "10px",
          outline: "none",
        }}
      >
        X
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    incomes: state.item.incomes,
  };
};
export default connect(mapStateToProps, { deleteExpence })(ExpenceList);
