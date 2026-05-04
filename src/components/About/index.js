import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: '100%' }}
        alt="Cover for the photography portfolio"
      />
      <div className="my-2">
        <p>
          I&rsquo;m a photographer based out of the Midwest with a soft spot for natural light,
          honest food, and the small details of everyday places. The galleries above pull from
          ongoing personal work and recent commercial shoots — restaurant exteriors, market
          interiors, portraits, and landscapes that I keep coming back to.
        </p>
        <p>
          This site is also a working portfolio of my front-end work. It&rsquo;s a single-page
          React app: the navigation lifts the active category into shared state, the gallery
          reads from a local photo manifest, and the modal traps focus and listens for the
          escape key. Use the contact form above if you&rsquo;d like to reach me.
        </p>
      </div>
    </section>
  );
}

export default About;
