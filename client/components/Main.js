import React from 'react';
import Nav from '../components/nav';
import AddTool from '../components/AddTool';
import '../styles/global.scss';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <AddTool />
      </div>
    );
  }
}
