//method = "sayHello"
method = "descr"
name = "Qwerty45"
params = [1,2,4]
$.ajax({
    type: "POST", 
    //url: "http://lab-27.ru/rest/rest.php",
    url: "http://lab-27.ru/rest/task.php",
    data: "method=" + method + "&a=" + params[0] + "&b=" + params[1] + "&c=" + params[2],
    timeout: 1000,
    success: function(result){
      // alert(result);
    },
    error: function(XMLRequest, textStatus, errorThrown){
        debugger
        alert("Беда");
    }
});