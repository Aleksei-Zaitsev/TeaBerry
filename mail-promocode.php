<?php
if ($_SERVER["REQUEST-METHOD"] == "POST") {
    $clientemail = $_POST['clientemail'];


    $content = 'Ваш промокод на следущую покупку - «TEADISCOUNT». Сообщите его оператору при потверждении заказа! С наилучшими пожеланиями TeaBerry.';

    $success = mail( '$clientemail', 'Промокод на первый заказ', $content);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }
} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}