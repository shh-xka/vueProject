import axiosInstance from "../request"
export const getCategoryData=()=>{
  return axiosInstance({
    method:"get",
    url:'/api/category'
  })
}