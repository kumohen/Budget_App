import React from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import IncomeList from "./IncomeList";

const Display = ({ item }) => {
  useEffect(() => {}, [item]);
  return (
    <div>
      {item && item.map((data) => <IncomeList key={data.id} data={data} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    item: state.item.incomes,
  };
};

export default connect(mapStateToProps, null)(Display);
