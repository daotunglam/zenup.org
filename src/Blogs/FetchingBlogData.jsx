import React, { useEffect, useState } from 'react';
import * as cheerio from 'cheerio';
import BoxImgText from '../BoxImgText/BoxImgText.jsx';

export default function FetchingBlogData (blogURL) {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // Fetch the HTML content of the blog page
      const response = await fetch(blogURL); // Replace with the URL of the blog page
      const html = await response.text();

      // Parse the HTML content using Cheerio
      const $ = cheerio.load(html);

      // Extract the relevant information from the parsed HTML
      const title = $('.blog-title').text();
      const image = $('.blog-image').attr('src');
      const text = $('.blog-text').text();

      // Create the blogData object
      const data = {
        title,
        image,
        text,
      };

      // Update the state with the scraped blog data
      setBlogData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {blogData ? (
        <BoxImgText
          title={blogData.title}
          image={blogData.image}
          paragraph={blogData.text}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
