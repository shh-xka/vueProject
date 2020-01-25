import axiosInstance from "../request"
export const getCategoryListData=()=>{
  return axiosInstance({
    method:"get",
    url:'/api/categoryList'
  })
}