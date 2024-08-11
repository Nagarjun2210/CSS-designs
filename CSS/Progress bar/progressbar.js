const spinner_hor = document.getElementById("spinner-hor");
const spinner_vert = document.getElementById("spinner-vert");
var spinner_hor_pos = [200, 0];
var spinner_vert_pos = [485, -85];
var speed = 2;
var p_top = true;
var p_right = false;
var p_bottom = false;
var p_left = false;

function move(){ 
    setInterval(()=>{
        //top
        if(p_top === true && spinner_hor_pos[0] < 500){
            spinner_hor_pos[0] = spinner_hor_pos[0] + speed;
            spinner_hor.style.left = spinner_hor_pos[0] + 'px';
            console.log("top");
        }
        if(p_top === true && spinner_hor_pos[0] > 400){
            p_right = true;
            spinner_vert.style.display = "block";
        }
        if(p_top === true && spinner_hor_pos[0] >= 500){
            spinner_hor_pos[0] = 485;
            spinner_hor_pos[1] = 285;
            spinner_hor.style.display = "none";
            spinner_hor.style.left = spinner_hor_pos[0];
            spinner_hor.style.top = spinner_hor_pos[1];
            p_top = false;
        } 

        //right
        if(p_right === true && spinner_vert_pos[1] < 300){
            spinner_vert_pos[1] = spinner_vert_pos[1] + speed;
            spinner_vert.style.top = spinner_vert_pos[1] + 'px';
            console.log("right");
        }
        if(p_right === true && spinner_vert_pos[1] > 200){
            p_bottom = true;
            spinner_hor.style.display = "block";
        }
        if(p_right === true && spinner_vert_pos[1] >= 300){
            spinner_vert_pos[0] = 0;
            spinner_vert_pos[1] = 285;
            spinner_vert.style.display = "none";
            spinner_vert.style.left = spinner_vert_pos[0];
            spinner_vert.style.top = spinner_vert_pos[1];
            p_right = false;
        }

        //bottom
        if(p_bottom === true && spinner_hor_pos[0] > -100){
            spinner_hor_pos[0] = spinner_hor_pos[0] - speed;
            spinner_hor.style.left = spinner_hor_pos[0] + 'px';
            console.log("bottom");
        }
        if(p_bottom === true && spinner_hor_pos[0] < 0){
            spinner_vert.style.display = "block";
            p_left = true;
        }
        if(p_bottom === true && spinner_hor_pos[0] <= -100){
            spinner_hor_pos[0] = -85;
            spinner_hor_pos[1] = 0;
            spinner_hor.style.display = "none";
            spinner_hor.style.left = spinner_hor_pos[0];
            spinner_hor.style.top = spinner_hor_pos[1];
            p_bottom = false;
        } 

        //left
        if(p_left === true && spinner_vert_pos[1] > -100){
            spinner_vert_pos[1] = spinner_vert_pos[1] - speed;
            spinner_vert.style.top = spinner_vert_pos[1] + 'px';
            console.log("left");
        }
        if(p_left === true && spinner_vert_pos[1] < 0){
            p_top = true;
            spinner_hor.style.display = "block";
        }
        if(p_left === true && spinner_vert_pos[1] <= -100){
            spinner_vert_pos[0] = 485;
            spinner_vert_pos[1] = -85;
            spinner_vert.style.display = "none";
            spinner_vert.style.left = spinner_vert_pos[0];
            spinner_vert.style.top = spinner_vert_pos[1];
            p_left = false;
        }
    }, 10);
}
move();