import React from 'react';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-inner">
        <img
          src="/photo-port/assets/cover/cover-image.jpg"
          className="about-cover"
          alt="Cover for the photography portfolio"
        />
        <div className="about-text">
          <h2 className="about-heading">About</h2>
          <p>
            I&rsquo;m a photographer based out of the Midwest with a soft spot for natural light,
            honest food, and the small details of everyday places. The galleries above pull from
            ongoing personal work and recent commercial shoots — restaurant exteriors, market
            interiors, portraits, and landscapes that I keep coming back to.
          </p>
          <p>
            This site is also a working portfolio of my front-end work. It&rsquo;s a single-page
            React app built with Vite: the navigation uses React Router v6, the gallery reads from
            a local photo manifest, and the modal traps focus and listens for the escape key.
            Use the contact form above if you&rsquo;d like to reach me.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
