import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase = null;

function getSupabase() {
  if (!supabase) {
    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Missing Supabase environment variables. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env');
    }
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabase;
}

export async function addToWaitlist(email) {
  const client = getSupabase();
  const { error } = await client
    .from('waitlist')
    .insert([{ email: email.trim().toLowerCase(), joined_at: new Date().toISOString() }]);
  return { error };
}

export async function getWaitlistCount() {
  try {
    const client = getSupabase();
    const { data, error } = await client.rpc('get_waitlist_count');
    if (error) throw error;
    // Supabase RPC can return scalar or array depending on config
    const raw = Array.isArray(data) ? data[0] : data;
    const n = typeof raw === 'number' ? raw : parseInt(String(raw), 10);
    return Number.isInteger(n) && n >= 0 ? n : 0;
  } catch (err) {
    console.warn('Waitlist count unavailable:', err?.message || err);
    return null;
  }
}
