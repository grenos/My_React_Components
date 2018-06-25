import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

//! - - - -  CSS STARTS HERE  - - - -

const onHoverInputAnim = keyframes`
  from { border-bottom: 1px solid white; }
  to {
    border-bottom: 1px solid red;
  }
`;

const Input = styled.input`
  font-family: 'Special Elite', cursive;
  margin-left: 2.2rem;
  margin-bottom: 2rem;
  width: 220px;
  color: white;
  background: transparent;
  padding: 0.5em;
  border: none;
  border-bottom: 1px solid white;
  letter-spacing: 1px;
  &:focus {
    animation: ${onHoverInputAnim} 0.2s ease-in-out;
    animation-fill-mode: forwards;
    outline: none;
    color: white;
  }
`;

//! - - - -  COMPONENT STARTS HERE  - - - -

class InputNav extends Component {
  handleInput = e => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div>
        <Input
          onChange={this.handleInput}
          type="text"
          placeholder="Search Products"
        />
      </div>
    );
  }
}

export default InputNav;
