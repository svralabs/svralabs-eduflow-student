import PropTypes from 'prop-types';

/**
 * Card component with Stitch design system styling
 * @param {Object} props - Component props
 * @param {string} [props.title] - Card title
 * @param {string} [props.subtitle] - Card subtitle
 * @param {string} [props.children] - Card content
 * @param {string} [props.className] - Additional class names
 * @param {string} [props.variant='default'] - Card variant: 'default', 'elevated', 'outlined'
 * @returns {JSX.Element} Card component
 */
export default function Card({
  title,
  subtitle,
  children,
  className = '',
  variant = 'default',
}) {
  const baseClasses = 'rounded-lg p-6';
  const variantClasses = {
    default: 'bg-white',
    elevated: 'bg-white shadow-md',
    outlined: 'bg-white border border-gray-200',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={classes}>
      {title && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'elevated', 'outlined']),
};
