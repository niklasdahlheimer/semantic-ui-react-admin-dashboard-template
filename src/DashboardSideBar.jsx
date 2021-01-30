import React from 'react'
import {Button, Card, Grid, Header, Icon, Statistic, Table,Sidebar, Menu,Form} from 'semantic-ui-react'

export function DashboardSideBar() {
    return <Menu as={Sidebar} inverted vertical  id="sidebar">
        <Menu.Item>
            <Menu.Header content={"General"}/>
            <Menu.Menu>
                <Menu.Item link icon={"tachometer alternate"} content={"Dashboard"}/>
            </Menu.Menu>
        </Menu.Item>


        <Menu.Item>
            <Menu.Header content={"Administration"}/>
            <Menu.Menu>
                <Menu.Item link icon={"cogs"} content={"Settings"} />
                <Menu.Item link icon={"users"} content={"Team"}  />
            </Menu.Menu>
        </Menu.Item>

        <Menu.Item link icon={"chart line"} content={"Charts"} />

        <Menu.Item link icon={"lightbulb"} content={"Apps"} />

        <Menu.Item>
            <Menu.Header content={"Other"}/>
            <Menu.Menu>
                <Menu.Item link icon={"envelope"} content={"Messages"} />
                <Menu.Item link icon={"calendar alternate"} content={"Calendar"} />
            </Menu.Menu>
        </Menu.Item>

        <Menu.Item link icon={"envelope"} content={"Messages"}>
            <Form size={"mini"}>
                <Form.Input type={"text"} placeholder={"Search..."} icon={"search"}/>
            </Form>

        </Menu.Item>

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
    </Menu>;
}
