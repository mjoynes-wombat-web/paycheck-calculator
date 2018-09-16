import React from 'react';
import PropTypes from 'prop-types';

const DetailItem = ({ label, detail }) => (
  <li>
    <style jsx>
      {`
      color: white;
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
