import React from 'react';
import Container from './Container';

const Paragraph = ({show}) => {

    console.log("PARAGRAPH RUNNING!")

  return (
    <Container>{show ? "Here is some paragraph!" : ""}</Container>
  )
}

export default Paragraph;