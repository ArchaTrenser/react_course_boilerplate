export default (posts,{title, description}) => {
  return posts.filter((post) => {
    const descriptionMatch = post.description ? post.description.toLowerCase().includes(description.toLowerCase()) : true;
    const titleMatch = post.title ? post.title.toLowerCase().includes(title.toLowerCase()) : true;
    return  descriptionMatch && titleMatch;
  })
};
