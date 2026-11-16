import { supabase } from "../lib/supabaseClient";

/* 회원가입 */
export async function signup(data) {

  const { data: response, error } = await supabase.auth.signUp({

    email: data.email,
    password: data.password,
    options: {
      data: {
        name: data.name
      }
    }

  });

  if (error) {
    throw error;
  }

  return response;

}