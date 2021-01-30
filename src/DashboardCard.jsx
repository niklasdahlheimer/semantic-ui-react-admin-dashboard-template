import {Button, Card, Grid, Header, Icon, Statistic, Table} from 'semantic-ui-react'
import PropTypes from 'prop-types';
import React from 'react'


export function DashboardCard(props) {
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

DashboardCard.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    contentHeader: PropTypes.string,
    contentDescription: PropTypes.string,
    contentMeta: PropTypes.string,
    contentButton: PropTypes.string,
};
