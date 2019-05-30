import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList';

const Dashboard = ({ groups }) => {
    return (
        <div>
            <h2>Dashboard</h2>
            { groups.map(group => (
                <div>
                    <ConnectedTaskList key={group.id} id={group.id} name={group.name} />
                </div>
            ))}
        </div>
    );
};

function mapStateToProps(state) {
    console.log(state);
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);

