import axios from 'axios';

import { supabaseClient } from './supabase/client';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { Accept: 'application/json' },
});

instance.interceptors.request.use(async config => {
  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  if (session) {
    config.headers.Authorization = `Bearer ${session.access_token}`;
  }

  return config;
});
