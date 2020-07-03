import React, { useEffect } from "react";
import { connect } from "react-redux";
import ExpenceList from "./ExpenceList";

const ExpenceData = ({ expences }) => {
  useEffect(() => {}, [expences]);
  return (
    <div>
      {expences &&
        expences.map((data) => <ExpenceList key={data.id} data={data} />)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expences: state.item.expences,
  };
};

export default connect(mapStateToProps, null)(ExpenceData);
