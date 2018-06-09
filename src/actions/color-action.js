import superagent from 'superagent';
import { logError } from '../lib/utils';

export const colorSet = (colors) => ({
  type: 'FETCH_ALL_COLORS',
  payload: colors,
});

export const colorSetOne = (color) => ({
  type: 'FETCH_ONE_COLOR',
  payload: color,
});

export const colorSetRange = (colors) => ({
  type: 'FETCH_RANGE_COLORS',
  payload: colors,
});

// --- Async Actions --- //
export const fetchAllColors = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/colors`)
    .then(response => dispatch(colorSet(response.body)))
    .catch(logError);
};

export const fetchOneColor = (color) => (dispatch) => {
  return superagent.get(`${__API_URL__}/colors/${color._id}`)
    .then(response => dispatch(colorSetOne(response.body)))
    .catch(logError);
};

export const fetchRangeColor = (range) => (dispatch) => {
  return superagent.get(`${__API_URL__}/colors/${range}`)
    .then(response => dispatch(colorSetRange(response.body)))
    .catch(logError);
} ;
