import axiosInstance from "../request"
export const getHomeData=()=>{
  return axiosInstance({
    method:"get",
    url:'/api/homeData'
  })
}