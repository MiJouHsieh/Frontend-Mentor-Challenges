import PropTypes from "prop-types";

export function Spacing({ className = "", ...props }) {
  return (
    <div
      className={`w-full border-white ${className}`}
      {...props}
    ></div>
  );
}
Spacing.propTypes = {
  className: PropTypes.string,
};
