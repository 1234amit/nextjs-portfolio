import React from 'react';

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>This is my blog</h1>
      {children} 
    </div>
  );
};

export default BlogLayout;