import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({ tasks, name }) => {
    return (
        <div>
            <h3>
                {name}
            </h3>
            <div>
                {tasks.map(task => (<div key={task.id}>{task.name}</div>))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    console.log('state');
    console.log(state);
    console.log('ownProps');
    console.log(ownProps);
    let groupID = ownProps.id;
    return {
        name: ownProps.name,
        id: groupID,
        tasks: state.tasks.filter(task => task.group === groupID)
    };
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);