import PropTypes from 'prop-types';

/**
 * Icon component with Stitch design system styling
 * @param {Object} props - Component props
 * @param {string} props.name - Icon name
 * @param {string} [props.size='medium'] - Icon size: 'small', 'medium', 'large'
 * @param {string} [props.color='currentColor'] - Icon color
 * @param {string} [props.className] - Additional class names
 * @returns {JSX.Element} Icon component
 */
export default function Icon({
  name,
  size = 'medium',
  color = 'currentColor',
  className = '',
}) {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6',
  };

  const classes = `${sizeClasses[size]} ${className}`;

  return (
    <span className={`material-symbols-outlined ${classes}`} style={{ color }}>
      {name}
    </span>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
  className: PropTypes.string,
};
