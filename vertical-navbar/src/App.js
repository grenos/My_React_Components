import React, { Component } from 'react';
import NavBar from './components/navbar/NavBar';
import Title from './Title';

import { Container, Row } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Container fluid style={{ padding: '0' }}>
          <Row style={{ marginRight: 0 }}>
            <NavBar />
            <Title />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
