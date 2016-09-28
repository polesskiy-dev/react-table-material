import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, /*TableHeaderColumn,*/ TableRow, TableRowColumn} from 'material-ui/Table';
import * as actions from '../actions/actions'

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
export default class TableContainer extends Component {
    constructor(props) {
        super(props);
        props.getItems();
    }

    render() {
        const items = this.props.items.toJS();
        return (
            <Table
                selectable={false}
            >
                <TableHeader
                    displaySelectAll={false}
                >
                    <TableRow>
                        {/*{items[0]*/}
                            {/*.map((name, index)=>(*/}
                                {/*<TableHeaderColumn key={index}>name</TableHeaderColumn>*/}
                            {/*))}*/}
                    </TableRow>
                </TableHeader>
                <TableBody
                    displayRowCheckbox={false}
                >
                    {items
                        .map((rowData, index)=>(
                            <TableRow key={index}>
                                {rowData.map((value, index)=>(
                                    <TableRowColumn key={index}>{value}</TableRowColumn>
                                ))}
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        )
    }
}