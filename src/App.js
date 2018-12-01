import React, { Component } from 'react';
import Faker from 'faker';
import Comment from './Coment';
import Approve from "./Approve";

class App extends Component {
  render() {
    return (
      <div className="ui cards">
        <Approve>
          <Comment img={Faker.image.avatar()} name={Faker.name.firstName()} time="6:00 pm"content={Faker.lorem.words()}/>
        </Approve>
        <br/>
        <Approve>
          <Comment img={Faker.image.avatar()} name={Faker.name.firstName()} time="7:00 pm"content={Faker.lorem.words()}/>
        </Approve>
      </div>
    );
  }
}

export default App;
