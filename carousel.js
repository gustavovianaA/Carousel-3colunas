// verifica a largura da tela e aplica as modificações
function isBreakPoint(default3,itemsHtml , bp){
  if($(window).width() < bp)
    toOneColumn(itemsHtml); 
  else
    toThreeColumn(default3);    
}
// ajusta a exibilção mobile para uma coluna
function toOneColumn(itemsHtml){  
  var items = '.cr_multiplos .carousel_item_post'; 
  $('.carousel-inner').html(itemsHtml);
  $(items).addClass('carousel-item');
  //adiciona active ao primeiro novo item de carousel
  $(items).eq(0).addClass("active");
  //layout
  $(items).removeClass('col-md-4');
  //imagem
  $(items).find('img').css('width','60%');
  //escreve os indicadores
  writeIndicators(items);  
}
//Ajusta a exibição para três colunas
function toThreeColumn(default3){  
  var items = '.cr_multiplos .carousel-item'; 
  $('.carousel-inner').html(default3);
  writeIndicators(items);
}
//Ajusta o número de indicadores(1 coluna / 3 colunas)
function writeIndicators(items){
  var n = $(items).length;
  for(i = 0 ; i < n ; i++){
    if(i == 0)
      var cr_indicators =  '<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>';
    else
      cr_indicators += ' <li data-target="#carouselExampleIndicators" data-slide-to="'+i+'" ></li>';
  }
  $(".carousel-indicators").html(cr_indicators);
}
$(document).ready(function(){
  //define a largura(px) de troca para latyout 1 coluna 
  const breakPoint = 768; 
  const default3 = $('.carousel-inner').html();
  var itemsHtml = $('.cr_cards').eq(0).html() + $('.cr_cards').eq(1).html();
  //verificar inicialmente 
  isBreakPoint(default3,itemsHtml , breakPoint);  
  $(window).resize(function(){ 
    //verificar na mudança de largura
    isBreakPoint(default3,itemsHtml , breakPoint); 
  });
});