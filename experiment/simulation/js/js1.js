
    function exmp1(){
        document.getElementById('exmpres').style.visibility= "visible";
        
        document.getElementById('resexmp1').innerHTML="Reason 1";
        document.getElementById('resexmp1.1').innerHTML="Reason 2";
        document.getElementById('exmpres1.1').style.visibility= "visible"
        document.getElementById('res2exp').style.visibility= "visible"
        document.getElementById('c4li').src='images/c4li.png';
        
    }
    function exmp2(){
        document.getElementById('exmpres2').style.visibility= "visible";
        document.getElementById('c4ques').style.display= "";
        document.getElementById('abh4').innerHTML="Reason 1";
        document.getElementById('abch4').innerHTML="Reason 2";
        document.getElementById('exmpres2.1').style.visibility= "visible";
        document.getElementById('res3exp').style.visibility= "visible";
        document.getElementById('c4ld').src='images/c4ld.png';
    }
    function c5ld(){
       document.getElementById('c5ld').innerHTML='CORRECT!<br> Reason:If <i>S</i>={0, <i>x, y</i>}, then 1.0 + 0.<i>x</i> + 0.<i>y</i> = 0';
       document.getElementById('c5li').innerHTML='';
   }
   function c5li(){
       document.getElementById('c5li').innerHTML='INCORRECT!<br> Reason:If <i>S</i>={0, <i>x, y</i>}, then 1.0 + 0.<i>x</i> + 0.<i>y</i> = 0';
       document.getElementById('c5ld').innerHTML='';
   }
   function c1ld(){
       document.getElementById('c1ld').innerHTML='CORRECT!<br> Reason:<i>S</i> is LINEARLY INDEPENDENT, by definition.';
       document.getElementById('c1li').innerHTML='';
   }
   function c1li(){
       document.getElementById('c1li').innerHTML='INCORRECT!<br> Reason:<i>S</i> is LINEARLY INDEPENDENT, by definition.';
       document.getElementById('c1ld').innerHTML='';
   }
   function c3ld(){
       document.getElementById('c3ld').innerHTML='INCORRECT!';
       document.getElementById('c3li').innerHTML='';
       document.getElementById('reason').innerHTML="Reason :";
        document.getElementById('result11').style.visibility= "visible"
        document.getElementById('c2li').src='images/c2li.png';
   }
   function c3li(){
       document.getElementById('c3li').innerHTML='CORRECT!';
       document.getElementById('c3ld').innerHTML='';
        document.getElementById('reason').innerHTML="Reason :";
        document.getElementById('result11').style.visibility= "visible"
        document.getElementById('c2li').src='images/c2li.png';
   }
    function c3ii_ld(){
       document.getElementById('c3ii_li').innerHTML='CORRECT!';
       document.getElementById('c3ii_ld').innerHTML='';
       document.getElementById('reson2').innerHTML="Reason:";
        document.getElementById('result21').style.visibility= "visible";
        document.getElementById('c2ld').src='images/c2ld.png';
   }
   function c3ii_li(){
       document.getElementById('c3ii_ld').innerHTML='INCORRECT!';
       document.getElementById('c3ii_li').innerHTML='';
       document.getElementById('reson2').innerHTML="Reason:";
        document.getElementById('result21').style.visibility= "visible";
        document.getElementById('c2ld').src='images/c2ld.png';
   }
    function case4i_ld(){
       document.getElementById('case4i_ld').innerHTML='CORRECT!';
       document.getElementById('case4i_li').innerHTML='';
         document.getElementById('c4ldimg').src='images/cs3ld.png';
        
   }
   function case4i_li(){
       document.getElementById('case4i_li').innerHTML='INCORRECT!';
       document.getElementById('case4i_ld').innerHTML='';
       document.getElementById('c4ldimg').src='images/cs3ld.png';
   }
    function case4ii_ld(){
       document.getElementById('case4ii_ld').innerHTML='INCORRECT!';
       document.getElementById('case4ii_li').innerHTML='';
        document.getElementById('c4liimg').src='images/cs3li.png';
   }
   function case4ii_li(){
       document.getElementById('case4ii_li').innerHTML='CORRECT!';
       document.getElementById('case4ii_ld').innerHTML='';
        document.getElementById('c4liimg').src='images/cs3li.png';
   }


//******************************************************************************************** */

 let canvas = document.getElementById("vectorCanvas");
    let ctx = canvas.getContext("2d");
    const maxInput = 9; // Maximum allowed input value

    function checkDependence() {
        let vec1 = document.getElementById("vector1").value.trim();
        let vec2 = document.getElementById("vector2").value.trim();

        if (!validateInput(vec1) || !validateInput(vec2)) {
            alert("Please enter valid numeric values within the range [-9, 9] for both vectors.");
            return;
        }

        let vec1Arr = vec1.split(",").map(Number);
        let vec2Arr = vec2.split(",").map(Number);

        let x1 = vec1Arr[0], y1 = vec1Arr[1];
        let x2 = vec2Arr[0], y2 = vec2Arr[1];

        let resultText = "", resultText2 = "", resultText3 = "";

        if ((x1 === 0 && y1 === 0) || (x2 === 0 && y2 === 0)) {
            resultText = "Linearly Dependent (Zero Vector Present)";
            resultText2 = "<i>S</i> is LINEARLY DEPENDENT (Zero Vector Present)";
        } 
        else if (x1 * y2 === x2 * y1) {
            reason = "Reason";
            resultText = "Linearly Dependent";
            resultText2 = "<i>S</i> is LINEARLY DEPENDENT";
            resultText3 = `<i>b</i> ≡ (${x2},${y2}) ∈ <i>L</i>({(${x1},${y1})})`;
            
        } else {
            reason = "Reason";
            resultText = "Linearly Independent";
            resultText2 ="<i>S</i> is LINEARLY INDEPENDENT";
            resultText3 = `<i>b</i> ≡ (${x2},${y2}) ∉ <i>L</i>({(${x1},${y1})})`;
           
        }

        document.getElementById("reason1").innerText = reason;
        document.getElementById("resultd").innerText = resultText;
        document.getElementById("exmp3res").innerHTML = resultText2;
        document.getElementById("exmpres3.1").innerHTML = resultText3;

        drawVectors(x1, y1, x2, y2);
    }

    function validateInput(input) {
        let values = input.split(",");
        if (values.length !== 2) return false;
        
        for (let val of values) {
            let num = Number(val.trim());
            if (isNaN(num) || num < -maxInput || num > maxInput) return false;
        }
        return true;
    }

    function drawVectors(x1, y1, x2, y2) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let scale = (canvas.width / 1.6) / maxInput;

        let centerX = canvas.width * 0.3; 
        let centerY = canvas.height * 0.7;

        drawGrid(centerX, centerY, scale);

        function drawInfiniteLine(x, y, color) {
            if (x === 0 && y === 0) return;
            let t = 10;
            let startX = centerX - x * scale * t;
            let startY = centerY + y * scale * t;
            let endX = centerX + x * scale * t;
            let endY = centerY - y * scale * t;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.stroke();
        }

        function drawPoint(x, y, color) {
            let screenX = centerX + x * scale;
            let screenY = centerY - y * scale;

            ctx.beginPath();
            ctx.arc(screenX, screenY, 5, 0, 2 * Math.PI);
            ctx.fillStyle = color;
            ctx.fill();

            ctx.font = "14px Arial";
            ctx.fillStyle = "black";
            ctx.fillText(`(${x},${y})`, screenX + 5, screenY - 5);
        }

        drawInfiniteLine(x1, y1, "red");
        drawInfiniteLine(x2, y2, "blue");

        drawPoint(x1, y1, "red");
        drawPoint(x2, y2, "blue");
    }

    function drawGrid(centerX, centerY, scale) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "#ddd";
        ctx.font = "12px Arial";
        ctx.fillStyle = "black";

        for (let i = -maxInput; i <= maxInput; i++) {
            let xPos = centerX + i * scale;
            let yPos = centerY - i * scale;

            ctx.beginPath();
            ctx.moveTo(xPos, 0);
            ctx.lineTo(xPos, ctx.canvas.height);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(0, yPos);
            ctx.lineTo(ctx.canvas.width, yPos);
            ctx.stroke();

            if (i !== 0) {
                ctx.fillText(i, xPos - 5, centerY + 15);
                ctx.fillText(i, centerX - 15, yPos + 5);
            }
        }

        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, ctx.canvas.height);
        ctx.moveTo(0, centerY);
        ctx.lineTo(ctx.canvas.width, centerY);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    window.onload = function () {
        let centerX = canvas.width * 0.3;
        let centerY = canvas.height * 0.7;
        let scale = (canvas.width / 1.6) / maxInput;
        drawGrid(centerX, centerY, scale);
    };
