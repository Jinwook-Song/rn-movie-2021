import React from "react";
import styled from "styled-components/native";
import Proptypes from "prop-types";
import { theme } from "../../colors";

const TextInput = styled.TextInput`
  background-color: ${theme.green};
  color: ${theme.white};
  margin: 20px;
  padding: 15px 10px;
  border-radius: 15px;
  font-weight: 400;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    placeholder={placeholder}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    returnKeyType={"search"}
    placeholderTextColor={theme.gray}
    clearTextOnFocus={true}
  />
);

Input.propTypes = {
  placeholder: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  onSubmit: Proptypes.func.isRequired,
};

export default Input;
