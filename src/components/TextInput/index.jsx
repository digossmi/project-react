import React from 'react';
import P from 'prop-types';
import './styles.css';

export const TextInput = ({ actionFn, inputValue }) => (
  <input className="text-input" onChange={actionFn} value={inputValue} type="search" placeholder="Type your search" />
);

TextInput.propTypes = {
  inputValue: P.string.isRequired,
  actionFn: P.func.isRequired,
};
