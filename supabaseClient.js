// Inicializa o cliente usando as chaves públicas do seu projeto "O-Secreto-Final"
const supabaseUrl = 'https://hwbmkoydbkbdjhqdrwyt.supabase.co'; 
const supabaseKey = 'sb_publishable_X0R5B6o-YipVUju_FIytO-UP'; 

// Vincula o cliente de forma global no escopo 'window' do navegador
window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);