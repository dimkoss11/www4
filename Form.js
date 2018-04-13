// for test:
method = "descr"
name = "Qwerty45"
params = [1,2,4]



let ar = [];

$( document ).ready(function() {
    $("button").click(function () {
    //alert(event.target.id); // Не работает
    var contentPanelId = jQuery(this).attr("id");
    //alert($(this).attr("id"));
    let evt = event.target.id;
    let el = $(evt).val;
        console.log("Clicked" + el);
        ar[0] = $('#i1').val()
        GetAllInputs();
        sendarray();
        })
    console.log( "ready!" );
});
function GetAllInputs() {
    // 
    ar = [];
    ar.push($('#i1').val());
    ar.push($('#i2').val());
    ar.push($('#i3').val());
}

function sendarray() {
    let promise = fetch('http://lab-27.ru/rest/task.php')
    .then(function(response) {
      //  alert(response.headers.get('Content-Type')); // application/json; charset=utf-8
        alert(response.status);
    
        return response.json();
       })
      .then(function(user) {
       // alert(user.name); 
      })
      .catch( alert );
}