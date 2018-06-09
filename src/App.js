import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: #3f9081;
  padding: 0 20px;
`;

const Name = styled.h1`
  letter-spacing: 1px;
  color: white;
  padding: 30px 0 20px;
  font-weight: bold;
  text-align: center;
`;

const WorkspaceDesc = styled.p`
  color: white;
  padding-bottom: 30px;
  font-size: 20px;
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <HeaderWrapper>
          <Name>Copy Paste Components</Name>
          <WorkspaceDesc>Testing Sandbox</WorkspaceDesc>
        </HeaderWrapper>
      </div>
    );
  }
}

export default App;
