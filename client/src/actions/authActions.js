import setAuthToken from '../utils/setAuthToken';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

//Register User
export const registerUser = (userData,history) => dispatch => {
    axios.post('localhost:4000/user',userData)
    .then(res => history.push('/login'))
    .catch(err => {
        dispatch({
            payload : err.response.data
        })
    })
}

//Login User
export const loginUser = (userData) => dispatch => {
    axios.post('/api/users/login',userData)
    .then(res => {
        const {token} = res.data;
        localStorage.setItem('jwtToken',token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
        dispatch({
            type: GET_ERRORS,
            payload : err.response.data
        });
    });
};

//setCurrentUser
export const setCurrentUser = (decoded) =>{
    return{
        payload : decoded
    }
}