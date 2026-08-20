import PropTypes from 'prop-types';

/**
 * Input component with Stitch design system styling
 * @param {Object} props - Component props
 * @param {string} [props.type='text'] - Input type
 * @param {string} [props.placeholder] - Input placeholder
 * @param {string} [props.value] - Input value
 * @param {function} [props.onChange] - Change handler
 * @param {string} [props.className] - Additional class names
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {string} [props.label] - Input label
 * @param {string} [props.id] - Input ID
 * @param {string} [props.error] - Error message
 * @returns {JSX.Element} Input component
 */
export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  label,
  id,
  error,
}) {
  const baseClasses = 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm';
  const errorClasses = error ? 'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500' : '';

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`${baseClasses} ${errorClasses}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
};
