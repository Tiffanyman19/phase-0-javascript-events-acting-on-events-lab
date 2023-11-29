// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
//dodger.style.bottom = "0px";
//dodger.style.left = "0px";
function moveDodgerLeft()
{
    const leftNumbers = dodger.style.left.replace("px", "");
    const leftNum = parseInt(leftNumbers, 10);
    //console.log("leftNum = " + leftNum);

    if (leftNum > 0)
    {
        dodger.style.left = (leftNum - 1) + "px";
    }
    //else
    //{
        //console.error("cannot move left already as far left as can be!");
        //dodger.style.left = "0px";
    //}
}

function moveDodgerRight()
{
    const leftNumbers = dodger.style.left.replace("px", "");
    const leftNum = parseInt(leftNumbers, 10);
    const dwidthstr = dodger.offsetWidth;
    const dwidthnum = parseInt(dwidthstr, 10);
    //console.log("dwidthstr = " + dwidthstr);
    //console.log("dwidthnum = " + dwidthnum);
    //console.log("leftNum = " + leftNum);
    //console.log("leftNum + dwidthnum = " + (leftNum + dwidthnum));
    //console.log("400 - dwidthnum = 360");
    //NOTE: element.style.width does not work instead use offsetWidth


    if (leftNum + dwidthnum == 400 || leftNum + dwidthnum > 400)
    {
        console.error("cannot move right already as far right as can be!");
        dodger.style.left = (400 - dwidthnum) + "px";
    }
    else dodger.style.left = (leftNum + 1) + "px";
}

document.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key === "ArrowLeft")
    {
        moveDodgerLeft();
    }
    else if (event.key === "ArrowRight")
    {
        moveDodgerRight();
    }
    else
    {
        console.log("other key pressed! Did nothing!");
        console.log("event.key = " + event.key);
    }
});