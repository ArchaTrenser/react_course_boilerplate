import React from 'react';
import {Link} from 'react-router-dom';
import PostList from './PostList';
import PostFilter  from './PostFilters';

const DashboardPage = () => (
  <div>
       <PostList />
       <PostFilter />
       <Link to="/create" className="button">Add Post</Link>
  </div>
);

export default DashboardPage;
