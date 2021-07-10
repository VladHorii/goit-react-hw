import PropTypes from 'prop-types';

function Sectoin({ title, children }) {
  return (
    <div className="section-wrapper">
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Sectoin.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sectoin;
