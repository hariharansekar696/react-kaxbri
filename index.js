import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import './style.css';
import arrayMove from 'array-move';
import Topic from './Topic';

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

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      items: ['item1', 'item2','item3'],
      components: [<Topic name="hari"/>, <Topic name="karthi"/>]
    };
  }

  componentWillMount = () => {
    let components = [...this.state.components];
    // components.push(<Topic />);
    // components.push(<Topic />);
    // this.setState({components: components});
  }

  onSortEnd = ({oldIndex, newIndex}) => {
    
    this.setState(({components}) => ({
      components: arrayMove(components, oldIndex, newIndex),
    }));
  };
  render() {
      let div = [];
      div.push(      <div>
        <Hello name={this.state.name} />
        <p>
          first one
        </p>
      </div>);
      div.push(      <div>
        <Hello name={this.state.name} />
        <p>
          second one
        </p>
      </div>);div.push(      <div>
        <Hello name={this.state.name} />
        <p>
          third one
        </p>
      </div>);
    return (

      <SortableList items={this.state.components} onSortEnd={this.onSortEnd} />
    );
  }
}

render(<App />, document.getElementById('root'));
