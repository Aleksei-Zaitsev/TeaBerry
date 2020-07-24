<?php

if ($_SERVER["REQUEST-METHOD"] == "POST") {
    $name = $_POST['name'];
    $count = $_POST['count'];
    $phone = $_POST['phone'];
    $select = $_POST['time'];

    $content = $name . ' оствавил заявку на на покупку ' . $select . ' в количестве ' . $count . '. Его телефон: ' . $phone;

    $success = mail("admin@teaberry.com ", 'Запрос на бронирование столика', $content);

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
