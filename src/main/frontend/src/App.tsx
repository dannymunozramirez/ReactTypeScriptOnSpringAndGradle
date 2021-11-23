import React, { Component } from "react";
import "./app.scss";
import { Button, Content } from "carbon-components-react";
import  TutorialHeader  from './components/Header/TutorialHeader';

function App() {
  return (
    <>
    
      <TutorialHeader />
      <Content>
        <Button>Button</Button>
      </Content>
    </>
  );
}

export default App;
