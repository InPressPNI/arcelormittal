// Paralax de movimento da imagem

var camera= $('#camera');

var layer= $('#main');

layer.mousemove(function(e){
  var ivalueX= (e.pageX * 0.5 / 50);
  var ivalueY= (e.pageY * 0.5 / 60);
  var cvalueX= (e.pageX * 0.5 / 60);
  var cvalueY= (e.pageY * 0.5 / 100);
  camera.css('transform', 'translate3d('+cvalueX+'px,'+cvalueY+'px, 0)');
}); 

// Para o vídeo quando o modal é fechado. Id individual

  $("#Modal-02").on('hidden.bs.modal', function (e) {
      $("#Modal-02 iframe").attr("src", $("#Modal-02 iframe").attr("src"));
  });

// Popup vira tela

var myModal = new bootstrap.Modal(document.getElementById('popUp'), {})
myModal.toggle()  