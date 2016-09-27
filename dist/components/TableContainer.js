import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import * as actions from '../actions/fetch-items-actions'

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
        this.state = {
            content: []
        }

        fetch('/content')
            .then((res)=>res.json())
            .then((content) => this.setState({content}))
    }

    render() {
        //TODO: migrate to props
        const {content} = this.state;
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        {content[0]
                            .map((name, index)=>(
                                <TableHeaderColumn key={index}>name</TableHeaderColumn>
                            ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {content
                        .slice(1, content.length)
                        .map((rowData, index)=>(
                            <TableRow key={index}>
                                {rowData.map((value, index)=>(
                                    <TableHeaderColumn key={index}>value</TableHeaderColumn>
                                ))}
                            </TableRow>
                        ))}
                    <TableRow>
                        <TableRowColumn>1</TableRowColumn>
                        <TableRowColumn>John Smith</TableRowColumn>
                        <TableRowColumn>Employed</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        )
    }
}