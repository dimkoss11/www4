
let promise = new Promise((resolve, reject) => {

    // code here
    $.ajax({
        type: "POST", 
        url: "http://lab-27.ru/rest/rest.php",
        data: "method=" + method + "&name= " + name,
        timeout: 1000,
        success: function(result){
            resolve(result);
        },
        error: function(XMLRequest, textStatus, errorThrown){
            debugger
            reject(textStatus);
        }
    });


    promise
    .then(
      result => {
        // первая функция-обработчик - запустится при вызове resolve
        alert("Fulfilled: " + result); // result - аргумент resolve
      },
      error => {
        // вторая функция - запустится при вызове reject
        alert("Rejected: " + error); // error - аргумент reject
      }
    );