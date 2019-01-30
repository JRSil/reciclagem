<?php
include("../includes/mobile_redirect.php"); 
require("../includes/funcoes_gerais.php");
include '../routes.php';
$base_url = baseUrl();
?>

<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <meta name="viewport" content="width=device-width">
	<link rel="stylesheet" href="../css/bootstrap.min.css">
	<link rel="stylesheet" href="../css/base.css?ver=5">
	<link rel="stylesheet" href="files/css/style.css?ver=2">
	<title>Escolha TRES - Reciclagem de Cápulas</title>
	<script src="../js/jquery.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/tres.js?ver=4"></script>
	<script src="files/lojas.js"></script>
	<script src="files/script.js"></script> 
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
	$seo->title = "Escolha TRES - Reciclagem de Cápsulas";
	$seo->description = "O projeto de Reciclagem de Cápsulas vai recolher cápsulas usadas e promover sua reciclagem. Resíduos separados dos resíduos orgânicos se transformarão em acessórios e outros materiais.";
	$seo->image = "Escolha TRES - Reciclagem de Cápsulas";
	$seo->url = "http://".$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'];
	$seo->image = "http://www.escolhatres.com.br/reciclagem/files/images/log-me.jpg";
	$seo->writeTags();
?>
</head>

<body>
<? analytics(); ?>
<?php  include("../includes/header.php"); ?>

<div class="container-fluid bg">

<!--logo-->
	<section class="logo">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<img src="files/images/logo.png" class="img-responsive center-block">
					<h1>Reciclagem <span>de Cápsulas</span></h1>
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
					<p>É aqui que combinamos paixão por café com<br> respeito e atitude pelo<br> <span>futuro do nosso planeta.</span></p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p>
						<br><br><span>Amamos nosso planeta</span> da mesma forma que amamos nossas bebidas.<br><br>
					</p>
					<h2>Eu <img src="files/images/euamo.png" class="img-responsive center-block">o meu planeta!</h2>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-md-offset-3">
					<!-- <p>
						<span>Amamos nosso planeta</span> da mesma forma que amamos nossas bebidas.<br><br>

						Pensando nisso, TRES® criou o projeto de <b>Reciclagem de Cápsulas</b>
						que vai recolher cápsulas usadas e promover sua reciclagem.
						Resíduos separados dos resíduos orgânicos se transformarão
						em acessórios e outros materiais. <br><br><br><br>

					</p> -->

		  			<h3>COMO FUNCIONA?</h3>

					<p>
						<br>O projeto conta com pontos de <b>entrega de cápsulas</b> e também <b>retirada a domicílio</b> 
						em diferentes cidades do país. Novos pontos de entrega e retirada serão instalados gradativamente e comunicados neste site.
						<br><br><br><br>
					</p>

					<h3 class="pt-coleta">PONTOS DE COLETA</h3>

					<p>
						<br>Confira abaixo os endereços onde é possível entregar as cápsulas usadas.<br><br>
					</p>
				</div>
			</div>
		</div>
	</section>
<!--fim middle-->


<!--bottom-->
<section class="bottom">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="row">
					<div class="col-md-12">
						<!-- <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="512px" height="512px">
								<g>
									<path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="#FFFFFF"/>
								</g>
							</svg> -->
						<select class="" data-scroll="rowSp" id="select-regiao">
							<option value="NULL">Selecione uma região</option>
						</select>
					</div>
				</div>
			</div>
		</div>

		<div class="rowScroll rowSp">
			<div class="row end" id="end-list">
				
				
			</div>
		</div>
		

		

		
	</div>
</section>
<!--fim bottom-->


<!--box coleta em casa-->
<section class="coleta">
	<div class="container">
		<div class="row">
			<div class="col-md-6 box-coleta">
				<h3>COLETA EM CASA</h3>
				
				<p>
					<br>Resíduos eletrônicos de máquinas e resíduos de cápsulas.
				</p>

				<p>
					Clique abaixo para mais informações sobre a coleta de resíduos e veja se está disponível em sua cidade.<br><br>
				</p>
				
				<a href="./coleta.php" class="btn">SAIBA MAIS</a>
			</div>
			<div class="col-md-12">
				<p>
					<br>Representantes de cooperativas ou empresas privadas interessadas em participar do Projeto de Reciclagem de Cápsula devem entrar em contato pelo telefone 0800 979 2021<br>
				</p>
			</div>
		</div>
	</div>	
</section>

</div>

<script type="text/javascript">
	
	$(document).ready(function(){
		$('section.bottom h3').on('click', function(event){
			event.preventDefault();
			var item = $(this);
			var scroll = item.data('scroll');
			

			




			if(item.hasClass('active')){

				$('section.bottom h3').removeClass('active');
				$('.'+scroll).hide();

			}else{
				

				$('section.bottom h3').removeClass('active');
				item.addClass('active');

				$('.rowScroll').hide();

				$('.'+scroll).slideDown( 1000, function() {});

				
				
			}

			
		});
	});

</script>






<?php  include("../includes/footerRolagem.php"); ?>
<?php footertags();  ?>
</body>
</html>