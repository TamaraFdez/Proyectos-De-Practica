 export interface State {
    fromLanguaje: string
    toLanguaje: string
    fromText: string
    result:string
    loading: Boolean
}

export type Action = 
|{type: 'INTERCHANGE_LANGUAGES'} 
|{type: 'SET_FROM_LANGUAGE', payload: string}
|{type: 'SET_TO_LANGUAGE', payload: string}
|{type: 'SET_FROM_TEXT', payload: string}
|{type: 'SET_RESULT', payload: string}