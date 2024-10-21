export const ADD_INPUT = 'ADD_INPUT';
export const CALCULATE_RESULT = 'CALCULATE_RESULT';

export const addInput = (input) => {
  return {
    type: ADD_INPUT,
    payload: input,
  };
};

export const calculateResult = () => {
  return {
    type: CALCULATE_RESULT,
  };
};
