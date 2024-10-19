// Objeto com associações de números de músicas aos IDs do YouTube
const videoSources = {
  '1': 'dQw4w9WgXcQ', // Exemplo: ID do vídeo do YouTube
  '2': 'kJQP7kiw5Fk',
  '3': '3JZ_D3ELwOQ',
};

let player;

// Expondo a função onPlayerStateChange globalmente
window.onPlayerStateChange = function(event) {
  // 0 significa que o vídeo terminou
  if (event.data === YT.PlayerState.ENDED) {
    resetKaraoke();
  }
};

// Expondo a função onYouTubeIframeAPIReady globalmente
window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player('player', {
    height: '450',
    width: '80%',
    videoId: '', // Inicialize com um vídeo vazio
    events: {
      'onStateChange': window.onPlayerStateChange // Usando a referência global
    }
  });
  console.log("YouTube Iframe API carregada e função definida.");
};

function playSong() {
  const songNumber = document.getElementById('songNumber').value;
  const inputContainer = document.getElementById('inputContainer');
  const videoId = videoSources[songNumber];

  if (player && videoId) { // Verifique se o player está inicializado
    player.loadVideoById(videoId); // Carrega o vídeo com base no ID
    inputContainer.style.display = 'none'; // Esconde o input
    document.getElementById('player').style.display = 'block'; // Mostra o vídeo
    player.playVideo(); // Reproduz o vídeo após carregá-lo
  } else {
    alert('Música não encontrada ou player não inicializado.');
  }
}

// Reseta a interface do karaokê
function resetKaraoke() {
  document.getElementById('player').style.display = 'none'; // Esconde o vídeo
  document.getElementById('inputContainer').style.display = 'flex'; // Mostra o input
  document.getElementById('songNumber').value = ''; // Limpa o input
}
