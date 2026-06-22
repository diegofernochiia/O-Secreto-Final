// Inicializa o cliente usando a biblioteca global que vamos puxar no HTML
const supabaseUrl = 'https://hwbmkoydbkbdjhqdrwyt.supabase.co'; 
const supabaseKey = 'sb_publishable_X0R5B6o-YipVUju_FIytO-UP'; 

window.supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);