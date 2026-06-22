import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Link completo do seu novo projeto que você copiou da primeira opção
const supabaseUrl = 'https://hwbmkoydbkbdjhqdrwyt.supabase.co'; 

// A nova chave publicável que você copiou da segunda opção
const supabaseKey = 'sb_publishable_X0R5B6o-YipVUju_FIytO-UP'; 

// Inicializa o banco de dados globalmente para o jogo rodar
window.supabaseClient = createClient(supabaseUrl, supabaseKey);