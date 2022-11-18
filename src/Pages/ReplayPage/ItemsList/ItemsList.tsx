import { Avatar, Link, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import React, {useEffect} from 'react';
import { CharacterList } from '../Util/CharacterList.ts';

export const ItemsList = (props) => {
    const {data} = props;
    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow key="headerRow">
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
                            VOD
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.Items.map(e => {
                        const vodUrl = `https://${data.bucket}.s3.amazonaws.com/${e.gameID}.ggr`;
                        const char = CharacterList[e.p2Character];
                        return (
                            <TableRow key={e.gameID}>
                                <TableCell>
                                    {e.p1Name}
                                </TableCell>
                                <TableCell>
                                    {CharacterList[e.p1Character].label}
                                </TableCell>
                                <TableCell>
                                    {e.p2Name}
                                </TableCell>
                                <TableCell>
                                    <Avatar src={char.imgUrl} sx={{ width: 60, height: 60 }} />
                                    {char.label}
                                </TableCell>
                                <TableCell>
                                    <Link href={vodUrl}>
                                        <DownloadIcon  sx={{ width: 40, height: 40, paddingRight: '30px', paddingLeft: '30px', color: '#222' }} />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    )
}