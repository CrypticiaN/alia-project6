import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="col-md-6 col-lg-4">
        <section className="section has-text-centered">
          <div className="has-text-centered">
            <div
              style={{
                width: "100%",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <h3 classname="has-text-weight-semibold is-size-2 has-text-centered"
              style={{
                  margin: "8px auto 14px auto",
              }}>
              {item.text}
          </h3>
            <Link to={`/serveis/${item.slug}`} className="btn">Ver Más →</Link>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
