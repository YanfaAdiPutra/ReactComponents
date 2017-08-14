import React, { Component } from 'react';
import { AutoComplete } from 'antd';

import ReactDOM from 'react-dom';

function onSelect(value) {
  console.log('onSelect', value);
}

class AutoCompleteInput extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        placeholder="input here">
      </AutoComplete>
    );
  }
}

export default AutoCompleteInput;
