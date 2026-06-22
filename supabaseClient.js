import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// URL do teu novo projeto "O-Secreto-Final"
const supabaseUrl = 'https://hwbmkoydbkbdjhqdrwyt.supabase.co'; 

// A nova chave pública gerada para este projeto específico
const supabaseKey = 'sb_publishable_X0R5B6o-YipVUju_FIytO-UP'; 

// Inicializa a ligação global para que o teu index.html consiga aceder
window.supabaseClient = createClient(supabaseUrl, supabaseKey);