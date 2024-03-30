import React from 'react';

const BlogPost = () => {
  return (
    <div>
      <h2>Demo Blog Post</h2>
      <p>
        This is some sample content for a demo blog post. This blog post does not actually exist and is only for
        demonstration purposes.
      </p>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div>
      <h1>Our Blog</h1>
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </div>
  );
};

export default BlogPage;
