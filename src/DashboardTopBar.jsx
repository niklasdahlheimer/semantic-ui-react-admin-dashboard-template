import React from 'react'
import {Dropdown, Icon, Label, Menu} from 'semantic-ui-react'

export function DashboardTopBar(props) {
    return <Menu fixed='top' inverted>
        <Menu.Menu position={"left"}>
            <Menu.Item as={"a"} href={"#"} className={"sidebar-menu-toggler"} onClick={props.onMenuTogglerClicked} data-target="#sidebar" link>
                <Icon name={"sidebar"}/>
            </Menu.Item>
            <Menu.Item header content={"Semantic UI"}/>
        </Menu.Menu>

        <Menu.Menu position={"right"}>
            <Menu.Item link>
                <Icon name={"bell"} size="large"/>
                <Label color='red' floating>
                    22
                </Label>

            </Menu.Item>

            <Dropdown item icon={<Icon name={"user circle"} size="large"/>}>
                <Dropdown.Menu direction={"left"}>
                    <Dropdown.Item icon={"info circle"} content={"Profile"}/>
                    <Dropdown.Item icon={"wrench"} content={"Settings"}/>
                    <Dropdown.Item icon={"sign-out"} content={"Logout"}/>
                </Dropdown.Menu>
            </Dropdown>

        </Menu.Menu>


    </Menu>;
}
