<?php

function equalArray($ar) {
    $counts = [];
    for($i = 0; $i < count($ar); $i++) {
        if (array_key_exists($ar[$i], $counts)) {
            $counts[$ar[$i]]++;
        } else {
            $counts[$ar[$i]] = 1;
        }
    }
    asort($counts);

    $steps = 0;
    end($counts);
    $key = key($counts);
    foreach($counts as $k => $v) {
        if ($key === $k) {
            break;
        }
        $steps += $v;
    }
    return $steps;
}

