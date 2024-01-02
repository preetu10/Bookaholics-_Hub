import { myAxios } from "./helper";

export const signUp=(user)=>{
    return myAxios.post('/api/user/register',user)
    .then((response)=>response.data)
}
export const signIn=(loginDetail)=>{
    return myAxios.post('/api/user/login',loginDetail)
    .then((response)=>response)
}
export const addSellPost=(data)=>{
    return myAxios.post('/api/user/addsell',data)
    .then((response)=>response.data)
}

export const addBorrowPost=(data)=>{
    return myAxios.post('/api/user/addborrow',data)
    .then((response)=>response.data)
}

export const addExchangePost=(data)=>{
    return myAxios.post('/api/user/addexchange',data)
    .then((response)=>response.data)
}

export const getUser=(userId)=>{
    return myAxios.get(`/api/user/profile/${userId}`)
    .then((response)=>response.data)
}

export const getBuyPosts=()=>{
    return myAxios.get('/api/user/buyposts')
    .then((response)=>response.data)
}

export const getBorrowPosts=()=>{
    return myAxios.get('/api/user/borrowposts')
    .then((response)=>response.data)
}

export const getExchangePosts=()=>{
    return myAxios.get('/api/user/exchangeposts')
    .then((response)=>response.data)
}
