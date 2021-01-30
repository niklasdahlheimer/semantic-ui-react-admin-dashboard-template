import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import {Button, Card, Header, Icon, Statistic, Grid} from 'semantic-ui-react'
import PropTypes from 'prop-types';

function SideBar() {
  return <div className="ui sidebar inverted vertical menu sidebar-menu" id="sidebar">
    <div className="item">
      <div className="header">General</div>
      <div className="menu">
        <a className="item">
          <div>
            <Icon name={"tachometer alternate"}/>
            Dashboard
          </div>
        </a>
      </div>
    </div>
    <div className="item">
      <div className="header">
        Administration
      </div>
      <div className="menu">
        <a className="item">
          <div><i className="cogs icon"></i>Settings</div>
        </a>
        <a className="item">
          <div><i className="users icon"></i>Team</div>
        </a>
      </div>
    </div>

    <a href="#" className="item">
      <div>
        <Icon name={"chart line"}/>
        Charts
      </div>
    </a>

    <a className="item">
      <div>
        <Icon name={"lightbulb"}/>
        Apps
      </div>
    </a>
    <div className="item">
      <div className="header">Other</div>
      <div className="menu">
        <a href="#" className="item">
          <div>
            <Icon name={"envelope"}/>
            Messages
          </div>
        </a>

        <a href="#" className="item">
          <div>
            <Icon name={"calendar alternate"}/>
            Calendar
          </div>
        </a>
      </div>
    </div>

    <div className="item">
      <form action="#">
        <div className="ui mini action input">
          <input type="text" placeholder="Search..."/>
          <button className="ui mini icon button">
            <i className=" search icon"></i>
          </button>
        </div>
      </form>
    </div>
    <div className="ui segment inverted">
      <div className="ui tiny olive inverted progress">
        <div className="bar" style={{width: "54%"}}></div>
        <div className="label">Monthly Bandwidth</div>
      </div>

      <div className="ui tiny teal inverted progress">
        <div className="bar" style={{width: "78%"}}></div>
        <div className="label">Disk Usage</div>
      </div>
    </div>
  </div>;
}

function TopBar() {
  return <nav className="ui top fixed inverted menu">
    <div className="left menu">
      <a href="#" className="sidebar-menu-toggler item" data-target="#sidebar">
        <i className="sidebar icon"></i>
      </a>
      <a href="#" className="header item">
        Semantic UI
      </a>
    </div>

    <div className="right menu">
      <a href="#" className="item">
        <i className="bell icon"></i>
      </a>
      <div className="ui dropdown item">
        <i className="user cirlce icon"></i>
        <div className="menu">
          <a href="#" className="item">
            <i className="info circle icon"></i> Profile</a
          >
          <a href="#" className="item">
            <i className="wrench icon"></i>
            Settings</a
          >
          <a href="#" className="item">
            <i className="sign-out icon"></i>
            Logout
          </a>
        </div>
      </div>
    </div>
  </nav>;
}


function InfoCard(props) {
  return <Card fluid>
    <Card.Content>
      <Header floated={"right"} color={props.color} icon={props.icon}/>
      <Card.Header>
        <Header color={props.color} content={props.contentHeader}/>
      </Card.Header>
      <Card.Meta content={props.contentMeta}/>
      <Card.Description>
        {props.contentDescription}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button color={props.color} content={props.contentButton} fluid/>
    </Card.Content>
  </Card>
}

InfoCard.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  contentHeader: PropTypes.string,
  contentDescription: PropTypes.string,
  contentMeta: PropTypes.string,
  contentButton: PropTypes.string,
};


function App() {
  return (
      <div className="App">

        <SideBar/>


        <TopBar/>


        <div className="pusher">
          <div className="main-content">

            <Grid stackable padded>


              <Grid.Column className="four wide computer eight wide tablet sixteen wide mobile column">

                <InfoCard color={"red"} icon={"shopping cart"}
                          contentHeader={"3958"}
                          contentMeta={"orders"}
                          contentDescription={"Elliot requested permission to view your contact details"}
                          contentButton={"More Info"}/>

              </Grid.Column>
              <div className="four wide computer eight wide tablet sixteen wide mobile column">


                <InfoCard color={"green"} icon={"clock"}
                          contentHeader={"57.6%"}
                          contentMeta={"Time"}
                          contentDescription={"Elliot requested permission to view your contact details"}
                          contentButton={"More Info"}/>

              </div>
              <div className="four wide computer eight wide tablet sixteen wide mobile column">
                <InfoCard color={"teal"} icon={"briefcase"}
                          contentHeader={"3112"}
                          contentMeta={"Saves"}
                          contentDescription={"Elliot requested permission to view your contact details"}
                          contentButton={"More Info"}/>

              </div>
              <div className="four wide computer eight wide tablet sixteen wide mobile column">

                <InfoCard color={"purple"} icon={"trophy"}
                          contentHeader={"9805"}
                          contentMeta={"Views"}
                          contentDescription={"Elliot requested permission to view your contact details"}
                          contentButton={"More Info"}/>

              </div>
            </Grid>

            <div className="ui grid stackable padded">
              <div className="column">
                <table className="ui celled striped table">
                  <thead>
                  <tr>
                    <th colSpan="3">
                      Git Repository
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td className="collapsing">
                      <Icon name={"folder"}/> node_modules
                    </td>
                    <td>Initial commit</td>
                    <td className="right aligned collapsing">10 hours ago</td>
                  </tr>
                  <tr>
                    <td><Icon name={"folder"}/> test
                    </td>
                    <td>Initial commit</td>
                    <td className="right aligned">10 hours ago</td>
                  </tr>
                  <tr>
                    <td><Icon name={"folder"}/> build
                    </td>
                    <td>Initial commit</td>
                    <td className="right aligned">10 hours ago</td>
                  </tr>
                  <tr>
                    <td><Icon name={"file outline"}/> package.json</td>
                    <td>Initial commit</td>
                    <td className="right aligned">10 hours ago</td>
                  </tr>
                  <tr>
                    <td><Icon name={"file outline"}/> Gruntfile.js</td>
                    <td>Initial commit</td>
                    <td className="right aligned">10 hours ago</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="ui grid stackable padded">
              <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
                <Statistic color={"teal"} value={"5,550"} label={"label"}/>
              </div>
              <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
                <Statistic color={"purple"} value={"50+"} label={"Developers"}/>

              </div>
              <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
                <Statistic color={"green"} value={"800+"} label={"Commits"}/>
              </div>
              <div className="four wide computer eight wide tablet sixteen wide mobile  center aligned column">
                <Statistic color={"purple"} value={"1000+"} label={"Capus of Coffee"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
