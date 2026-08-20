import PropTypes from 'prop-types';

/**
 * Badge component with Stitch design system styling
 * @param {Object} props - Component props
 * @param {string} props.children - Badge text
 * @param {string} [props.variant='default'] - Badge variant: 'default', 'success', 'warning', 'danger'
 * @param {string} [props.size='medium'] - Badge size: 'small', 'medium', 'large'
 * @param {string} [props.className] - Additional class names
 * @returns {JSX.Element} Badge component
 */
export default function Badge({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
}) {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  const variantClasses = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };
  const sizeClasses = {
    small: 'px-2.5 py-0.5 text-xs',
    medium: 'px-3 py-0.5 text-sm',
    large: 'px-4 py-1 text-base',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={classes}>
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};
