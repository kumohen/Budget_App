import { ADD_EXPENCE, ADD_INCOME, DELETE_EXPENCE } from "../actions/types";

const initialState = {
  incomes: [],
  expences: [],
  total: 0,
};
function calTotal(item, total) {
  let result;
  result = total + parseInt(item.value);
  return result;
}
function totalCalEx(item, total) {
  let result;
  result = total - parseInt(item.value);
  return result;
}
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_INCOME:
      let totalCal = calTotal(action.payload, state.total);
      console.log(totalCal);
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
        total: totalCal,
      };
    case ADD_EXPENCE:
      let totalEx = totalCalEx(action.payload, state.total);

      return {
        ...state,
        expences: [...state.expences, action.payload],
        total: totalEx,
      };
    case DELETE_EXPENCE:
      let item = state.expences.filter((item) => item.id !== action.payload);
      console.log(item);
      let itemTodelete = state.expences.find(
        (item) => item.id === action.payload
      );
      let newTotal = state.total + parseInt(itemTodelete.value);
      return {
        ...state,
        expences: item,
        total: newTotal,
      };
    default:
      return state;
  }
}
