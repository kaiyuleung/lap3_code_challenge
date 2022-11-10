const initState = {
    username: "example",
    userIconURL: "",
    results: [{
        id: "",
        name: "",
        forks: 0,
        stargazers_count: 0,
        watchers_count: 0,
        updated_at: "",
        created_at: "",
        html_url: ""
    }],
    loading: false,
    error: false
};

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, loading: true };
        case 'LOAD_RESULT':
            return { ...state, 
                username: action.payload.userInfo.username, 
                userIconURL: action.payload.userInfo.userIconURL,
                results: action.payload.results, 
                loading: false, 
                error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    };
};

export default searchReducer;
