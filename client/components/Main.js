import React from 'react';
import Nav from '../components/nav';
import AddTool from '../components/AddTool';
import '../styles/global.scss';
import 'bootstrap/dist/css/bootstrap.css';

const Main = () => {
  return (
    <div>
      <Nav />
      <AddTool />
    </div>
  );
};

export default Main;
