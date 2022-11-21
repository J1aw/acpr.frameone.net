import '../../../App.css';
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React, {useEffect} from 'react';

export const QueryDetailsInput = (props) => {
    const { config, queryType, queryParams, setQueryParams } = props;

    useEffect(() => {
        const newQueryParams = {...queryParams};

        config.forEach(e => {
            if (e.type === 'select' && newQueryParams) {
                newQueryParams[e.field] = 'ER';
            }
        });

        setQueryParams(newQueryParams);
    }, [])

    const renderInputs = () => {
        return config.map(e => {
            if (e.type === 'text') {
                const textOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                    const newQueryParams = {...queryParams};
                    newQueryParams[e.field] = event.target.value
                    setQueryParams(newQueryParams);
                };

                return (
                    <>
                        <div className='section-label'>
                            {e.field}:
                        </div>
                        <div key={e.field} className='container'>
                            <TextField
                                key={queryType + e.field}
                                value={queryParams[e.field] || ''}
                                onChange={textOnChange}
                                className='input-field'
                            />
                        </div>
                    </>
                );
            }

            if (e.type === 'select') {
                const getIndexForMatchupQuery = (options, option) => {
                    return options.findIndex(op => op.value === option.value);
                }

                const selectOptions = e.options.map(option => (
                    <MenuItem key={option.value} value={queryType === 'Matchup' ?  getIndexForMatchupQuery(e.options, option) : option.value}>{option.label}</MenuItem>
                ));
    
                const selectOnChange = (event: SelectChangeEvent) => {
                    const newQueryParams = {...queryParams};
                    newQueryParams[e.field] = event.target.value
                    setQueryParams(newQueryParams);
                };

                return (
                    <>
                        <div className='section-label'>
                            {e.field}:
                        </div>
                        <div key={e.field} className='container'>
                            <Select
                                key={e.field}
                                label={e.label}
                                value={queryParams[e.field] || e.options[0].value}
                                onChange={selectOnChange}
                                className='input-field'
                            >
                                {selectOptions}
                            </Select>
                        </div>
                    </>
                );
            }

            return null;
        });
    }
    return (
        <div>
            {renderInputs()}
        </div>
    )
}