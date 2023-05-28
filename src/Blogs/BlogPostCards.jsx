import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import M from './BlogPostCards.module.scss';

export default function BlogPostCards() {
  const [blogData, setBlogData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);

  useEffect(() => {
    // Fetch the JSON data
    fetch('./Blogs/blogs.json')
      .then(response => response.json())
      .then(data => setBlogData(data))
      .catch(error => console.error(error));
  }, []);

  if (blogData.length === 0) {
    return <div>Loading...</div>;
  }

  const handleCardClick = blogIndex => {
    setSelectedBlogIndex(blogIndex);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
    setSelectedBlogIndex(null);
  };

  const handlePrevBlog = () => {
    setSelectedBlogIndex(prevIndex => prevIndex - 1);
  };

  const handleNextBlog = () => {
    setSelectedBlogIndex(prevIndex => prevIndex + 1);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div className={M.blogPostCardsContainer}>
        {blogData.map((blog, index) => (
          <div
            key={blog.id}
            onClick={() => handleCardClick(index)}
          >
            <Card
              date={blog.date}
              author={blog.author}
              title={blog.title}
              text={blog.content}
              image={blog.featuredImage}
            />
          </div>
        ))}
      </div>

      {selectedBlogIndex !== null && (
        <>
          <div className={M.popoverOverlay} onClick={handleClosePopover} />
          
          <div className={M.popoverContainer}>
            <iframe
              className={M.iframe}
              src={blogData[selectedBlogIndex].url}
              title="Website"
            />
            <div className={M.navButtons}>
              <button
                className={M.prevButton}
                onClick={handlePrevBlog}
                disabled={selectedBlogIndex === 0}
              >
                ‹
              </button>
              <button
                className={M.nextButton}
                onClick={handleNextBlog}
                disabled={selectedBlogIndex === blogData.length - 1}
              >
                ›
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

