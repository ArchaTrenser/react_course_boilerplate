import database from '../firebase/firebase';

export const addPost =(post)=>({ 
    type : 'ADD_POST',
    post
})

export const startAddPost = (postData = {}) => {
    return (dispatch,getState) => {
      const uid = getState().auth.uid;
      const {
        title = '',
        description =''
      } = postData;
      const post = { title , description };
  
      return database.ref(`users/${uid}/posts`).push(post).then((ref) => {
        dispatch(addPost({
          id: ref.key,
          ...post
        }));
      });
    };
  };
