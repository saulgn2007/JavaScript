function numero(){
    var num;
    num=Math.random()*3;
    console.log("Entro en la funcion" + num);
    if (num<1){
        window.location='http://www.outlook.com';
    }else if(num<2){
        window.location="https://www.gmail.com/";
    }else 
        window.location="https://www.yahoo.com/";
}