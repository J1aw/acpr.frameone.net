import { CharacterList } from './CharacterList.ts';

export const QueryConfig = {
    p1Name: {
        type: 'text',
        label: 'Player',
        field: 'p1Name',
    },
    p1SteamID: {
        type: 'text',
        label: 'Player Steam ID',
        field: 'p1SteamID',
    },
    p2Name: {
        type: 'text',
        label: 'Player',
        field: 'p2Name',
    },
    p2SteamID: {
        type: 'text',
        label: 'Player Steam ID',
        field: 'p2SteamID',
    },
    p1Character: {
        type: 'select',
        options: CharacterList,
        label: 'Character',
        field: 'p1Character',
    },
    p2Character: {
        type: 'select',
        options: CharacterList,
        label: 'Character',
        field: 'p2Character',
    },
}

export const QueryTypes = {
    PLAYER: {
        label: 'Player',
        config: [
            QueryConfig.p1Name,
        ]
    },
    PLAYER_CHARACTER: {
        label: 'PlayerCharacter',
        config: [
            QueryConfig.p1Name,
            QueryConfig.p1Character,
        ]
    },
    PLAYER_SID_CHARACTER: {
        label: 'PlayerSIDCharacter',
        config: [
            QueryConfig.p1SteamID,
            QueryConfig.p1Character,
        ]
    },
    PLAYER_CHARACTER_VS_CHARACTER: {
        label: 'PlayerCharacterVsCharacter',
        config: [
            QueryConfig.p1Name,
            QueryConfig.p1Character,
            QueryConfig.p2Character
        ]
    },
    PLAYER_SID_CHARACTER_VS_CHARACTER: {
        label: 'PlayerSIDCharacterVsCharacter',
        config: [
            QueryConfig.p1SteamID,
            QueryConfig.p1Character,
            QueryConfig.p2Character
        ]
    },
    PLAYER_VS_CHARACTER: {
        label: 'PlayerVsCharacter',
        config: [
            QueryConfig.p1Name,
            QueryConfig.p2Character
        ]
    },
    PLAYER_SID_VS_CHARACTER: {
        label: 'PlayerSIDVsCharacter',
        config: [
            QueryConfig.p1SteamID,
            QueryConfig.p2Character
        ]
    },
    PLAYER_VS_PLAYER: {
        label: 'PlayerVsPlayer',
        config: [
            QueryConfig.p1Name,
            QueryConfig.p2Name,
        ]
    },
    PLAYER_CHARACTER_VS_PLAYER_CHARACTER: {
        label: 'PlayerCharacterVsPlayerCharacter',
        config: [
            QueryConfig.p1Name,
            QueryConfig.p1Character,
            QueryConfig.p2Name,
            QueryConfig.p2Character,
        ]
    },
    PLAYER_SID_CHARACTER_VS_PLAYER_SID_CHARACTER: {
        label: 'PlayerSIDCharacterVsPlayerSIDCharacter',
        config: [
            QueryConfig.p1SteamID,
            QueryConfig.p1Character,
            QueryConfig.p2SteamID,
            QueryConfig.p2Character,
        ]
    },
}