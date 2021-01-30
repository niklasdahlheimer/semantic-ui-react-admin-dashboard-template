import React from 'react'
import {Button, Card, Grid, Header, Icon, Statistic, Table} from 'semantic-ui-react'

export function DashboardTopBar() {
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
