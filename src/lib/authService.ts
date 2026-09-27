import { isSupabaseConfigured, supabase } from './supabase';

export interface AuthUser {
  id: string;
  name: string;
}

export type AuthResult = { ok: true; user: AuthUser } | { ok: false; error: string };

const NOT_CONFIGURED_ERROR = 'Kimlik doğrulama şu anda yapılandırılmıyor. Lütfen daha sonra tekrar deneyin.';

function mapSupabaseError(message: string): string {
  if (message.includes('Invalid login credentials')) return 'E-posta veya şifre hatalı.';
  if (message.includes('User already registered')) return 'Bu e-posta ile zaten bir hesap var.';
  if (message.includes('Password should be at least')) return 'Şifre en az 6 karakter olmalı.';
  if (message.includes('Unable to validate email address')) return 'Geçerli bir e-posta adresi girin.';
  return message;
}

async function fetchProfileName(userId: string, fallback: string): Promise<string> {
  if (!supabase) return fallback;
  const { data } = await supabase.from('profiles').select('name').eq('id', userId).single();
  return (data?.name as string) || fallback;
}

export async function signUp(email: string, password: string, name: string): Promise<AuthResult> {
  if (!isSupabaseConfigured || !supabase) return { ok: false, error: NOT_CONFIGURED_ERROR };
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { name } },
  });
  if (error) return { ok: false, error: mapSupabaseError(error.message) };
  if (!data.user) return { ok: false, error: 'Kayıt tamamlanamadı, lütfen tekrar deneyin.' };
  return { ok: true, user: { id: data.user.id, name } };
}

export async function signIn(email: string, password: string): Promise<AuthResult> {
  if (!isSupabaseConfigured || !supabase) return { ok: false, error: NOT_CONFIGURED_ERROR };
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { ok: false, error: mapSupabaseError(error.message) };
  if (!data.user) return { ok: false, error: 'Giriş tamamlanamadı, lütfen tekrar deneyin.' };
  const name = await fetchProfileName(data.user.id, data.user.email || 'Yazar');
  return { ok: true, user: { id: data.user.id, name } };
}

export async function signOutUser(): Promise<void> {
  if (!supabase) return;
  await supabase.auth.signOut();
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  if (!supabase) return null;
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session?.user) return null;
  const name = await fetchProfileName(session.user.id, session.user.email || 'Yazar');
  return { id: session.user.id, name };
}

export function onAuthStateChange(callback: (user: AuthUser | null) => void): () => void {
  if (!supabase) return () => {};
  const { data } = supabase.auth.onAuthStateChange((_event, session) => {
    if (!session?.user) {
      callback(null);
      return;
    }
    fetchProfileName(session.user.id, session.user.email || 'Yazar').then((name) => {
      callback({ id: session.user.id, name });
    });
  });
  return () => data.subscription.unsubscribe();
}
