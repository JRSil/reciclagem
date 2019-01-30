<?php 

error_reporting(0);
ini_set(“display_errors”, 0 );
ini_set('default_charset','UTF-8');

session_start();

$nome = $_POST['nome'];
$message = array();

if(empty($_POST['nome'])){
    $message[] = array("message"=>"Campo Nome é obrigatório<br>",  "response"=>"error");
}

$email = $_POST['email'];
$telefone = $_POST['telefone'];
$endereco = $_POST['endereco'];

if(empty($_POST['endereco'])){
    $message[] = array("message"=>"Campo Endereço é obrigatório<br>",  "response"=>"error");
}
$cidade = $_POST['cidade'];
if($_POST['cidade'] == "Selecione uma cidade"){
    $message[] = array("message"=>"Campo Cidade é obrigatório<br>",  "response"=>"error");
}

if(empty($_POST['email'])){
    $message[] = array("message"=>"Campo e-mail é obrigatório<br>",  "response"=>"error");
}else{
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $message[] = array("message"=>"Esse e-mail não é válido.<br>",  "response"=>"error");
    }
}

//verifica se existem erros
if(count($message)>0) {
    echo json_encode($message);
}else{

    $message = array();
    $to = "sactres@3coracoes.com.br";
    $subject = "Agendamento (Coleta em Casa)";
    $menssagem = "<strong>Nome:</strong> $nome<br /><br />
                <strong>E-mail:</strong>$email<br /><br />
                <strong>Telefone:</strong> $telefone<br /><br />
                <strong>Endereço:</strong> $endereco<br /><br />
                <strong>Cidade:</strong> $cidade<br /><br />";
    $header = "MIME-Version: 1.0\n";
    $header .= "Content-type: text/html; charset=UTF-8\n";
    $header .= "From: site@escolhatres.com.br\n";
   
    if(mail($to, $subject, $menssagem,$header)){
        $message[] = array("message"=>'Enviado com sucesso', "response"=>"success");
    }else{
        $message[] = array("message"=>'Não foi possível enviar o e-mail, tente novamente mais tarde.', "response"=>"error");
    }

    echo json_encode($message);
    die();

}