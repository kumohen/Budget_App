import React from "react";

const IncomeList = ({ data }) => {
  return (
    <div className="income_list">
      <p style={{ marginRight: "10px" }}>{data && data.description}</p>
      <p>{data && data.value}</p>
    </div>
  );
};

export default IncomeList;
