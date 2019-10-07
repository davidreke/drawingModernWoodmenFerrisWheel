

function loadParts(){
    
    circle();
    spokes();
    stand ();
    console.log("parts loaded");
    scoreboardSides();
    scoreboardBody();
    scoreboardTop();
    field();

}


function circle(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
    console.log("circle called");
    draw.beginPath();
    draw.fillStyle = "black";
    draw.arc(242, 240, 141, 0, Math.PI * 2, true);
    draw.closePath();
    draw.stroke();
}

function spokes(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
    var points = [
        [285.5713962, 374.0989688],
        [324.8777206, 354.0713962],
        [356.0713962, 322.8777206],
        [376.0989688, 283.5713962],
        [383, 240],
        [376.0989688, 196.4286038],
        [356.0713962, 157.1222794],
        [324.8777206, 125.9286038],
        [285.5713962, 105.9010312],
        [242, 99],
        [198.4286038, 105.9010312],
        [159.1222794, 125.9286038],
        [127.9286038, 157.1222794],
        [107.9010312, 196.4286038],
        [101, 240],
        [107.9010312, 283.5713962],
        [127.9286038, 322.8777206],
        [159.1222794, 354.0713962],
        [198.4286038, 374.0989688],
        [242, 381]
    ];
    var i;
    
    for(i = 0; i < points.length; i++){
        draw.beginPath();
        draw.strokeStyle = "black";
        draw.moveTo(242, 240);
        draw.lineTo(points[i][0], points[i][1]);
        draw.stroke();

    }
    
} 

function stand(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
    draw.beginPath();
    draw.strokeStyle = "blue";
    draw.lineWidth = 2.5;
    draw.moveTo(242, 240);
    draw.lineTo(318,360);
    draw.moveTo(242, 240);
    draw.lineTo(150,374);
    draw.stroke();
}

function scoreboardSides (){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
    draw.beginPath();
    draw.strokeStyle = "red";
    draw.lineWidth = 6;
    draw.moveTo(532, 380);
    draw.lineTo(532, 200);
    draw.moveTo(703, 380);
    draw.lineTo(697, 200);
    draw.stroke();
}

function scoreboardBody (){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
    draw.beginPath();
    draw.strokeStyle = "brown";
    draw.lineWidth = 1;
    draw.moveTo(540, 380);
    draw.lineTo(540, 210);
    draw.lineTo(690, 210);
    draw.lineTo(694, 380);
    draw.lineTo(540, 380);
    draw.stroke();
    
}

function scoreboardTop(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
    console.log("top called");
    draw.beginPath();
    draw.stokestyle = "brown";
    draw.arc(615, 291, 110, 5.45, 4, true);
    draw.closePath();
    draw.stroke();
}

function field(){
    var canvas = document.getElementById("mycanvas");
    var draw = canvas.getContext("2d");
    console.log("field called");
    draw.beginPath();
    draw.strokeStyle = "yellowgreen";
    draw.lineWidth = 3;
    draw.moveTo(0, 457);
    draw.lineTo(800, 456);
    draw.stroke();
}



