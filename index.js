var canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
// 튕기는 박스
var x = canvas.width/2;
var y = canvas.height-60;
var dx = -1;
var dy = -1;

var rightPressed = false;
var leftPressed = false;

function keyDownHandler(e){
    if(e.keyCode == 39){
        rightPressed = true;
    }else if(e.keyCode == 37){
        leftPressed = true;
    }
}

function keyUpHandler(e){
    if(e.keyCode == 39){
        rightPressed = false;
    }else if(e.keyCode == 37){
        leftPressed = false;
    }
}

// 막대기
var paddleH = 10;
var paddleW = 75;
var paddleX = (canvas.width-paddleW)/2;
// 막대기 그리기 구현
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height-paddleH,paddleW,paddleH);
    ctx.fillStyle='black';
    ctx.fill();
    ctx.closePath();
}

// 박스 그리기 구현
function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.rect(x,y,10,10);
    ctx.fillStyle='green';
    ctx.fill();
    x += dx;
    y += dy;
    if(y + dy < 0){
        dy = -dy;
    } else if(y + dy > canvas.height -10){
        if(x>paddleX && x<paddleX+paddleW){
            dy=-dy;
        }else{
        alert('GAME OVER');
        document.location.reload();
        }   
    }
    if (x + dx < 0 || x + dx >canvas.width - 10){
        dx = -dx;
    }
    if(rightPressed && paddleX < canvas.width - paddleW){
        paddleX += 7;
    } else if (leftPressed && paddleX > 0){
        paddleX -= 7;
    }
    
    drawPaddle();
    ctx.closePath();    
}

// 매초 함수 실행

document.addEventListener('keydown',keyDownHandler,false);
document.addEventListener('keyup',keyUpHandler,false);
setInterval(draw,10);