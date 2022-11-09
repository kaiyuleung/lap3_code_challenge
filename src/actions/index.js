import axios from 'axios';

const loading = username => ({ type: 'LOADING', payload: username });

const loadResult = results => ({ type: 'LOAD_RESULT', payload: results });

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const rawRepoData = await fetchRepo("Crowy92");
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
            })
            dispatch(loadResult(RepoData))
        } catch (err) {
            console.warn(err.message);
            dispatch({ type: 'SET_ERROR', payload: err.message })
        };
    };
};

const fetchRepo = async searchTerm => {
    try{
        const { data } = await axios.get(`https://api.github.com/users/${searchTerm}/repos`);
        return data
    } catch (err) {
        throw new Error(err.message)
    }
}
