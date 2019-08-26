import React, { Component, Fragment } from 'react';
import { withFirebase } from './Firebase';
import * as ROUTES from './constants/routes';
import Button from 'react-bootstrap/Button';
import Header from './Header.js'
import Spinner from 'react-bootstrap/Spinner'
import SearchBar from './SearchBar.js'
import People from './People.js'
import Projects from './Projects.js'
import PageNav from './PageNavigation.js'


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      category: "people",
    }

    this.setCategory = this.setCategory.bind(this);
    this.setPage = this.setPage.bind(this);
    this.prepUsers = this.prepUsers.bind(this);
  }

  setCategory = (category, page) => {
    this.setState({category: category});
    this.setPage(page);
    if (category === 'people'){
      this.prepUsers();
    }
    else if (category === 'projects'){

    }
    else {

    }
  }

  setPage = (param) => {
    this.setState({page: param});
  }
  prepUsers = async (props) => {
    let members = [];
    await this.props.firebase.userList.get().then((querySnapshot) => {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // let member = {};
            // member[doc.id] = doc.data();
            // members.push(member);
            members.push(doc.data());
        });
        this.setState({members: members});
    });
  }

  signOut = (props) => {
    this.props.firebase.signOutUser();
    this.props.history.push(ROUTES.SIGN_IN);
  }
  logCredentials = () => {
    console.log(this.props.firebase.user);
  }

  //HEY ROBERT WHAT IS UP BUD
  //TODO this is basically where you can get started.
  render(props) {
    let content;
    if (this.state.category === 'people') {
      if (this.state.members) {
        content = <> <People category="people" start={this.state.page} members={this.state.members} history={this.props.history}/>
        <PageNav itemsPerPage={8} page={this.state.page} queryList={this.state.members} setPage={this.setPage}/> </>
      } else {
        content = <Spinner />
      }
    }
    else if (this.state.category === 'projects'){
      if (this.state.projects) {
        content = <Projects category="projects" start={this.state.page}/>
      } else {
        content = <Spinner />
      }
    }
    else if (this.state.category === 'resources') {
      content = <People category="resources"/>
    }
    return (
        <div className="container-full">
            <Header setCategory={this.setCategory}/>
            <SearchBar/>
            <div className="content">
              <div className="overlay-red top-gap">
                {content}
              </div>
            </div>
        </div>
        // <header className="App-header">
        //   {this.props.firebase.user ? (
        //     <Fragment>
        //       <h2>
        //         Hi {this.props.firebase.userData.name.first}
        //       </h2>
        //       <img className="profile" src={this.props.firebase.userData.photoURL} alt="userPhoto"/>
        //     </Fragment>
        //   ) : (
        //     <Spinner/>
        //     )
        //   }
        //
        //   <h2>
        //     Apex Member Dashboard
        //   </h2>
        //   <Button variant="outline-light" onClick={this.signOut}>SIGN OUT</Button>
        //   <Button variant="outline-light" onClick={this.logCredentials}>LOG CREDS</Button>
        //
        // </header>
    );
  }
}

export default withFirebase(HomePage);
