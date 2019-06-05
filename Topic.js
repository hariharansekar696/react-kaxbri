import React, { Component } from 'react';
import { render } from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import './style.css';
import arrayMove from 'array-move';
const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});


class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: ["Topic", "Evaluation"],
      topic: {
        name: "",
        description: ""
      },
      evaluation: {
        description: "",
        maxAttempts: 0,
        passPercentage: 0,
        fullTrack:{
          reviewDuration:0,
          recapDuration:0
        },
        fastrack: {
          reviewDuration:0,
          recapDuraion:0
        }
      },
      components: ["tamil", "mani"]
    }
  }

  render() {
    return (
    <div>
      {this.props.name}
      <SortableList items={this.state.components} onSortEnd={this.onSortEnd} />
    </div>
    )
  }
}

export default Topic;