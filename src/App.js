import React, { Component } from 'react';
import Form from './component/form';
import List from './component/list';
class App extends Component {
  state = {
    courses: [
      { name: "html" },
      { name: "css" },
      { name: "js" }
    ],
    current: ''
  }

  //Update course #######

  upCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  //Add course ###########

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({ name: current })
    this.setState({
      courses,
      current: ''
    })

  }

  //Delete######
  delete = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1)
    this.setState({
      courses
    })
  }

  //edit ######
  edit = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({
      courses
    })
  }

  render() {
    const { courses } = this.state;
    const list = courses.map((course, index) => {
      return <List delete={this.delete} index={index} details={course} key={index} edit={this.edit} />
    })
    return (
      <section className="App">
        <h2>Add course</h2>
        <Form current={this.state.current} upCourse={this.upCourse} addCourse={this.addCourse} />
        <ul>{list}</ul>
      </section>
    );
  }
}

export default App;
