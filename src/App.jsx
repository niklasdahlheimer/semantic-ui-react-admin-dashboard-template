import './App.css';
import 'semantic-ui-css/semantic.min.css'
import React, {useEffect, useState} from 'react'
import {Grid, Sidebar, Statistic} from 'semantic-ui-react'
import {DashboardSideBar} from "./DashboardSideBar";
import {DashboardCard} from "./DashboardCard";
import {DashboardTable} from "./DashboardTable";
import {DashboardTopBar} from "./DashboardTopBar";
import useWindowDimensions from "./useWindowsDimensions";


function DashboardContentSection() {
  return <>
    <Grid stackable padded>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"red"} icon={"shopping cart"}
                       contentHeader={"3958"}
                       contentMeta={"orders"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"green"} icon={"clock"}
                       contentHeader={"57.6%"}
                       contentMeta={"Time"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"teal"} icon={"briefcase"}
                       contentHeader={"3112"}
                       contentMeta={"Saves"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"purple"} icon={"trophy"}
                       contentHeader={"9805"}
                       contentMeta={"Views"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
    </Grid>

    <Grid stackable padded>

      <Grid.Column>

        <DashboardTable/>

      </Grid.Column>
    </Grid>

    <Grid stackable padded>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"teal"} value={"5,550"} label={"Downloads"}/>
      </Grid.Column>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"purple"} value={"50+"} label={"Developers"}/>
      </Grid.Column>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"green"} value={"800+"} label={"Commits"}/>
      </Grid.Column>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"purple"} value={"1000+"} label={"Cups of Coffee"}/>
      </Grid.Column>

    </Grid>

    <Grid stackable padded>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"red"} icon={"shopping cart"}
                       contentHeader={"3958"}
                       contentMeta={"orders"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"green"} icon={"clock"}
                       contentHeader={"57.6%"}
                       contentMeta={"Time"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"teal"} icon={"briefcase"}
                       contentHeader={"3112"}
                       contentMeta={"Saves"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"purple"} icon={"trophy"}
                       contentHeader={"9805"}
                       contentMeta={"Views"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
    </Grid>

    <Grid stackable padded>

      <Grid.Column>

        <DashboardTable/>

      </Grid.Column>
    </Grid>

    <Grid stackable padded>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"teal"} value={"5,550"} label={"Downloads"}/>
      </Grid.Column>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"purple"} value={"50+"} label={"Developers"}/>
      </Grid.Column>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"green"} value={"800+"} label={"Commits"}/>
      </Grid.Column>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"purple"} value={"1000+"} label={"Cups of Coffee"}/>
      </Grid.Column>

    </Grid>

    <Grid stackable padded>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"red"} icon={"shopping cart"}
                       contentHeader={"3958"}
                       contentMeta={"orders"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"green"} icon={"clock"}
                       contentHeader={"57.6%"}
                       contentMeta={"Time"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"teal"} icon={"briefcase"}
                       contentHeader={"3112"}
                       contentMeta={"Saves"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <DashboardCard color={"purple"} icon={"trophy"}
                       contentHeader={"9805"}
                       contentMeta={"Views"}
                       contentDescription={"Elliot requested permission to view your contact details"}
                       contentButton={"More Info"}/>
      </Grid.Column>
    </Grid>

    <Grid stackable padded>

      <Grid.Column>

        <DashboardTable/>

      </Grid.Column>
    </Grid>

    <Grid stackable padded>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"teal"} value={"5,550"} label={"Downloads"}/>
      </Grid.Column>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"purple"} value={"50+"} label={"Developers"}/>
      </Grid.Column>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"green"} value={"800+"} label={"Commits"}/>
      </Grid.Column>

      <Grid.Column computer={4} tablet={8} mobile={16} textAlign={"center"}>
        <Statistic color={"purple"} value={"1000+"} label={"Cups of Coffee"}/>
      </Grid.Column>

    </Grid>
  </>;
}

function App() {

  const [sideBarVisible, setSideBarVisible] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if(width > 768) setSideBarVisible(false)
  }, [width]);


  return (
      <div className="App">
        <DashboardTopBar onMenuTogglerClicked={() => setSideBarVisible(!sideBarVisible)}/>

        <Sidebar.Pushable>
          <DashboardSideBar visible={sideBarVisible}/>
          <Sidebar.Pusher className={"main-content"} dimmed={sideBarVisible}>
            <DashboardContentSection/>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
  );
}

export default App;
