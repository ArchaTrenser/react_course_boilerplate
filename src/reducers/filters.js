
const filtersReducerDefaultState = {
  title: '',
  description: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TITLE_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_DESCRIPTION_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_TITLE':
      return {
        ...state,
        sortBy: 'title'
      };
    case 'SORT_BY_DESCRIPTION':
      return {
        ...state,
        sortBy: 'description'
      };
    default:
      return state;
  }
};
