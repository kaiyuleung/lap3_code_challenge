const initState = {
    username: "Crowy92",
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
    error: ""
};

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOADING':
            return { ...state, username: action.payload, loading: true };
        case 'LOAD_RESULT':
            console.log(state.username, state.results.length);
            return { ...state, results: action.payload, loading: false, error: false };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false }
        default:
            return state;
    };
};

export default searchReducer;
