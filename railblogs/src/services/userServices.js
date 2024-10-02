import axios from 'axios'

const API_USER_DATA = "http://localhost:3000/api/v1/users"

export async function getUserDatat (){
    return await axios.get(API_USER_DATA).then((response)=>response.data)
  }
  