import React from "react";
import Expence from "./Expence";
import Display from "./Display";
import ExpenceData from "./Expence2";
import IncomeExp from "./ExIn";
import { connect } from "react-redux";
import moment from "moment";

const App = ({ total }) => {
  const date = Date.now();

  return (
    <div className="home">
      <h4>Budget In {moment(date).format("MMMM  YYYY")}</h4>
      <h3 className="total"> + {total === 0 ? 0.0 : total}</h3>
      <IncomeExp />
      <Expence />
      <div className="exin_con">
        <div className="income">
          <h3> Income</h3>
          <Display />
        </div>
        <div className="expence">
          <h3> Expence</h3>
          <ExpenceData />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    total: state.item.total,
  };
};
export default connect(mapStateToProps, null)(App);
