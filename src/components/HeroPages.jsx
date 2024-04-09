import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function HeroPages({ name }) {
  return (
    <>
      <section className="hero-pages">
        <div className="hero-pages__overlay"></div>
        <div className="container">
          <div className="hero-pages__text">
            <h3>{name}</h3>
            <p>
              <Link to="/">Home</Link> / {name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}


HeroPages.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HeroPages;
