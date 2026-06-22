import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Substitua pelo link correto (sem o rest/v1/)
const supabaseUrl = 'https://mzlqpzvcvrykfjkigli.supabase.co'; 

// Substitua pelo seu código anon key
const supabaseKey = 'sb_publishable_ncUaaodlL0AuoXFAmturfw_FIytO-UP'; 

// Inicializa o cliente do Supabase corretamente
export const supabase = createClient(supabaseUrl, supabaseKey);