import React from 'react';
//import styles from './SimpleTable.less'

const SimpleTable = (props) => <table className="mui-table">
    <thead>
    <tr>
        {props.columnNames.map(
            (name, index)=>
                <th key={index}>{name}</th>
        )}
    </tr>
    </thead>
    <tbody>
    {props.rows.map(
        (row, index)=>
            <tr key={index}>{row.map(
                (item, index)=>
                    <td key={index}>{item}</td>)}
            </tr>)
    }
    </tbody>
</table>;

export default SimpleTable

