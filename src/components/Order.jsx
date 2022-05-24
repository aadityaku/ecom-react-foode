import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow,Paper } from "@mui/material";

export default function OrderTable(){
    return (
        
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell>Unit Price</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Burger King</TableCell>
                    <TableCell>70/-</TableCell>
                    <TableCell>2</TableCell>
                    <TableCell>140/-</TableCell>
                    <TableCell>X</TableCell>
                </TableRow>
                
            </TableBody>
        </Table>
        </TableContainer>
        </Paper>
    )
}