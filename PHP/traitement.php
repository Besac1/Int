<?php

if (isset($_POST)) {

    if (isset($_POST['string'])) {

        $string = $_POST['string'];
        $truc = 0;
        $tab = array();
        $array = array(

            "number" => 0,
            "nbCharacters" => 0

            );
        $alphabet = array(

            "a" => 1,
            "b" => 2,
            "c" => 3,
            "d" => 4,
            "e" => 5,
            "f" => 6,
            "g" => 7,
            "h" => 8,
            "i" => 9,
            "j" => 10,
            "k" => 11,
            "l" => 12,
            "m" => 13,
            "n" => 14,
            "o" => 15,
            "p" => 16,
            "q" => 17,
            "r" => 18,
            "s" => 19,
            "t" => 20,
            "u" => 21,
            "v" => 22,
            "w" => 23,
            "x" => 24,
            "y" => 25,
            "z" => 26

            );

        if (strlen($string) > 0) {

            for ($i=0; $i < strlen($string) ; $i++) {

                $lettre = lcfirst($string[$i]);
                $nbCharacters = $i + 1;
                if (preg_match('/[a-z]/', $lettre)) {

                    array_push($tab, $alphabet[$lettre]);

                }
                
            }

        }

        foreach ($tab as $value) {

            $truc = $truc + $value;
            $array = array(
                "number" => $truc,
                "nbCharacters" => $nbCharacters
                );
        }

    }

    echo json_encode($array);

}

?>