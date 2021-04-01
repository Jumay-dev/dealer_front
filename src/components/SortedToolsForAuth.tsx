import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

export default function SortedToolsTable({ sortedObj }) {
    function showOrNot(sortedObj, ind, subind) {
        if (sortedObj[ind] !== undefined) {
            if (sortedObj[ind][subind]) {
                return (
                    <>
                        <Checkbox
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <span style={{color: "#666b73"}}>{sortedObj[ind][subind].tool_name}</span>
                    </>
                )
            }
        }

        return null
    }
    function getRows() {
        let rows = []
        if (sortedObj.max !== 0) {
            for (let i = 0; i < sortedObj.max; i++) {
                rows.push(
                <React.Fragment>
                    <TableRow>
                        <TableCell style={{minWidth: "15vw"}}>
                            {showOrNot(sortedObj, 2, i)}

                        </TableCell>
                        <TableCell style={{minWidth: "15vw"}}>
                            {showOrNot(sortedObj, 1, i)}
                        </TableCell>
                        <TableCell style={{minWidth: "15vw"}}>
                            {showOrNot(sortedObj, 0, i)}
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
                {sortedObj ? getRows() : "Ошибка загрузки оборудования. Обратитесь к администратору."}
            </TableBody>
        </Table>
    )
}