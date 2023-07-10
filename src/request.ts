import axios from "axios";

export async function getUser(){
    // const res=await axios.get(`https://api.github.com/users/${name}/repos`);
    const res=await axios.get('http://127.0.0.1:4523/m1/1884852-0-default/pet/findByStatus');
    // const user.id=res.data.id
    // const user.avatar_url=res.data.avatar_url
    return {
        id:res.data.data.id,
        name:res.data.data.status,
        photoUrls:res.data.data.photoUrls
    }
}
export const getUserDetail = () => {
    return getUser()
}