import PropTypes from 'prop-types';

function Sectoin({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

Sectoin.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Sectoin;
