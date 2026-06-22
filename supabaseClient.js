// URL e Chave do seu projeto "O-Secreto-Final"
const supabaseUrl = 'https://hwbmkoydbkbdjhqdrwyt.supabase.co'; 
const supabaseKey = 'sb_publishable_X0R5B6o-YipVUju_FIytO-UP'; 

// Inicializa o cliente globalmente usando o objeto 'supabase' injetado pelo CDN do HTML
window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);