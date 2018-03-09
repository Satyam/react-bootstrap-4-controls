import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.css';

const FormButtons = ({ children, className, ...props }) => {
  return (
    <div className={classNames('rb4c-form-buttons', className)} {...props}>
      {children}
    </div>
  );
};

FormButtons.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default FormButtons;
