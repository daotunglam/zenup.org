import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { Popover, Typography } from '@mui/material';

export default function BlogPostCards() {
  const [blogData, setBlogData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

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

  const handleCardClick = (event, blog) => {
    setAnchorEl(event.currentTarget);
    setSelectedBlog(blog);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
    setSelectedBlog(null);
  };

  const handleClosePopover = () => {
    setSelectedBlog(null);
  };

  const open = Boolean(anchorEl);

  const popoverStyle = {
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    left: '50%',
    width: '90vw',
    maxwidth: '1024px',
    height: '90dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    zIndex: 999,
  };

  const popoverOverlay = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'transparent',
    // zIndex: '-1',
  }

  const iframeStyle = {
    border: 'none',
    width: '100%',
    height: '100%',
    padding: '16px',
    boxSizing: 'border-box',
    overflow: 'hidden'
  };

  return (
    <>
      <div style={{ display: 'grid', gridGap: '16px', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {blogData.map(blog => (
          <div
            key={blog.id}
            onClick={(event) => handleCardClick(event, blog)}
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

      {selectedBlog && (
        <>
          <div className='popoverOverlay' style={popoverOverlay} onClick={handleClosePopover} />
          <div style={popoverStyle}>
            <iframe
              src={selectedBlog.url}
              title="Website"
              style={iframeStyle}
            />
          </div>
        </>
      )}
    </>
  );
}

{/* <Typography variant="h6">{selectedBlog.title}</Typography>
            <Typography variant="subtitle1">{selectedBlog.date}</Typography>
            <img src={selectedBlog.featuredImage} alt="Blog Post" style={{ maxWidth: '100%', marginBottom: '8px' }} />
            <Typography variant="body1">{selectedBlog.content}</Typography>
            <Typography variant="subtitle2">{selectedBlog.author}</Typography> */}
