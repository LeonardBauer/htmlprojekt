<style>
    
    .body{
        background: linear-gradient(green 50%,red 50%)
    }
    .absolute{
        position: fixed;
    }
    .invisible{
        visibility: hidden;
    }
    .radial-selector{
        padding:0px;
        margin:0px;
        width:200px;
        height:200px;
        border-radius:100% 0 0 0;
        background:radial-gradient(circle at 100% 100%,transparent 35%,rgba(120,120,120,50%) 0%);
        transform-origin:bottom right;
        transform:rotate(45deg);
        backdrop-filter: blur(3px);
    }
    .radial-menu{
        padding:0px;
        margin:0px;
        width:400px;
        height:400px;
        border-radius:100%;
        background:radial-gradient(circle at 50% 50%,transparent 35%,rgba(120,120,120,50%) 0%);
        backdrop-filter: blur(3px);
        z-index: 100000;
        
    }
    .radial-option{
        display:flex;
        justify-content:center;
        align-items:center;
        padding:0px;
        margin:0px;
        width:200px;
        height:200px;
        border-radius:100% 0 0 0;

        transform-origin:bottom right;

    }
    .radial-option > div {
        display:flex;
        justify-content:center;
        align-items:center;
        font-size: 40px;
        color:var(--text);

    }
    .r90>div{
        transform:rotate(-45deg);
    }
    .r180>div{
        transform:rotate(-135deg);
    }
    .r270>div{
        transform:rotate(-225deg);
    }
    .r0>div{
        transform:rotate(-315deg);
    }
    .active-rad{
        padding:0px;
        margin:0px;
        width:200px;
        height:200px;
        border-radius:100% 0 0 0;
        background:radial-gradient(circle at 100% 100%,transparent 35%,var(--primary) 0%);
        transform-origin:bottom right;
        
    }
    .lineselwrapper{
        height:400px;
        width:400px;
    }
    .lineselwrapper > svg{
        border-radius:100%;
        width:100%;
        height:100%;
    }
    .info{
        position:absolute;
        background:rgba(255,255,255,40%);;
        border-radius:3px;
        padding:1px;
        font-size:38px;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        color:#F5F5F5;

        backdrop-filter: blur(3px);

    }
</style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

<div id="radial-menu" class="radial-menu absolute invisible">
    <div id="radial-selector" class="radial-selector absolute">
    </div>
    <div class="radial-option absolute 90 r90 home active-rad" style="transform:rotate(45deg)">
        <div>
            <i class="fa-solid fa-house absolute"></i>
        </div>
    </div>
    <div class="radial-option absolute 180 r180 projects" style="transform:rotate(135deg)">
        <div>
            <i class="fa-solid fa-diagram-project"></i>
        </div>
    </div>
    <div class="radial-option absolute 270 r270 contact" style="transform:rotate(225deg)">
        <div>
            <i class="fa-solid fa-address-book"></i>
        </div>
    </div>
    <div class="radial-option absolute 0 r0 aboutme" style="transform:rotate(315deg)">
        <div>
            <i class="fa-solid fa-file-lines"></i>
        </div>
    </div>

    <div class="lineselwrapper z-100">
        <svg class=" z-100 ">
            <line x1="200" y1="200" x2="0" y2="0" stroke="grey" id="line" class=""/>
        </svg>
    </div>
    <div class="info" id="info">
        home
    </div>

</div>
<script >
    import lodash from "lodash";
    let isDown = false;
    let cX,cY;
    let len;
    import { browser } from '$app/environment';
    if(browser){ onLoad()}
    function onLoad(){
    document.addEventListener("mousedown",(e)=>
    {
        if(e.button==2){
            e.preventDefault();
            cX = e.clientX;
            cY = e.clientY;
            isDown = true;
            let elem = document.getElementById("radial-menu")
            elem.classList.remove("invisible");
            elem.style.top = cY- elem.offsetHeight/2 + "px";
            elem.style.left = cX- elem.offsetWidth/2 + "px";
            let line = document.getElementById("line");



        }
    })
    document.addEventListener("mousemove",(e)=>
    {
        if(isDown){
            let line = document.getElementById("line")
            let elem = document.getElementById("radial-menu")
            let sel = document.getElementById("radial-selector")
            let x = e.clientX- cX + elem.offsetWidth/2;
            let y = e.clientY - cY + elem.offsetHeight/2;
            let rot = (Math.atan2(y-200,x-200)*180)/Math.PI ;
            len = Math.hypot(y-200,x-200);
            sel.style.transform = `rotate(${rot+135}deg)`;
            let opt = document.getElementsByClassName("radial-option");
            elem.classList.add("hover:cursor-none");

            let displayInfo = document.getElementById("info");

            for (let o of opt){
                let lowerBound = parseInt(o.classList[2]) - 45;
                let upperBound = parseInt(o.classList[2]) - 45 +90;
                if(lowerBound<0)lowerBound += 360;
                console.log(lowerBound+" "+upperBound)

                if (lodash.inRange(rot+180,lowerBound,upperBound)&&lowerBound<upperBound) {
                    o.classList.add("active-rad");
                    displayInfo.innerHTML = o.classList[4];
                    //console.log(o.classList)
                }
                else if((lodash.inRange(rot+180,lowerBound,361)||
                    lodash.inRange(rot+180,0,upperBound))&&lowerBound>upperBound)
                {
                    o.classList.add("active-rad");
                    displayInfo.innerHTML = o.classList[4];

                }
                else {
                    o.classList.remove("active-rad");
                    //console.log(o.classList)
                }
            }
            line.setAttribute("x2",x+"")  ;
            line.setAttribute("y2",y+"")  ;

        }
    })
    document.addEventListener("mouseup",(e)=>
    {
        if(e.button==2){
            let displayInfo = document.getElementById("info");
            e.preventDefault();
            isDown=false;
            let elem = document.getElementById("radial-menu");
            elem.classList.add("invisible");
            if(len>50&&len<400)
                window.location.href = "/"+(displayInfo.innerHTML==="home"?"":displayInfo.innerHTML);
            elem.classList.remove("hover:cursor-none");
            
            
            
        }
    })
    window.addEventListener("contextmenu", e => {
        e.preventDefault()

    });

    }
</script>