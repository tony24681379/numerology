import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import './DataInput.css'

class DataInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chineseName: props.chineseName
      ,englishName: props.englishName
      ,birthday: props.birthday
    };
  }
  handleChineseName = (e) => {
    this.setState({chineseName: e.target.value});
    console.log(this.state.chineseName);
  }
  handleEnglishName = (e) => {
    this.setState({englishName: e.target.value});
    console.log(this);
  }
  handleBirthday = (e , date) => {
    this.setState({birthday: date});
    console.log(this.state.birthday);
  }
  render() {
    return (
      <div className="DataInput">
        <TextField
          onChange={this.handleChineseName}
          hintText="請輸入中文姓名"
          floatingLabelText="中文姓名"
        /><br/>
        <TextField
          onChange={this.handleEnglishName}
          hintText="請輸入英文姓名"
          floatingLabelText="英文姓名"
        /><br/><br/>
        <DatePicker
          autoOk={true}
          onChange={this.handleBirthday}
          hintText="出生日期"
        />
        </div>
    );
  }
}

export default DataInput;
