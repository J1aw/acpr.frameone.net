import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, {useEffect} from 'react';

export const ItemsList = (props) => {
    const {data} = props;
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Player 1
                        </TableCell>
                        <TableCell>
                            Character
                        </TableCell>
                        <TableCell>
                            Player 2
                        </TableCell>
                        <TableCell>
                            Character
                        </TableCell>
                        <TableCell>
                            VOD URL
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.Items.map(e => {
                        return (
                            <TableRow>
                                <TableCell>
                                    {e.p1Name}
                                </TableCell>
                                <TableCell>
                                    {e.p1Character}
                                </TableCell>
                                <TableCell>
                                    {e.p2Name}
                                </TableCell>
                                <TableCell>
                                    {e.p2Character}
                                </TableCell>
                                <TableCell>
                                    VOD Link
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
}