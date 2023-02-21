import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'

const createData = (
    horario_inicial,
    horario_final,
    solicitacao,
    solicitante,
    local,
    frota,
    motorista
) => {
    return {
        horario_inicial,
        horario_final,
        solicitacao,
        solicitante,
        local,
        frota,
        motorista,
    }
}

const rows = [
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
    createData(
        '8:00',
        '11:00',
        '23/2023',
        'Hemocentro',
        'Hemocentro/Piracicaba',
        '526',
        'Abreu'
    ),
]

const headCells = [
    {
        id: 'horario',
        label: 'Horário',
    },
    {
        id: 'solicitacao',
        label: 'Solicitação',
    },
    {
        id: 'solicitante',
        label: 'Solicitante',
    },
    {
        id: 'local',
        label: 'Local',
    },

    {
        id: 'frota',
        label: 'Frota',
    },
    {
        id: 'motorista',
        label: 'Motorista',
    },
]

function EnhancedTableHead(props) {
    const { order, orderBy, numSelected, rowCount } = props

    return (
        <TableHead>
            <TableRow>
                <TableCell
                    padding={'normal'}
                    align="left"
                    style={{ fontStyle: 'bold' }}
                >
                    Imprimir
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={'left'}
                        padding={'normal'}
                    >
                        {headCell.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

const EnhancedTable = () => {
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const rowsPerPage = 5

    const handleClick = (event, imprimir) => {
        const selectedIndex = selected.indexOf(imprimir)
        let newSelected = []

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, imprimir)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            )
        }

        setSelected(newSelected)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const isSelected = (imprimir) => selected.indexOf(imprimir) !== -1

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'small'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {rows
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => {
                                    const isItemSelected = isSelected(
                                        row.imprimir
                                    )
                                    const labelId = `enhanced-table-checkbox-${index}`

                                    return (
                                        <TableRow
                                            onClick={(event) =>
                                                handleClick(event, row.imprimir)
                                            }
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.imprimir}
                                            selected={isItemSelected}
                                        >
                                            <TableCell
                                                padding="checkbox"
                                                align="center"
                                            >
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby':
                                                            labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                    }}
                                                >
                                                    {row.horario_inicial}
                                                    <br />
                                                    {row.horario_final}
                                                </div>
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.solicitacao}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.solicitante}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.local}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.frota}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.motorista}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 33 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                />
            </Paper>
        </Box>
    )
}

export default EnhancedTable
