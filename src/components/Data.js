import React from 'react';
import birthday from '../data/birthday';

export default class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
  }
  componentDidMount() {
    this.setState({
      data: birthday
    });
  }
}