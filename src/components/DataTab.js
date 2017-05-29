import React from 'react';
import birthday from '../data/birthday';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontAwesome from 'react-fontawesome';
import Load from './Load';
import DataInput from './DataInput';

export default class DataTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      tab: 'load'
    };
  }
  
  componentDidMount() {
    this.setState({
      data: birthday
    });
  }

  handleTabChange = (value) => {
    this.setState({
      tab: value,
    });
  };

  render() {
    return (
      <Tabs
        value={this.state.tab}
        onChange={this.handleTabChange}
      >
        <Tab icon={<FontAwesome name='calendar'/>} label="計算結果" value="input">
          <div>
            <DataInput/>
          </div>
        </Tab>
        <Tab icon={<FontAwesome name='folder-open-o'/>} label="讀取資料" value="load">
          <div>
            <Load data={this.state.data}/>
          </div>
        </Tab>
      </Tabs>
    );
  }
}