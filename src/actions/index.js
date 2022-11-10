import axios from 'axios';

const loading = () => ({ type: 'LOADING'});

const loadResult = ({userInfo, results}) => ({ type: 'LOAD_RESULT', payload: {userInfo, results} });

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading());
        try {
            const rawRepoData = await fetchRepo(searchTerm);
            const RepoData = rawRepoData.map(r => {
                return{
                    id: r.id,
                    name: r.name, 
                    forks: r.forks,
                    stargazers_count: r.stargazers_count,
                    watchers_count: r.watchers_count,
                    updated_at: r.updated_at,
                    created_at: r.created_at,
                    html_url: r.html_url
                }
            });
            dispatch(loadResult({
                userInfo: {
                    username: rawRepoData[0].owner.login,
                    userIconURL: rawRepoData[0].owner.avatar_url
                }, 
                results: RepoData
            }));
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
            // throw new Error(err.message);
        };
    };
};

const fetchRepo = async searchTerm => {
    try{
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}/repos`);
        return data
    } catch (err) {
        // throw new Error(err.response.status === 404 ? "no such user" : err.message)
        throw new Error(err.message)
    }
}
