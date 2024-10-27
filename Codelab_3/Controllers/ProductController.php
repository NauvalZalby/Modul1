<?php

namespace Controller;

include "Traits/ResponseFormatter.php";
include "Controllers/Controller.php";

use Traits\ResponseFormatter;

class ProductController extends Controller{
    use ResponseFormatter;

    public function __construct(){
        $this -> controllerName = "Get All Product";
        $this -> controllerMethod = "Get";
    }

    public function getAllProduct(){
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "Spaghetti",
            "Jus Jambu"
        ];

        $response = [
            "controller_attribute" => $this -> getControllerAttribute(),
            "product" => $dummyData
        ];

        return $this -> ResponseFormatter(200, "Succes", $response);
    }
};