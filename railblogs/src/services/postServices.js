import axios from 'axios'

const API_POST_DATA = "http://localhost:3000/api/v1/posts"

export async function getPostData(){
    return await axios.get(API_POST_DATA).then((response)=>response.data)
  }

export async function createNewPost(){
    
}