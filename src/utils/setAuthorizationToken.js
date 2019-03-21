import axios from 'axios';
const setAuthorization = (token) => {
   // localStorage.getItem('jetToken')
    if(token){
        axios.defaults.headers.common['authorization'] = `beaer ${token}`
    }else {
        delete axios.defaults.headers.common['authorization']
    }
}
export default setAuthorization;