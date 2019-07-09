// Actions
export const READ_ALL = 'READ_ALL';
export const ADD_POST = 'ADD_POST';

// ActionCreators
export let readAll = () => {
    return {type: READ_ALL}
}

export let addPost = (payload: any) => {
    return {type: ADD_POST, payload}
}
