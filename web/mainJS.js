let rButtonValue = 0;
let previousButton = null;
function checkY(){
    document.querySelector('#y_value').addEventListener('keyup',function(){
        let reg = /[^(\-?(\d\.))]/;
        let c = parseFloat(this.value);
        if(this.value.search(reg)!==-1 || c<-5 || c>5){
            this.value = "";
        }
    })
}
function getX(){
    let rates = document.getElementsByName('x_value');
    let rate_value = null;
    for(let i=0; i<rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
        }
    }
    return rate_value;
}

function checkData(){
    let x = getX() != null;
    let y_check = parseFloat(document.getElementById("y_value").value.substring(0, 12).replace(',', '.'));
    let y = !isNaN(y_check) && y_check >= -5 && y_check <= 5;
    let r = rButtonValue!==0;
    //console.log(x,y,rButtonValue);
    return x && y && r;
}
function press(button){
    $(previousButton).css('background', '#ffffff');
    $(button).css('background', '#c94a4a');
    previousButton = button;
    rButtonValue = button.value;
    changeCanvas(rButtonValue);
}
function addRow(x,y,r,result,time,delta){
    let tbody = document.getElementById("results").getElementsByTagName("tbody")[0];
    let row = document.createElement("tr");

    let tdX = document.createElement("td");
    tdX.appendChild(document.createTextNode(x));

    let tdY = document.createElement("td");
    tdY.appendChild(document.createTextNode(y));

    let tdR = document.createElement("td");
    tdR.appendChild(document.createTextNode(r));

    let tdResult = document.createElement("td");
    tdResult.appendChild(document.createTextNode(result));

    let tdTime = document.createElement("td");
    tdTime.appendChild(document.createTextNode(time));

    let tdDelta = document.createElement("td");
    tdDelta.appendChild(document.createTextNode(delta));

    row.appendChild(tdX);
    row.appendChild(tdY);
    row.appendChild(tdR);
    row.appendChild(tdResult);
    row.appendChild(tdTime);
    row.appendChild(tdDelta);
    tbody.appendChild(row);
}
function getData(){
    let data = "x=";
    document.getElementsByName("x_value").forEach(x => {
        if (x.checked) {
            data += x.value
        }
    })
    data += "&y=" + parseFloat(document.getElementById("y_value").value.substring(0, 5).replace(',', '.'));
    data += "&r=" + rButtonValue;
    return data;

}
$('#form_send').on('submit',function(event){
    if(checkData()){
        let str = getData();
        event.preventDefault();
        submit(str);
    }else{
        alert(getData());
    }

});

function submit(str){
    $.ajax({
        url: '/WebLab2_war_exploded/filter',
        type: 'GET',
        data: str,
        dataType: 'json',
        success: function(data){
            addRow(data[0][0], data[0][1], data[0][2], data[0][3], data[0][4], data[0][5]);
            drawPoint(data[0][0], data[0][1],data[0][3]);
        },
        error: function(data){
            alert("error");
        }
    });
}