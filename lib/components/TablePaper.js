import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions'
import SimpleTable from './SimpleTable'

const mapStateToProps = (state) => {
    return {
        items: state.get('items')
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getItems: () => dispatch(actions.getItemsStart()),
        postItems: (items) => dispatch(actions.postItemsStart(items)),
    };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class TablePaper extends Component {
    constructor(props) {
        super(props);
        props.getItems();
    }

    render() {
        const {columnNames = [], rows = [[]]} = this.props.items.toJS();
        const content = {
            columnNames: columnNames,
            rows: rows
        };

        return (
            <div className="mui-panel">
                <SimpleTable {...content}/>
            </div>
        )
    }
}