import axios from "axios";
import { LoginResponseDTO } from "../dto/authen/res/LoginResponseDTO";
const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const lg = localStorage.getItem("lg") as LoginResponseDTO | null;

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: NEXT_PUBLIC_BACKEND_URL,
  timeout: 100000,
  headers: { Authorization: "Bearer " + lg?.token },
});

// if (typeof window !== 'undefined') {
//     axiosIns.interceptors.request.use(config => {
//         const poly = localStorage.getItem('lg');
//         if (poly) {
//             const polyAuth = JSON.parse(poly);
//             config.headers = config.headers || {};
//             config.headers.Authorization = `Bearer ${JSON.parse(polyAuth.token)}`;
//         }
//         return config;
//     });
// }

// axiosIns.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (typeof window !== 'undefined') {
//         //    window.location = LANDING + "login";
//     }
// });

export default axiosIns;
