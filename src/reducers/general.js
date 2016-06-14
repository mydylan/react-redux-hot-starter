import * as types from '../constants/const';

const initialState = {};

export default function general(state = initialState, action) {
  console.log("%c ACTION --- " + action.type + " --- TIME: " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds(), "color:blue");
  switch (action.type) {
    default:
      return state;
  }
};
