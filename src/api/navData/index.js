import axiosInstance from "../request"
export const getNavData=()=>{
  return axiosInstance({
    method:"get",
    url:'/api/navData'
  })
}