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
    }

    render() {
        const {tableName = "", columnNames = [], rows = [[]]} = this.props.items.toJS();
        const content = {
            columnNames: columnNames,
            rows: rows
        };

        return (<article className="mui-panel">
                <h1>{tableName}</h1>
                <SimpleTable {...content}/>
                <div className="pagination-control-flex-row">
                    <p>Rows per page:</p>
                    <div className="mui-select">
                        <select>
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                    </div>
                    <button className="mui-btn mui-btn--fab mui-btn--small">
                        <i className="fa fa-angle-left"/>
                    </button>
                    <button className="mui-btn mui-btn--fab mui-btn--small">
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