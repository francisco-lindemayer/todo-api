import axios from 'axios';

interface IValidateEmail {
  email: string;
  did_you_mean: string;
  user: string;
  domain: string;
  format_valid: boolean;
  mx_found: boolean;
  smtp_check: boolean;
  catch_all: boolean;
  role: boolean;
  disposable: boolean;
  free: boolean;
  score: number;
}

export const checkEmail = async (email: string): Promise<{
  valid_email: boolean;
  did_you_mean?: string;
}> => {
  const { data } = await axios.get<IValidateEmail>(`http://apilayer.net/api/check?access_key=${process.env.APILAYER_KEY}&email=${email}`);

  if (data.format_valid && data.mx_found) {
    return { valid_email: true }
  } else {
    return { valid_email: false, did_you_mean: data.did_you_mean }
  }
}
