import React from 'react';
import PropTypes from 'prop-types';

const DetailItem = ({ label, detail }) => (
  <li>
    <style jsx>
      {`
      li {
        display: flex;
        padding-right: 1rem;
        margin: 0.5rem 0;

        span {
          align-self: center;

          &.label {
            flex: 6;
            margin-right: 1rem;
            font-size: 1.25rem;
          }
          &.detail {
            flex: 5;
            font-size: 1.5rem;
          }
        }
      }
      `}
    </style>
    <span className="label">{label}:</span>
    <span className="detail">{detail}</span>
  </li>
);

DetailItem.propTypes = {
  label: PropTypes.string.isRequired,
  detail: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default DetailItem;
