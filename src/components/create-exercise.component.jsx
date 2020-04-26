import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      users: ['test user'],
      username: 'test user'
    })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <select name="username" id="" ref="userInput" required className="form-control" value={this.state.username} onChange={this.onChange}>
              {
                this.state.users.map(user => {
                  return <option key={user} value={user}> {user} </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" required name="description" className="form-control" value={this.state.description} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="duration">Duration (in minutes):</label>
            <input type="text" required name="duration" className="form-control" value={this.state.duration} onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <div>
            <DatePicker selected={this.state.date} onChange={this.onChange}/>
            </div>
          </div>
        </form>
      </div>
    )
  }
}