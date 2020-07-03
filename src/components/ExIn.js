import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";

const IncomeExp = ({ incomes, expences }) => {
  useEffect(() => {}, [incomes, expences]);

  let income = 0.0,
    expence = 0.0;
  if (incomes) {
    for (var item of incomes) {
      let value = parseInt(item.value);

      income += value;
    }
  }
  if (expences) {
    for (var item2 of expences) {
      let value = parseInt(item2.value);

      expence += value;
    }
  }

  return (
    <div className="inexp">
      <div className="inexp_in">
        <p>Income</p>
        <p>+{income}</p>
      </div>
      <div className="inexp_ex">
        <p>Expences </p>
        <p>
          -{expence}
          {/* {income !== 0 && expence !== 0
            ? ((expence / income) * 100).toFixed(0) + "%"
            : "0%"} */}
        </p>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    expences: state.item.expences,
    incomes: state.item.incomes,
  };
};

export default connect(mapStateToProps, null)(IncomeExp);
