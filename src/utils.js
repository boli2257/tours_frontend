import axios from "axios";
const url = "https://raw.githubusercontent.com/mkatay/json-tours/refs/heads/main/tours.json"

export const getData = async (setData)=>{
    const response = await axios.get(url)
    const data = await response.data
    setData(data)
}