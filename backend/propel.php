<?php
return [
    'propel' => [
        'database' => [
            'connections' => [
                'default' => [
                    'adapter' => 'mysql',
                    'dsn' => 'mysql:host=localhost;port=3306;dbname=academia-digital',
                    'user' => 'root',
                    'password' => 'root2017',
                    'settings' => [
                        'charset' => 'utf8'
                    ]
                ]
            ]
        ]
    ]
];
