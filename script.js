function initilizer(){

    $.ajax({
        url:"https://techkaro-test.herokuapp.com/api/v1/getdata",
        success: function (data) {
            console.log(data);
            
            document.querySelector(".card-title").innerHTML =data.info.heading;
            document.querySelector(".card-text").innerHTML =data.info.description;
            document.querySelector(".card2").innerHTML =data.sale.heading;
            document.querySelector(".card3").innerHTML =data.sale.description;




           
            },
            
        error: function (err) {
            alert("Try Again!!!");
            
        }


    });

}