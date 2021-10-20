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
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1560109947-543149eceb16?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      }}
    />
  );

Poster.propTypes = {
  url: Proptypes.string,
};

export default Poster;
