import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <form>
        <AppBar
          title="生命數字" onLeftIconButtonTouchTap={this.handleToggle}
        />
        <Drawer
          width={200}
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar title="生命數字" onLeftIconButtonTouchTap={this.handleToggle}/>
          <Link to="/"><MenuItem onTouchTap={this.handleClose}>計算結果</MenuItem></Link>
          <MenuItem onTouchTap={this.handleClose} containerElement={<Link to="/Load"/>}>讀取資料</MenuItem>
        </Drawer>
      </form>
    );
  }
}