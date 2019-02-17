import React from 'react';
import PropTypes from 'prop-types';

// Stateless component -- sem comportamento
const Button = props => <button onClick={props.onClick}>{props.children}</button>;

Button.defaultProps = {
  children: 'Salvar',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string,
};

export default Button;
