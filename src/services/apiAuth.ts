// import supabase from './supabaseClient';
// import { Session, User } from '@supabase/supabase-js';

// type LoginParams = {
//   email: string;
//   password: string;
// };

// export async function login({ email, password }: LoginParams): Promise<Session> {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) throw new Error(error.message);
//   if (!data.session) throw new Error("No session returned");

//   return data.session;
// }

// export async function getCurrentUser(): Promise<User | null> {
//   const { data: sessionData } = await supabase.auth.getSession();

//   if (!sessionData.session) {
//     console.log("No session");
//     return null;
//   }

//   const { data, error } = await supabase.auth.getUser();

//   if (error) throw new Error(error.message);

//   console.log("Active user");
//   return data.user;
// }

// export async function logout(): Promise<void> {
//   const { error } = await supabase.auth.signOut();
//   if (error) throw new Error(error.message);
// }