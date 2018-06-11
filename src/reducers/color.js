const initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
  case 'FETCH_ALL_COLORS':
    return [...payload];
  case 'FETCH_ONE_COLOR':
    return [...payload];
  case 'FETCH_RANGE_COLORS':
    return [...payload];
  default: return state;
  }
};
