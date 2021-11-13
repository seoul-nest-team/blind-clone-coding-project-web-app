import produce from 'immer';

export function createReducer(initialState: any, handlerMap: any) {
    return function (state = initialState, action: any) {
        return produce(state, (draft: any) => {
            const handler = handlerMap[action.type];

            if (handler) {
                handler(draft, action);
            }
        });
    };
}

export function createSetValueAction(type: any) {
    return (key: any, value: any) => ({ type, key, value });
}

export function setValueReducer(state: any, action: any) {
    state[action.key] = action.value;
}
