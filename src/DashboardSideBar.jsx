import React from 'react'
import {Form, Input, Menu, Progress, Segment, Sidebar} from 'semantic-ui-react'

export function DashboardSideBar(props) {
    return <Sidebar as={Menu} inverted vertical id={"sidebar"} animation={"overlay"} visible={props.visible}>
        <Menu.Item>
            <Menu.Header content={"General"}/>
            <Menu.Menu>
                <Menu.Item link icon={"tachometer alternate"} content={"Dashboard"}/>
            </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
            <Menu.Header content={"Administration"}/>
            <Menu.Menu>
                <Menu.Item link icon={"cogs"} content={"Settings"}/>
                <Menu.Item link icon={"users"} content={"Team"}/>
            </Menu.Menu>
        </Menu.Item>

        <Menu.Item link icon={"chart line"} content={"Charts"}/>

        <Menu.Item link icon={"lightbulb"} content={"Apps"}/>

        <Menu.Item>
            <Menu.Header content={"Other"}/>
            <Menu.Menu>
                <Menu.Item link icon={"envelope"} content={"Messages"}/>
                <Menu.Item link icon={"calendar alternate"} content={"Calendar"}/>
            </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
            <Form size={'mini'}>
                <Form.Field>
                    <Input type={"text"} placeholder={"Search..."} action={{icon: "search", size: "mini"}}/>
                </Form.Field>
            </Form>
        </Menu.Item>

        <Segment inverted>
            <Progress inverted color={"olive"} size={"tiny"} percent={54} label={"Monthly Bandwidth"}/>
            <Progress inverted color={"teal"} size={"tiny"} percent={78} label={"Disk Usage"}/>
        </Segment>

    </Sidebar>

}
