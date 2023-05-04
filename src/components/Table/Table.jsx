import React, { useCallback, useState } from 'react';
import data from '../../data/data.json';
import styles from './Table.module.css';
import InfiniteScroll from "react-infinite-scroll-component";
import TableRow from '../TableRow/TableRow';
import columns from '../../data/columns';

const Table = () => {    
    const [currData, setCurrData] = useState(data.slice(0, 50));

    const fetchData = useCallback(() => {
        setCurrData(prevData => {
            const l = prevData.length;
            return [...prevData].concat(data.slice(l, l + 50))
        });
    }, []);

    return (
        <InfiniteScroll
            dataLength={currData.length}
            next={fetchData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            <table>
                <thead>
                    <tr>
                        {columns.map(column => {
                                return <th key={column}>{column}</th>;
                        })}
                    </tr>
                </thead>
                <tbody>
                    {currData.map(row => {
                        return <TableRow key={row._id.$oid} row={row}/>
                    })}
                </tbody>
            </table>  
        </InfiniteScroll>  
    );
};

export default Table;