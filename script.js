// Script para lidar com os cliques dos botões
// Botão Vestibular Graduação: Direcionar para WhatsApp com texto específico
document.getElementById('vestibular-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const whatsappUrl = 'https://wa.me/5561999999999?text=Vestibular%20Gradua%C3%A7%C3%A3o';
    window.open(whatsappUrl, '_blank'); // Abre em nova aba
});
// Botão Unopar Parintins: Direcionar para WhatsApp com texto específico
document.getElementById('parintins-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const whatsappUrl = 'https://wa.me/5561999999999?text=Unopar%20Parintins'; // Corrigido para Parintins, assumindo que era um erro no original
    window.open(whatsappUrl, '_blank'); // Abre em nova aba
});
// Botão Site: Espaço para adicionar posteriormente (por exemplo, redirecionar para um site)
document.getElementById('site-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão
    // Aqui você pode adicionar o código para redirecionar para o site posteriormente
    // Exemplo: window.location.href = 'https://www.exemplo.com';
    alert('Site ainda não configurado. Adicione a URL aqui posteriormente.');
});
// Botão Localização: Abrir Google Maps com a localização da unidade
document.getElementById('localizacao-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão
    // Substitua pela URL real do Google Maps da unidade. Exemplo para Parintins (aproximado):
    const mapsUrl = 'https://www.google.com/maps/place/Unopar+Parintins/@-2.6286,-56.7358,15z'; // Coordenadas aproximadas de Parintins, AM
    // Ou use uma busca: 'https://www.google.com/maps/search/Unopar+Parintins'
    window.open(mapsUrl, '_blank'); // Abre em nova aba
});
