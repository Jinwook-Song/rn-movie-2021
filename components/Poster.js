import React from "react";
import Proptypes from "prop-types";
import styled from "styled-components/native";
import { apiImage } from "../api";
import { popcornUrl } from "../utils";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({ url }) =>
  url ? (
    <Image source={{ uri: apiImage(url) }} />
  ) : (
    <Image source={{ uri: popcornUrl }} />
  );

Poster.propTypes = {
  url: Proptypes.string,
};

export default Poster;
