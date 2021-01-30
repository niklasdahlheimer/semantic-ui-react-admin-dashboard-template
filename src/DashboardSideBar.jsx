import React from 'react'
import {Button, Card, Grid, Header, Icon, Statistic, Table} from 'semantic-ui-react'

export function DashboardSideBar() {
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
