import React from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SummitChallenge from './Caculate';
import './DataInput.css'

class DataInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      chineseName: props.chineseName,
      englishName: props.englishName,
      birthday: new Date(props.birthday)
    }
  }

  static defaultProps = {
    chineseName: '',
    englishName: '',
    birthday: new Date(),
  }

  handleChineseName = (e) => {
    this.setState({chineseName: e.target.value});
  }

  handleEnglishName = (e) => {
    this.setState({englishName: e.target.value});
  }

  handleBirthday = (e , date) => {
    this.setState({birthday: date});
  }

  render() {
    return (
      <div className="DataInput">
        <TextField
          onChange={this.handleChineseName}
          hintText="請輸入中文姓名"
          floatingLabelText="中文姓名"
          value={this.state.chineseName}
        /><br/>
        <TextField
          onChange={this.handleEnglishName}
          hintText="請輸入英文姓名"
          floatingLabelText="英文姓名"
          value={this.state.englishName}
        /><br/><br/>
        <DatePicker
          autoOk={true}
          onChange={this.handleBirthday}
          hintText="出生日期"
          value={new Date(this.state.birthday)}
        />
        <SummitChallenge birthday={this.state.birthday}/>
      </div>
    )
  }
}

export default DataInput
