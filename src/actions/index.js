import { ADD_EXPENCE, ADD_INCOME, DELETE_EXPENCE } from "./types";

export const addIncome = (income) => {
  return {
    type: ADD_INCOME,
    payload: income,
  };
};

export const addExpence = (expence) => {
  return {
    type: ADD_EXPENCE,
    payload: expence,
  };
};

export const deleteExpence = (id) => {
  return {
    type: DELETE_EXPENCE,
    payload: id,
  };
};
