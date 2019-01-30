<?php
session_start();
include("../includes/mobile_redirect.php"); 
require("../includes/funcoes_gerais.php");
include '../routes.php';
$base_url = baseUrl();
$msg = 0;
$msg = $_SESSION['msg'];
?>

<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link rel="stylesheet" href="../css/base.css?ver=5">
	<link rel="stylesheet" href="./files/css/style.css?ver=2">
	<title>Escolha TRES - Reciclagem de Cápulas</title>
    <script src="../js/jquery.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/tres.js?ver=4"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.10/jquery.mask.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700" rel="stylesheet"> 
    <!--[if lte IE 8]>
      <script>
          var respond = document.createElement('link');
          respond.rel = 'stylesheet';
          respond.href = 'css/ie8.css';
          respond.media = 'screen';
          if ($(window).width() <= 1280) {
              document.getElementsByTagName('head')[0].appendChild(respond);
          }
      </script>
    <![endif]-->
    <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">
    <?php headtags(); ?>
<?php
	$seo = new SEO();
	$seo->title = "Escolha TRES - Coleta em Casa";
	$seo->description = "O projeto de Reciclagem de Cápsulas vai recolher cápsulas usadas e promover sua reciclagem. Resíduos separados dos resíduos orgânicos se transformarão em acessórios e outros materiais.";
	$seo->image = "Escolha TRES - Coleta em Casa";
	$seo->url = "http://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];
	$seo->image = "http://www.escolhatres.com.br/reciclagem/files/images/log-me.jpg";
	$seo->writeTags();
?>
</head>

<body class="pg-coleta">
<? analytics(); ?>
<?php  include("../includes/header.php"); ?>

<div class="container-fluid bg">

    <!--logo-->
	<section class="logo">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
                    <h1>Coleta <span>em Casa</span></h1>
                    <h3>Disponível em algumas <br>capitais do Brasil</h3>
					<img src="./files/images/euamo.png" class="img-responsive center-block">
				</div>
			</div>
		</div>
	</section>
    <!-- fim logo -->

    <!--middle-->
	<section class="middle">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p class="titulo">Para a retirada a domicílio, siga os passos a seguir:</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-2">
                    <div class="col-sm-12">
                        <img src="./files/images/1-abra-capsula.png" class="img-responsive center-block" />
                    </div>
                    <p>Abra a cápsula e separe plástico, alumínio e material orgânico</p>
                </div>
                <div class="col-md-2">
                    <div class="col-sm-12">
                        <img src="./files/images/2-que-tal-utilizar.png" class="img-responsive center-block" />
                    </div>
                    <p>Que tal utilizar a borra de café para adubar suas plantas?</p>
                </div>
                <div class="col-md-2">
                    <div class="col-sm-12">
                        <img src="./files/images/3-limpe-as-capsulas.png" class="img-responsive center-block" />
                    </div>
                    <p>Limpe as peças plásticas e de alumínio para retirar todos os resíduos</p>
                </div>
                <div class="col-md-2">
                    <div class="col-sm-12">
                        <img src="./files/images/4-junte-pelo-menos.png" class="img-responsive center-block" />
                    </div>
                    <p>Junte pelo menos 100 cápsulas antes de seguir para o passo 5</p>
                </div>
                <div class="col-md-2">
                    <div class="col-sm-12">
                        <img src="./files/images/5-preencha-o-form.png" class="img-responsive center-block" />
                    </div>
                    <p>Preencha o formulário abaixo com todas as informações solicitadas</p>
                </div>
                <div class="col-md-2">
                    <div class="col-sm-12">
                        <img src="./files/images/6-aguarde-o-contato.png" class="img-responsive center-block" />
                    </div>
                    <p>Aguarde o contato de um profissional para agendamento da coleta</p>
				</div>
			</div>
		</div>
	</section>
    <!--fim middle-->

    <!-- form -->
    <section class="form-agendamento">
        <div class="container">
            <div class="col-md-12">
                <h3>Formulário para agendamento</h3>
                <p style="font-size:20px;">Serviço disponível nas cidades listadas abaixo:</p>
                
                <form action="envia.php" method="post" class="col-md-6" onsubmit="" id="ajax_form">
                    <div class="form-group col-md-12">
                        <select class="formulario" name="cidade" id="cidade">
                            <option>Selecione uma cidade</option>
                            <option>João Pessoa (PB)</option>
                            <option>Maceió (AL)</option>
                            <option>Recife (PE)</option>
                            <option>Salvador (BA)</option>
                            <option>Brasilia (DF)</option>
                            <option>Campo Grande (MS)</option>
                            <option>Cuiaba (MT)</option>
                            <option>São Luiz (MA)</option>
                            <option>Teresina (PI)</option>
                            <option>Manaus (AM)</option>
                            <option>Belém (PA)</option>
                            <option>Marituba (PA)</option>
                            <option>Porto Alegre (RS)</option>
                            <option>Nova Santa Rita (RS)</option>
                            <option>Curitiba (PR)</option>
                            <option>Pinhais (PR)</option>
                            <option>Londrina(PR)</option>
                            <option>Florianópolis (SC)</option>
                            <option>Palhoça (SC)</option>
                            <option>Vitória (ES)</option>
                            <option>Viana (ES)</option>
                        </select>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="nome">Nome</label>
                        <input type="text" class="formulario" name="nome" placeholder="Nome" id="nome" required>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="email" id="label-email">
                            E-mail
                        </label>
                        <input type="email" class="formulario" name="email" placeholder="E-mail" id="email" required>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="tel">Telefone</label>
                        <input type="tel" class="formulario" name="telefone" placeholder="Telefone" id="tel" required>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="endereco">Endereço</label>
                        <input type="text" class="formulario" name="endereco" placeholder="Endereço" id="endereco" required>
                    </div>
                    <div class="col-md-6 box-btn">
                        <button type="submit" class="btn-agenda" value="Enviar" id="bt-end">ENVIAR</button>
                    </div>
                </form>
      
                <div class="col-md-6" id="mensagem"></div>
            </div>
        </div>
    </section>
    <!-- fim form -->

    <!-- bottom -->
    <!-- <section class="bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-10">
					<p>
                        Como forma de agradecimento pela sua colaboração com o nosso projeto de Reciclagem de Cápsulas, após a coleta você 
                        receberá um voucher com 10% de desconto para uso na loja TRES.
                    </p>
                    <img src="./files/images/10off.png" class="img-responsive center-block" alt="10% off" />
				</div>
            </div>
        </div>
    </section> -->
    <!-- fim bottom -->

</div>

<script type="text/javascript">
    var form = $('.formulario');
    form.keyup(function() {
        var item = $(this);
        if(item.val().length == 0){
            item.siblings().css("display", "none");
        }else{
            item.siblings().css("display", "block");
        }
    });

    $('#tel').mask('(00) 0000-00009');
    $('#tel').keyup(function(event) {
        if($(this).val().length == 15){
            $('#tel').mask('(00) 00000-0009');
        } else {
            $('#tel').mask('(00) 0000-00009');
        }
    });

    $('#ajax_form').submit(function(e) {
        e.preventDefault();
        var btsend = $("#bt-end");
        const nome = $("#nome").val();
        const email = $("#email").val();
        const telefone = $("#tel").val();
        const endereco = $("#endereco").val();
        const cidade = $("#cidade").val();
        const estado = $("#estado").val();
        
        btsend.text('Aguarde...').attr('disabled', 'disabled');

        $.ajax({
            url: 'envia.php', // caminho para o script que vai processar os dados
            type: 'POST',
            data: {nome: nome, email: email, telefone: telefone, endereco: endereco, cidade: cidade, estado: estado},
            dataType: "JSON",
            success: function(response) {
                for(i in response){
                    $("#mensagem").html('');
                    if(response[i].response == "success"){
                        $('#ajax_form').css('display', 'none');
                        $('#mensagem').addClass('sucesso');
                    }else{
                        $('#mensagem').addClass('erro');
                    }
                    $('#mensagem').css('display', 'block');
                    $("#mensagem").append(response[i].message);
                }

                btsend.text('ENVIAR').removeAttr('disabled');
                
            },
            error: function(xhr, status, error) {
                $("#mensagem").html('');
                $('#mensagem').css('display', 'block');
                $("#mensagem").html(xhr.responseText.message);

                btsend.text('ENVIAR').removeAttr('disabled');
            }
        });
        return false;
    });
    // $('#email').focusout(function(){
    //     if($('#email').val().length > 0){
    //         <?php
    //             $validaEmail = "$('#email').val()";

    //             if(filter_var($validaEmail, FILTER_VALIDATE_EMAIL)){
    //                 echo '$("#email").removeClass("erro-form");$("#label-email").text("E-mail Correto")';
    //             }else{
    //                 echo '$("#email").addClass("erro-form");$("#label-email").text("E-mail Incorreto")';
    //             }
    //         ?>
    //     }else{
    //         $("#email").removeClass("erro-form");
    //         $("#label-email").text("E-mail")
    //     }
    // });
</script>

<?php  include("./includes/footerRolagem.php"); ?>
<?php footertags();  ?>
</body>
</html>