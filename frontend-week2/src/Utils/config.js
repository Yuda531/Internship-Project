import axios from "axios";


const baseUrl = 'https://2jgj2p3m39.execute-api.ap-southeast-1.amazonaws.com/dev'
const API_KEY = '6a67693de31cd85db76ff8e5b6452afa41b4281494e63e1abe60aa1df60384c9291973dfac102c1102edcfaaf7e50da96507c18bcdc95fd6f5c7edb459e0f8b3'


export const registerUser = async () => {
    const regisUser = await axios.post(`${baseUrl}/register?api-key=${API_KEY}`)
    console.log({reuser: regisUser })
    // return regisUser.data.results
}





