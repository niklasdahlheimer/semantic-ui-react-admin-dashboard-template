import {Icon, Table} from 'semantic-ui-react'
import React from 'react'

export function DashboardTable() {
    return <Table celled striped>

        <Table.Header>
            <Table.Row>
                <Table.HeaderCell colSpan={"3"}> Git Repository</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>

            <Table.Row>
                <Table.Cell collapsing> <Icon name={"folder"}/> node_modules </Table.Cell>
                <Table.Cell content={"Initial commit"}/>
                <Table.Cell collapsing textAlign={"right"} content={"10 hours ago"}/>
            </Table.Row>

            <Table.Row>
                <Table.Cell collapsing> <Icon name={"folder"}/> test </Table.Cell>
                <Table.Cell content={"Initial commit"}/>
                <Table.Cell collapsing textAlign={"right"} content={"10 hours ago"}/>
            </Table.Row>

            <Table.Row>
                <Table.Cell collapsing> <Icon name={"folder"}/> build </Table.Cell>
                <Table.Cell content={"Initial commit"}/>
                <Table.Cell collapsing textAlign={"right"} content={"10 hours ago"}/>
            </Table.Row>

            <Table.Row>
                <Table.Cell collapsing> <Icon name={"file outline"}/> package.json </Table.Cell>
                <Table.Cell content={"Initial commit"}/>
                <Table.Cell collapsing textAlign={"right"} content={"10 hours ago"}/>
            </Table.Row>

            <Table.Row>
                <Table.Cell collapsing> <Icon name={"file outline"}/> Gruntfile.js </Table.Cell>
                <Table.Cell content={"Initial commit"}/>
                <Table.Cell collapsing textAlign={"right"} content={"10 hours ago"}/>
            </Table.Row>

        </Table.Body>

    </Table>;
}
