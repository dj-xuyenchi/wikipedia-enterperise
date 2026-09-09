export interface LoginResponseDTO {
  token: string;
  role: string;
  roleName: string | null;
  userName: string;
}
