import { Checkbox, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, {useState} from 'react';

export const ReplayPage = (props) => {
    const QueryTypes = {
        PLAYER: 'Player',
        PLAYER_CHARACTER: 'PlayerCharacter',
        PLAYER_SID_CHARACTER: 'PlayerSIDCharacter',
        PLAYER_CHARACTER_VS_CHARACTER: 'PlayerCharacterVsCharacter',
        PLAYER_SID_CHARACTER_VS_CHARACTER: 'PlayerSIDCharacterVsCharacter',
        PLAYER_VS_CHARACTER: 'PlayerVsCharacter',
        PLAYER_SID_VS_CHARACTER: 'PlayerSIDVsCharacter',
        PLAYER_VS_PLAYER: 'PlayerVsPlayer',
        PLAYER_CHARACTER_VS_PLAYER_CHARACTER: 'PlayerCharacterVsPlayerCharacter',
        PLAYER_SID_CHARACTER_VS_PLAYER_SID_CHARACTER: 'PlayerSIDCharacterVsPlayerSIDCharacter',
    }

    const [queryType, setQueryType] = useState(QueryTypes.PLAYER);
    const [isTwitchReplay, setIsTwitchReplay] = useState(false);

    return (
        <div>
            <div>
                Replay Page: {queryType} {isTwitchReplay ? "Twitch Replay" : "Not Twitch Replay" }
            </div>
            <div>
                <Select
                    label="Query Type"
                    onChange={(event: SelectChangeEvent) => {
                        setQueryType(event.target.value as string);
                    }}
                    value={queryType}
                    >
                    {Object.values(QueryTypes).map(queryType => (
                        <MenuItem value={queryType}>
                            {queryType}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            <div>
                <Checkbox 
                    checked={isTwitchReplay} 
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setIsTwitchReplay(event.target.checked);
                    }} 
                /> Is Twitch Replay
            </div>
        </div>
    )
}