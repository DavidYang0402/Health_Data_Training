<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $age = $_POST["age"];
    $height = $_POST["height"];
    $weight = $_POST["weight"];
    $waist = $_POST["waist"];
    $eyesight_left = $_POST["eyesight_left"];
    $eyesight_right = $_POST["eyesight_right"];
    $hearing_left = $_POST["hearing_left"];
    $hearing_right = $_POST["hearing_right"];
    $systolic = $_POST["systolic"];
    $relaxation = $_POST["relaxation"];
    $fasting_blood_sugar = $_POST["fasting_blood_sugar"];
    $cholesterol_total = $_POST["cholesterol_total"];
    $triglyceride = $_POST["triglyceride"];
    $hdl_cholesterol = $_POST["hdl_cholesterol"];
    $ldl_cholesterol = $_POST["ldl_cholesterol"];
    $hemoglobin = $_POST["hemoglobin"];
    $urine_protein = $_POST["urine_protein"];
    $serum_creatinine = $_POST["serum_creatinine"];
    $ast = $_POST["ast"];
    $alt = $_POST["alt"];
    $gtp = $_POST["gtp"];
    $dental_caries = $_POST["dental_caries"];

    $path = 'C:\Program Files\R\R-4.3.1\bin\Rscript.exe';
    $condition = false;
    if ($condition) {
        $path = '"C:\Program Files\R\R-4.2.0\bin\Rscript"';
    } else {
        $path = '"C:\Program Files\R\R-4.3.1\bin\Rscript.exe"';
    }

    // 构建完整的命令字符串
    $str = $path.' .\smoker-svm.R'." $age"." $height"." $weight"." $waist"." $eyesight_left"." $eyesight_right"." $hearing_left"." $hearing_right"." $systolic"." $relaxation"." $fasting_blood_sugar"." $cholesterol_total"." $triglyceride"." $hdl_cholesterol"." $ldl_cholesterol"." $hemoglobin"." $urine_protein"." $serum_creatinine"." $ast"." $alt"." $gtp"." $dental_caries";

    exec($str, $output, $return_var);  

    $pattern = "/\[\d\]/" ;
    $replacement = "";
    $output[0] = preg_replace ($pattern , $replacement , $output[0]);

    $response = [
        "status" => "success",
        "message" => "R script executed successfully",
        "data" => $output[0],   
    ];
    echo json_encode($response);

} else {
    $response = [
        "status" => "error",
        "message" => "The script should be accessed using a POST request"
    ];
    echo json_encode($response);
}
