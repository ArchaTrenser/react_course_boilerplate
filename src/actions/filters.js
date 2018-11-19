
export const setTitleFilter = (text = '') => ({
    type: 'SET_TITLE_FILTER',
    text
});
  
export const setDescriptionFilter = (text = '') => ({
    type: 'SET_DESCRIPTION_FILTER',
    text
});
  
export const sortByTitle = () => ({
    type: 'SORT_BY_TITLE'
  });

export const sortByDescription = () => ({
    type: 'SORT_BY_DESCRIPTION'
  });