import React, { Component } from 'react';
import logo from './images/todo_logo.png';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
      add: '',
      edit: '',
      search: '',
    }
  }

  updateArray() {
    if (this.state.add !== '') {
      this.state.array.push({ id: new Date().getTime(), data: this.state.add, edit: false })
      this.setState({
        add: ''
      })
    } else { alert('add Some Text first') }
  }
  changeInput(i) {
    this.state.array[i].edit = true
    this.setState({
      array: this.state.array
    })
  }
  deletFrmArray(i) {
    this.state.array.splice(i, 1)
    this.setState({
      array: this.state.array
    })
  }
  editLi(i) {
    if (this.state.edit !== '') {
      this.state.array[i].data = this.state.edit
      this.state.array[i].edit = false
      this.setState({
        edit: ''
      })
    } else {
      alert('Pleas add some text in input first')
    }
  }
  cancleEdit(i) {
    this.state.array[i].edit = false
    this.setState({
      array: this.state.array
    })
  }

  renderHeader() {
    return <nav>
      <img className="logoImg" src={logo} /> <h1>ToDo App</h1>
    </nav>
  }
  renderFooter() {
    return <footer>
      <span>Created By ShZ</span>
    </footer>
  }
  renderBody() {
   return <div className="main">
      <h2>ToDo LiSt</h2>
      <br />
      <div className="inputli">
        <input id="input" placeholder="Enetr Some Text" onChange={(e) => this.setState({ add: e.target.value })} value={this.state.add} />
        <button onClick={() => this.updateArray()}>Add</button>
      </div>

      <ul>
        {this.state.array.map((d, i) => {
          return d.edit === false ? <li className="li" key={d.id}><span>{d.data}</span> <button onClick={() => this.changeInput(i)}>Edit</button><button onClick={() => this.deletFrmArray(i)}>Dellet</button></li>
            : <li className="inputli" key={d.id}><input placeholder={d.data} onChange={(e) => this.state.edit = e.target.value} /><button onClick={() => this.editLi(i)}>Done</button><button onClick={() => this.cancleEdit(i)}>Cancle</button></li>
        })}
      </ul>
      <div>
        {this.state.array.length !== 0 && <div className="inputli"> <input placeholder='Search Input' onChange={(e) => this.setState({ search: e.target.value })} /></div>}
      </div>
      {this.state.search !== '' && <div>
        <h2>Search Result</h2>
        <ul>
          {this.state.array.map((e) => {
              return e.data.indexOf(this.state.search) !== -1 && <li className="li" key={e.id}>{e.data}</li>
            })}
        </ul>

      </div>}
    </div>
  }
  render() {
    return (
      <div className="App">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }
}
export default App;
