import { apiUrl } from "./apiUrl";
import { config } from "./config";

export const uploadPlotApi=async(plot)=>{
    return await config('POST',`${apiUrl}/Sell`,plot)
}
export const getALLPlotApi=async()=>{
    return await config('GET',`${apiUrl}/Sell`)
}
export const deletePlotApi=async(id)=>{
    return await config('DELETE',`${apiUrl}/Sell/${id}`,{})
}
export const addFavouriteApi=async(plotDetails)=>{
    return await config('POST',`${apiUrl}/favourite`,plotDetails)
}
export const getFavouriteApi=async()=>{
    return await config('GET',`${apiUrl}/favourite`)
}
export const removeFavouriteApi=async(houseId)=>{
    return await config('DELETE',`${apiUrl}/favourite/${houseId}`,{})
}
