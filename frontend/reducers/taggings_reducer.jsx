import {
  RECEIVE_TAGGING,
  REMOVE_TAGGING,
  RECEIVE_TAGGING_ERRORS,
  REMOVE_TAGGING_ERRORS
} from '../actions/tag_actions';

const taggingsReducer = (state = [], action) => {

  Object.freeze(state);
  switch(action.type){
    case(RECEIVE_TAGGING_ERRORS):
      return action.errors;
    case(REMOVE_TAGGING_ERRORS):
      return [];
    case(RECEIVE_TAGGING):
      return action.tagging;
    case(REMOVE_TAGGING):
      return action.tagging;
    default:
      return state;
  }
};

export default taggingsReducer;
