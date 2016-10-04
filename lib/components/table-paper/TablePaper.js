import React, {Component} from 'react';
import {connect} from 'react-redux';
import ImmutablePropTypes from 'react-immutable-proptypes'
import * as actions from '../../actions/actions'
import SimpleTable from '../simple-table/SimpleTable'
import './TablePaper.less'

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


        this.state = {
            pageNumber: 1,
            rowsPerPage: 1
        };

        this.handleRowsPerPageSelected = (e) => {
            const rowsPerPage = parseInt(e.target.value);
            this.setState({
                pageNumber: 1,
                rowsPerPage
            })
        };

        this.nextPage = () => {
            this.setState({pageNumber: this.state.pageNumber + 1})
        }

        this.prevPage = () => {
            this.setState({pageNumber: this.state.pageNumber - 1})
        }
    }

    render() {
        const {rowsPerPage, pageNumber} = this.state;
        const {tableName = "", columnNames = [], rows = [[]]} = this.props.items.toJS();


        const FIRST_PAGE_NUM = 1;
        const LAST_PAGE_NUM = Math.ceil(rows.length / rowsPerPage);

        return (<article className="mui-panel">
                <h1>{tableName}</h1>
                <SimpleTable columnNames={columnNames}
                             rows={rows.slice((pageNumber - 1) * rowsPerPage, (pageNumber - 1) * rowsPerPage + rowsPerPage)}/>
                <div className="pagination-control-flex-row">
                    <p>Rows per page:</p>
                    <div className="mui-select">
                        <select onChange={this.handleRowsPerPageSelected} defaultValue={rowsPerPage}>
                            <option>1</option>
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                    </div>
                    <p>{Math.min(pageNumber * rowsPerPage, rows.length)} of {rows.length} items</p>
                    <button onClick={this.prevPage}
                            disabled={pageNumber <= FIRST_PAGE_NUM}
                            className="mui-btn mui-btn--fab mui-btn--small">
                        <i className="fa fa-angle-left"/>
                    </button>
                    <button onClick={this.nextPage}
                            disabled={pageNumber >= LAST_PAGE_NUM}
                            className="mui-btn mui-btn--fab mui-btn--small">
                        <i className="fa fa-angle-right"/>
                    </button>
                </div>
            </article >
        )
    }
}

/** define proptypes */
TablePaper.propTypes = {
    items: ImmutablePropTypes.contains({
        tableName: React.PropTypes.string,
        columnNames: ImmutablePropTypes.list,
        rows: ImmutablePropTypes.list
    })
};