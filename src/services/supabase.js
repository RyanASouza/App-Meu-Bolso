import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { Platform } from 'react-native';
import 'react-native-url-polyfill/auto';

const CustomStorage = {
  getItem: (key) => {
    if (Platform.OS === 'web') {
      if (typeof window === 'undefined') return Promise.resolve(null);
      return Promise.resolve(window.localStorage.getItem(key));
    }

    return AsyncStorage.getItem(key);
  },

  setItem: (key, value) => {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, value);
      }
      return Promise.resolve();
    }

    return AsyncStorage.setItem(key, value);
  },

  removeItem: (key) => {
    if (Platform.OS === 'web') {
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem(key);
      }
      return Promise.resolve();
    }

    return AsyncStorage.removeItem(key);
  },
};

const url = 'https://uyyrzwtpehsztudvdnxy.supabase.com';
const key = 'sb_publishable_9_hpM-KIR-T0snwu3JKvuA_ccsZ9Y9I';

export const supabase = createClient(url, key, {
  auth: {
    storage: CustomStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: Platform.OS === 'web',
  },
});