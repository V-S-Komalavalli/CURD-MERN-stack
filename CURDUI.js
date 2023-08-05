import React, { Component } from 'react';
import axios from 'axios';

export default class CURDUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empid: '',
      res: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:5000/selectemployee', this.state)
      .then((response) => {
        console.log(response.data);
        this.setState({ res: response.data });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4 text-center">Enter EMPID</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="empid"
              className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:border-blue-500"
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
          <div
            id="op"
            className="mt-4 p-2 border border-gray-300 rounded-md bg-gray-50"
          >
            {this.state.res}
          </div>
        </div>
      </div>
    );
  }
}
