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

export const getABook=(sid)=>{
    return myAxios.get(`/api/user/book-info/${sid}`)
    .then((response)=>response.data)
}

export const orderPlace=(orderDetail)=>{
    return myAxios.post('/api/user/orderplace',orderDetail)
    .then((response)=>response)
}

export const getBorrowBook=(borrId)=>{
    return myAxios.get(`/api/user/borrow-book-info/${borrId}`)
    .then((response)=>response.data)
}

export const borrowPlace=(borrowDetail)=>{
    return myAxios.post('/api/user/borrowplace',borrowDetail)
    .then((response)=>response)
}

export const getExchangeBook=(ebId)=>{
    return myAxios.get(`/api/user/exchange-book-info/${ebId}`)
    .then((response)=>response.data)
}

export const exchangePlace=(exchangeDetail)=>{
    return myAxios.post('/api/user/exchangeplace',exchangeDetail)
    .then((response)=>response)
}

export const getExchangeRequests=(eEmail)=>{
    return myAxios.get(`/api/user/exchange-requests/${eEmail}`)
    .then((response)=>response.data)
}

export const deleteExchangeProcess=(epId)=>{
    return myAxios.delete(`/api/user/delete-exchange-process/${epId}`)
    .then((response)=>response)
}

export const confirmRequest=(epId)=>{
    return myAxios.put(`/api/user/confirm-request/${epId}`)
    .then((response)=>response)
}

export const getBorrowRequests=(eEmail)=>{
    return myAxios.get(`/api/user/borrow-requests/${eEmail}`)
    .then((response)=>response.data)
}

export const deleteBorrowProcess=(bpId)=>{
    return myAxios.delete(`/api/user/delete-borrow-process/${bpId}`)
    .then((response)=>response)
}

export const confirmBorrowRequest=(bpId)=>{
    return myAxios.put(`/api/user/confirm-borrow-request/${bpId}`)
    .then((response)=>response)
}

export const getOrderRequests=(eEmail)=>{
    return myAxios.get(`/api/user/order-requests/${eEmail}`)
    .then((response)=>response.data)
}

export const deleteOrderProcess=(orderId)=>{
    return myAxios.delete(`/api/user/delete-order-process/${orderId}`)
    .then((response)=>response)
}

export const confirmOrderRequest=(orderId)=>{
    return myAxios.put(`/api/user/confirm-order-request/${orderId}`)
    .then((response)=>response)
}

export const getMySellPosts=(eEmail)=>{
    return myAxios.get(`/api/user/get-my-sell-posts/${eEmail}`)
    .then((response)=>response.data);
}

export const editSellPost=(sid)=>{
    return myAxios.put(`/api/user/edit-sell/${sid}`)
    .then((response)=>response.data);
}

export const getMyBorrowPosts=(eEmail)=>{
    return myAxios.get(`/api/user/get-my-borrow-posts/${eEmail}`)
    .then((response)=>response.data);
}

export const editBorrowPost=(borrId)=>{
    return myAxios.put(`/api/user/edit-borrow/${borrId}`)
    .then((response)=>response.data);
}

export const getMyExchangePosts=(eEmail)=>{
    return myAxios.get(`/api/user/get-my-exchange-posts/${eEmail}`)
    .then((response)=>response.data);
}

export const editExchangePost=(ebId)=>{
    return myAxios.put(`/api/user/edit-exchange/${ebId}`)
    .then((response)=>response.data);
}
export const getMyPurchase=(eEmail)=>{
    return myAxios.get(`/api/user/my-purchase/${eEmail}`)
    .then((response)=>response.data);
}

export const getMyBorrow=(eEmail)=>{
    return myAxios.get(`/api/user/my-borrow/${eEmail}`)
    .then((response)=>response.data);
}

export const getMyExchange=(eEmail)=>{
    return myAxios.get(`/api/user/my-exchange/${eEmail}`)
    .then((response)=>response.data);
}

export const getMySellRecords=(eEmail)=>{
    return myAxios.get(`/api/user/my-sell-records/${eEmail}`)
    .then((response)=>response.data);
}

export const getMyLendRecords=(eEmail)=>{
    return myAxios.get(`/api/user/my-lend-records/${eEmail}`)
    .then((response)=>response.data);
}

export const getMyExchangeRecords=(eEmail)=>{
    return myAxios.get(`/api/user/my-exchange-records/${eEmail}`)
    .then((response)=>response.data);
}