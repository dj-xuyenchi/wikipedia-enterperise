import axiosIns from "../config/httpSexy";
import { LoginRequestDTO } from "../dto/authen/req/LoginRequestDTO";
import { LoginResponseDTO } from "../dto/authen/res/LoginResponseDTO";

export const authenticationAPI = {
  login: async (loginModel: LoginRequestDTO): Promise<LoginResponseDTO> => {
    return axiosIns
      .post("/api/authentication/login", loginModel)
      .then((response) => {
        if (response.status === 200) {
          return response.data as LoginResponseDTO;
        } else {
          throw new Error("Login failed");
        }
      });
  },
};
