import React from 'react';
import birthday from '../data/birthday';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

export default class Load extends React.Component {
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
  render() {
    return (
      <div>
      <Table
          fixedHeader={true}
          selectable={true}
          multiSelectable={true}
      >
        <TableHeader
            displaySelectAll={true}
            adjustForCheckbox={true}
          >
          <TableRow>
            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Name">中文姓名</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Status">英文姓名</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Status">生日</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={true}
          showRowHover={true}
        >
          {this.state.data.map( (birth, index) => (
            <TableRow key={index} selected={birth.selected}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{birth.chinese_name}</TableRowColumn>
              <TableRowColumn>{birth.english_name}</TableRowColumn>
              <TableRowColumn>{birth.birthday}</TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
      </Table>
      </div>
    );
  }
}