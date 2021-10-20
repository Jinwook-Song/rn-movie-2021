import React from "react";
import styled from "styled-components/native";
import Proptypes from "prop-types";
import { theme } from "../../colors";

const TextInput = styled.TextInput`
  background-color: ${theme.white};
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    placeholder={placeholder}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    returnKeyType={"search"}
  />
);

Input.propTypes = {
  placeholder: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};

export default Input;
