// Auth

export interface IAuthBody {
  email?: string;
  password?: string;
  new_password?: string;
  repeat_password?: string;
  answer_1?: string;
  answer_2?: string;
  answer_3?: string;
  refresh?: string;
  refresh_token?: string;
  access?: string;
  otp?: string;
}
