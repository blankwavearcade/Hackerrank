<?php

function binarySearch($k, $ar) {
    $l = 0;
    $r = count($ar) - 1;

    while ($l <= $r) {
      $mid = ($l + (count($ar) - 1) / 2);

      if ($ar[$mid] === $k) {
        return $mid;
      }

        if ($ar[$mid] < $k) {
            $l = $mid + 1;
        }

        if ($ar[$mid] > $k) {
            $r = $mid - 1;
        }

    }

    return -1;
}

