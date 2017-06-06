import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';

export default class Load extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
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
            {this.props.data.map((birth, index) => (
              <TableRow key={index} selected={birth.selected}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{birth.chineseName}</TableRowColumn>
                <TableRowColumn>{birth.englishName}</TableRowColumn>
                <TableRowColumn>{birth.birthday}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}