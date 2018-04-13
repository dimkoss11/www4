<?php
  header('Access-Control-Allow-Origin: *'); 

  // example request: http://path/to/resource/Example?method=sayHello&name=World

  require_once "RestServer.php";

  $rest = new RestServer(Hello);
  $rest->handle();

  class Hello
  {
     public static function sayHello($name)
     {
        return "Hello, " . $name;
     }
    //function descr(float $a, float $b, float $c)
    public static function descr($a, $b, $c)
     {
         return (sqrt ($b) - (4 * $a * $c));
     }
     public static function getString(){
       
     }
    
  }

?>

