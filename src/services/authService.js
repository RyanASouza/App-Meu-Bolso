import {supabase} from './supabase';

export const signUp = async (email, password) => {
    const {data, error} = await supabase.auth.signUp({
        email,
        password
    });
    return{data, error};
}