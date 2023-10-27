
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: 'Arabic', checked: false },
        { id: 2, text: 'English', checked: false },
        { id: 3, text: 'Sciences', checked: false },
      ],
    };
  }

  handleItemClick = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) => ({
        ...item,
        checked: item.id === id,
      })),
    }));
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>
              <label>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => this.handleItemClick(item.id)}
                />
                {item.checked ? <s>{item.text}</s> : item.text}
              </label>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;