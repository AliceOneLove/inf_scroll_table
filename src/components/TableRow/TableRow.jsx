import React from 'react';
import Comment from '../Comment/Comment';
import columns from '../../data/columns';

const TableRow = ({row}) => {
    console.log(columns);
    return(
        <tr>
            {columns.map(value => {
                if (typeof(row[value]) === 'object') {
                    const cellValue = Object.values(row[value])[0];
                    return <td key={cellValue}>{cellValue}</td>
                }
                else if (value === 'comment') {
                    return(
                        <Comment id={row._id.$oid}/>
                    );
                }
                else {
                    return row[value] !== undefined ? 
                        <td>{row[value].toString()}</td> :
                        <td></td>
                }
            })}
        </tr>
    );
};

export default TableRow;