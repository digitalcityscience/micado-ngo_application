import axios from 'axios'
import qs from 'qs'


const axiosInstance = axios.create({
  paramsSerializer: params => {
    return qs.stringify(params, { arrayFormat: 'repeat' })
  },
  baseURL: 'https://',
  "headers": {
    "Prefer": "resolution=merge-duplicates"
    //   "apikey": "eyJ4NXQiOiJaalJtWVRNd05USmpPV1U1TW1Jek1qZ3pOREkzWTJJeU1tSXlZMkV6TWpkaFpqVmlNamMwWmc9PSIsImtpZCI6ImdhdGV3YXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoiYWRtaW4iLCJ0aWVyIjoiVW5saW1pdGVkIiwibmFtZSI6IkRlZmF1bHRBcHBsaWNhdGlvbiIsImlkIjoxLCJ1dWlkIjoiNzBmNGQ5MzEtNmQxYi00ZGJiLThiZGItNjgyNGViZWRhNjA5In0sInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOm51bGx9fSwia2V5dHlwZSI6IlBST0RVQ1RJT04iLCJzdWJzY3JpYmVkQVBJcyI6W3sic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJQb3N0Z1JFU1RBUEkiLCJjb250ZXh0IjoiXC9kYlwvdjAxIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoidjAxIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9LHsic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJtaWNhZG9fYmFja2VuZCIsImNvbnRleHQiOiJcL2JhY2tlbmRcLzEuMC4wIiwicHVibGlzaGVyIjoiYWRtaW4iLCJ2ZXJzaW9uIjoiMS4wLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn0seyJzdWJzY3JpYmVyVGVuYW50RG9tYWluIjoiY2FyYm9uLnN1cGVyIiwibmFtZSI6ImNoYXRib3QiLCJjb250ZXh0IjoiXC9ib3RcL3YwMSIsInB1Ymxpc2hlciI6ImFkbWluIiwidmVyc2lvbiI6InYwMSIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifV0sImlhdCI6MTU5MjkyMDczMCwianRpIjoiMmZmYzQ3ZTMtMDZkYi00NGIxLWE1NmEtMDhhMjdmOTkyY2JlIn0=.Ud-i7sAF3B915zglltrumtL8TXnojdBEpamYqk1tz4qhzQEyj6UOkrZJELA3C4Czn8x0tFlBEeNz23v6deGs8g_KZRHXrW6mYBH7bRZ-Fbp6yntPhgaUr-e28cTZZlHmOwB0256e1uEFWTnZvjSvomhJHOTi2Zl1fO89So3uHkWA9qYmAU77Z5qz-GlYvDq2G6VTTtYZLIvJ8fkICj53tN_TH6VLHBEIExNtDwV5m4yTMsoxrsHuIuLMNgpczx3ejwk4b81NobJgE2K3Uq7ihKAHo8tZ10qX91q8qDRPVXfjLQE7qTmoOKLPrhXsE3pvuMJyMpESmEn0oKOaphs9Og=="
  }
})


export default ({ Vue }) => {
  console.log(Vue.prototype.$envconfig)
  console.log("before axiosinstance")
  // Here we add the apiKey that we got from the HTTP call
  axiosInstance.defaults.baseURL = 'https://' + Vue.prototype.$envconfig.apiUrl
  axiosInstance.defaults.headers.common['apikey'] = Vue.prototype.$envconfig.apiKey
  Vue.prototype.$axios = axiosInstance
}

export { axiosInstance }

export const getCancelTokenSource = () => {
  return axios.CancelToken.source()
}

export const isCancel = thrown => {
  return axios.isCancel(thrown)
}