import React, {Component} from 'react';
import 'bulma/css/bulma.css';
import { Container, Content} from 'bloomer/lib/layout/Container';
import ProfileCardList from './components/ProfileCardList';
import './App.css';
import { } from 'bloomer/lib/elements/Content';

class App extends Component {
  state = {
    userData: [],
    title: 'Random People'
    
  };

  loadData = async () => {
    const response = await fetch('https://randomuser.me/api/?results=6');
    const data = await response.json();
    return data.results;
  };

  handleClick = async () => {
    const newUserData = await this.loadData();

    this.setState({
      userData: newUserData
    });
  };

  async componentDidMount() {
    const userData = await this.loadData();

    this.setState({
      userData: userData
    });
  }

  render() {
    const { title, userData } = this.state;
    return (
      
    <Container>
      <h3 class="title is-3">{title}</h3>
    
  
        <button onClick={this.handleClick}>Click here: next group</button>
        <ProfileCardList userData={userData} />

     </Container>
    
    );
  }
}

export default App;
