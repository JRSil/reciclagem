$(document).ready(function(){

  var selectRegiao = $("#select-regiao");
  var endList = $("#end-list");

  //lista todas as regiões e monta o select do filtro 
  var regioes = new Array();
  var OptionsRegiao = '<option value="NULL">Selecione uma região</option>';
  for (var i in lojasData) {
    var loja = lojasData[i];
    if(regioes.indexOf(loja.regiao)<0){
        regioes[i] = loja.regiao;
        OptionsRegiao += '<option value="'+loja.regiao+'">'+loja.regiao+'</option>';
    }
  }
  OptionsRegiao += '<option value="ALL">Todas</option>';
  selectRegiao.html(OptionsRegiao);

  //filtra as lojas por regiões
  selectRegiao.change(function(e){
    e.preventDefault;
    var select = $(this);
    var value = select.val();
    getLojasByRegiao(value);
  });

  //retorna as lojas
  function getLojasByRegiao(regiao){
    var lojasHtml = '';
    var count = 1;
    for (var i in lojasData) {
      var loja = lojasData[i];
      if(loja.regiao==regiao || regiao=='ALL'){
          lojasHtml += '<div class="col-md-6 item_locaiton">';
            lojasHtml += '<p class="tittle_location">'+loja.pev+'</p>';
            lojasHtml += '<p class="end_location">'+loja.end+'<br>'+loja.horario+'</p>';
            lojasHtml += '<a class="link_location" href="'+loja.link+'" target="_blank">Como chegar?</a>';
          lojasHtml += '</div>';
          if(count%2==0){
            lojasHtml += '<div class="clearfix"></div>';
          }
          count++;
      }
    }
    endList.html(lojasHtml);
  }

});