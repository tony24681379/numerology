import React from 'react';
import birthday from '../data/birthday';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontAwesome from 'react-fontawesome';
import Load from './Load';
import DataInput from './DataInput';

export default class DataTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[],
      tab: 'input'
    }
  }
  
  componentWillMount() {
    this.setState({
      data: birthday
    })
  }

  handleTabChange = (value) => {
    this.setState({
      tab: value
    })
  }

  render() {
    return (
      <Tabs
        value={this.state.tab}
        onChange={this.handleTabChange}
      >
        <Tab icon={<FontAwesome name='calendar'/>} label="計算結果" value="input">
          <div>
            <DataInput
              id={this.state.data[0].id}
              chineseName={this.state.data[0].chineseName}
              englishName={this.state.data[0].englishName}
              birthday={this.state.data[0].birthday}
            />
          </div>
        </Tab>
        <Tab icon={<FontAwesome name='folder-open-o'/>} label="讀取資料" value="load">
          <div>
            <Load data={this.state.data}/>
          </div>
        </Tab>
      </Tabs>
    )
  }
}