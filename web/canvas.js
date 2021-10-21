let r_value;
function canvasInit(coeff){
    let canvas = document.getElementById("cns");
    canvas.addEventListener('mousedown', event => shoot(canvas, event));
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    //console.log(width,height);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 1.0;
    ctx.fillRect(0, 0, width, height);
    r_value = coeff;
    drawAxis(ctx,width,height,coeff);
    drawText(ctx,width,height);
}

function drawAxis(ctx,width,height,coeff){
    //rec
    ctx.beginPath();
    ctx.moveTo(65+(3-coeff)*30,height/2);
    ctx.lineTo(65+(3-coeff)*30, 65+(3-coeff)*30);
    ctx.lineTo(width/2, 65+(3-coeff)*30);
    ctx.lineTo(width/2, height/2);
    ctx.closePath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();

    //arc
    ctx.beginPath();
    ctx.moveTo(width/2,height/2);
    ctx.arc(width/2,height/2,coeff*30,Math.PI/2, Math.PI,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //triangle
    ctx.beginPath();
    ctx.moveTo(width/2,height/2+30*coeff);
    ctx.lineTo(width/2, height/2);
    ctx.lineTo(width/2+30*coeff/2, height/2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //Y
    ctx.beginPath();
    ctx.moveTo(width/2,0);
    ctx.lineTo(width/2, height);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.stroke();

    //X
    ctx.beginPath();
    ctx.moveTo(0,height/2);
    ctx.lineTo(width, height/2);
    ctx.closePath();
    ctx.stroke();

}

function drawText(ctx,width,height){
    ctx.font = "bold 7.5px Verdana";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.fillText("5",width/2+2.5,7.5);
    ctx.fillText("4",width/2+2.5,35);
    ctx.fillText("3",width/2+2.5,65);
    ctx.fillText("2",width/2+2.5,95);
    ctx.fillText("1",width/2+2.5,125);

    ctx.fillText("-1",width/2+2.5,185);
    ctx.fillText("-2",width/2+2.5,215);
    ctx.fillText("-3",width/2+2.5,245);
    ctx.fillText("-4",width/2+2.5,275);
    ctx.fillText("-5",width/2+2.5,305);

    ctx.fillText("0",width/2+2.5,height/2+10);

    ctx.fillText("-5",5,height/2+10);
    ctx.fillText("-4",35,height/2+10);
    ctx.fillText("-3",65,height/2+10);
    ctx.fillText("-2",95,height/2+10);
    ctx.fillText("-1",125,height/2+10);
    ctx.fillText("1",185,height/2+10);
    ctx.fillText("2",215,height/2+10);
    ctx.fillText("3",245,height/2+10);
    ctx.fillText("4",275,height/2+10);
    ctx.fillText("5",302.5,height/2+10);
}
function changeCanvas(value){
    let canvas = document.getElementById("cns");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    //console.log(width,height);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.globalAlpha = 1.0;
    ctx.fillRect(0, 0, width, height);
    r_value = value;
    drawAxis(ctx,width,height,value);
    drawText(ctx,width,height);
}

function shoot(canvas, event){
    if (rButtonValue!==0){
        let x = event.offsetX;
        let y = event.offsetY;
        let x_out = (x-155) / 30;
        x_out = x_out.toString().substring(0,5);
        let y_out = (155-y)/30;
        y_out = y_out.toString().substring(0,5);
        let str = "x=";
        str += x_out;
        str += "&y=";
        str += y_out;
        str += "&r=";
        str += r_value;
        event.preventDefault();
        submit(str);
    }else{
        alert("Choose R firstly");
    }

}

function drawPoint(x,y,result){
    let canvas = document.getElementById("cns");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    let x_draw = width/2 + x*30;
    let y_draw = height/2 - y*30;
    ctx.beginPath();
    ctx.arc(x_draw,y_draw,2.5,0, Math.PI*2);
    ctx.closePath();
    if (result===true){
        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";
    }else{
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
    }
    ctx.fill();
    ctx.stroke();
}