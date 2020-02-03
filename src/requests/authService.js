import { API_URL } from './config';

/*
userRegister({nombre:"eduardo",email:"eduardo@test.cl",password:'12345'}).then(res=>{
    console.log(res);
}).catch(error=>console.log(error));
*/

export const  userRegister = (user) => {
    let url = `${API_URL}/usuario`;
    return axios.post(url, user);
};