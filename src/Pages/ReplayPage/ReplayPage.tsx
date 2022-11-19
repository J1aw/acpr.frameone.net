import { Button, Checkbox, CircularProgress, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, {useState} from 'react';
import axios from 'axios';
import { QueryTypes } from './Util/QueryConfig.ts';
import { QueryDetailsInput } from './QueryDetailsInput/QueryDetailsInput.tsx';
import { ItemsList } from './ItemsList/ItemsList.tsx';

export const ReplayPage = (props) => {
    // Pre-request state
    const [queryType, setQueryType] = useState('PLAYER');
    const [isTwitchReplay, setIsTwitchReplay] = useState(true);
    const [date, setDate] = useState<string>();
    const [queryParams, setQueryParams] = useState({});

    // Request-related state
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState();

    const onClear = () => {
        setData(undefined);
    }

    const onSubmit = async () => {
        if (Object.keys(queryParams).length === 0) {
            return;
        }

        const url = 'https://api.frameone.net/query-acpr';
        const routeKey = QueryTypes[queryType].label;
        const params: any = {...queryParams, routeKey};
        params.Table = isTwitchReplay ? 'spectator-replays' : 'replays';
        if (date && date.length > 0) {
            params.Date = date;
        }

        setIsLoading(true);

        const result = await axios(
            url, {
                params
            }
        );

        setIsLoading(false);

        result.data.bucket = isTwitchReplay ? 'ggxxacpr-replays-twitch' : 'ggxxacpr-replays';
        setData(result.data);
    }

    const renderData = () => {
        if (data) {
            return (
                <ItemsList data={data} />
            )
        }
    }

    return (
        <div>
            <div>
                <Select
                    label="Query Type"
                    onChange={(event: SelectChangeEvent) => {
                        setQueryParams({});
                        setQueryType(event.target.value as string);
                    }}
                    value={queryType}
                    >
                    {Object.keys(QueryTypes).map(queryType => (
                        <MenuItem key={queryType} value={queryType}>
                            {QueryTypes[queryType].label}
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
            <div>
                <TextField
                    key="date"
                    type="date"
                    sx={{ width: 220 }}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setDate(event.target.value);
                    }}
                />
            </div>
            <div>
                <QueryDetailsInput config={QueryTypes[queryType].config} queryType={queryType} queryParams={{...queryParams}} setQueryParams={setQueryParams} />
            </div>
            <div>
                <Button onClick={onSubmit}>
                    Search
                </Button>
                <Button onClick={onClear}>
                    Clear
                </Button>
            </div>
            <div style={{height: '28px', marginBottom: '20px'}}>
                {isLoading && <CircularProgress />}
            </div>
            <div>
                {renderData()}
            </div>
        </div>
    )
}