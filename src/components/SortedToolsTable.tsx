import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function SortedToolsTable({ sortedObj }) {

    function getRows() {
        let rows = []
        console.log(sortedObj)
        if (sortedObj.max !== 0) {
            for (let i = 0; i < sortedObj.max; i++) {
                rows.push(
                    <React.Fragment>
                    <TableRow>
                        <TableCell>
                            <span style={{color: "#666b73"}}>{sortedObj[2] !== undefined && sortedObj[2][i] ? sortedObj[2][i].tool_name : null}</span>
                        </TableCell>
                        <TableCell>
                            <span style={{color: "#666b73"}}>{sortedObj[1] !== undefined && sortedObj[1][i] ? sortedObj[1][i].tool_name : null}</span>
                        </TableCell>
                        <TableCell>
                            <span style={{color: "#666b73"}}>{sortedObj[0] !== undefined && sortedObj[0][i] ? sortedObj[0][i].tool_name : null}</span>
                        </TableCell>
                    </TableRow>
                </React.Fragment>
                )
            }
        }
        return rows
    }


    return (
        <Table
        size="small"
        >
            <TableBody>
                <TableRow style={{background: "#e6e6e6"}}>
                    <TableCell>
                        <span style={{color: "#666b73", fontWeight: "bolder"}}>Авторизовано</span>
                    </TableCell>
                    <TableCell>
                        <span style={{color: "#666b73", fontWeight: "bolder"}}>Не авторизовано</span>
                    </TableCell>
                    <TableCell>
                        <span style={{color: "#666b73", fontWeight: "bolder"}}>На авторизации</span>
                    </TableCell>
                </TableRow>
                {getRows()}
            </TableBody>
        </Table>
    )
}