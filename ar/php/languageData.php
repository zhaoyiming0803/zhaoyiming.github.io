<?php

    header('Content-type:text/html;charset="utf-8"');

    $arry = array(
        array('name'=>'JavaScript', 'value'=>1),
        array('name'=>'NodeJs', 'value'=>2),
        array('name'=>'PHP', 'value'=>3),
        array('name'=>'Java', 'value'=>4)
    );

    echo json_encode($arry);