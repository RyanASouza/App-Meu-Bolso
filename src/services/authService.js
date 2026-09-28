import { supabase } from './supabase';

export const signUp = async (email, password) => {
    const {data, error} = await supabase.auth.signUp({
        email,
        password
    });
    return{data, error};
}

export const signIn = (email, password) => 
    supabase.auth.signInWithPassword({email, password});
