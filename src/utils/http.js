import axios from 'axios'


const instance = axios.create()
instance.interceptors.request.use((config) => config,
  (error) => {
    console.log(error)

  })


export default instance
