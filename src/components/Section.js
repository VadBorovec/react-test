import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  tite: PropTypes.string,
  children: PropTypes.node,
};
