var ss=2;
var a1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var a2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var a3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var a4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
var com=[];
var p=[];
var ck;
function rand(){
  return Math.floor((Math.random()*4)+1);
}

function grey(a){
if(a==1){
  a1.play();
  var c="green";}
  else if(a==2){
  var c="red";
  a2.play();}
  else if(a==3){
  var c="orange";
    a3.play();}
  else if(a==4){
  var c="yellow";
    a4.play();}
  
  a="#b"+a;   $(a).css("background","rgb(200,200,200)");
  $(a).css("border-width","2px");
  $(a).css("border-style","solid");
  $(a).css("border-color","grey");
 var x=setTimeout(function(){
  $(a).css("background",c);
  $(a).css("border-style","none");
                  },800);  
}
$("#b1").on("click", function(){
  grey("1");
     p.push(1);
ck=check();
if(ck==0){
  if(ss%2==0){
  console.log("printing lose");
    if(ss%2==0){
     alert("The correct order is:");       
       for(var i=0;i<com.length;i++){
    var z=setTimeout(function(){
      if(com[i]==1){
          grey(1);
        //console.log("in comp grey 1");
      //  break;
      }
  else if(com[i]==2){
  grey(2);
    //console.log("in comp grey 2");
    //break;
  }
  else if(com[i]==3){
  grey(3);
    //console.log("in comp grey 3");
  //  break;
  }
  else if(com[i]==4){
  grey(4);
    //console.log("in comp grey 4");
    //break;
  }},100);}
    }
    else
  alert("u lose the game");}
}
if(p.length==com.length)
  comp();
                               });
$("#b2").on("click", function(){
    grey("2");
           p.push(2);
                             ck=check();
if(ck==0){
  console.log("printing lose");
  if(ss%2==0){
     alert("The correct order is:");       
       for(var i=0;i<com.length;i++){
    var z=setTimeout(function(){
      if(com[i]==1){
  grey(1);
      //  break;
      }
  else if(com[i]==2){
  grey(2);
    //break;
  }
  else if(com[i]==3){
  grey(3);
  //  break;
  }
  else if(com[i]==4){
  grey(4);
    //break;
  }},1500);}
    }
  else
  alert("u lose the game");
}
  if(p.length==com.length)
comp();
});
$("#b3").on("click", function(){
    grey("3");
p.push(3);
                               ck=check();
if(ck==0){
  console.log("printing lose");
  if(ss%2==0){
     alert("The correct order is:");       
       for(var i=0;i<com.length;i++){
    var z=setTimeout(function(){
      if(com[i]==1){
  grey(1);
      //  break;
      }
  else if(com[i]==2){
  grey(2);
    //break;
  }
  else if(com[i]==3){
  grey(3);
  //  break;
  } 
  else if(com[i]==4){
  grey(4);
    //break; 
  }}  ,1000)};
    }
  else
  alert("u lose the game");
}
if(p.length==com.length)
  comp();
});
$("#b4").on("click", function(){
  grey("4");
p.push(4);
ck=check();
if(ck==0){
  console.log("printing lose");
  if(ss%2==0){
     alert("The correct order is:");       
       for(var i=0;i<com.length;i++){
    var z=setTimeout(function(){
      if(com[i]==1){
  grey(1);
      //  break;
      }
  else if(com[i]==2){
  grey(2);
    //break;
  }
  else if(com[i]==3){
  grey(3);
  //  break;
  }
  else if(com[i]==4){
  grey(4);
    //break;
  }},500);}
    }
 else 
   alert("u lose the game");
}
if(p.length==com.length)
comp();
});
$("#start").on("click", function(){
  var p=rand();
  grey(p);
  com.push(p);
  console.log("start"+p);
});
function comp()
{
  $("#count").html("Score:<br>"+com.length);
  if(com.length>=20){
    alert("You won the game");
    location.reload(true);
    return;
  }
  console.log("came to comp");
  p=[];
  console.log("com="+com);  
  for(var i=0;i<com.length;i++){
    //var z=setTimeout(function(){
      if(com[i]==1){
  grey(1);
        console.log("in comp grey 1");
      }
  else if(com[i]==2){
  grey(2);
    console.log("in comp grey 2");
    //break;
  }
  else if(com[i]==3){
  grey(3);
    console.log("in comp grey 3");
  //  break;
  }
  else if(com[i]==4){
  grey(4);
    console.log("in comp grey 4");
    //break;
  }//},1000);
  }
  var m=setTimeout(function(){    
  var y=rand();
  grey(y);
  com.push(y);
  console.log("Comp pushed:"+y+" com="+com);
    },1000);
}
function check(){
console.log("came to check");
  console.log("in check com="+com+" p="+p);
  flag=1;
  for(i=0;i<p.length;i++){
  if(com[i]!=p[i]){
    flag=0;
    break;
  }
}
  console.log("check="+flag);
  console.log("check exit");  
return flag;}
function strict(){
console.log("came strict");
  ss+=1;
  if(ss%2==1)
    $("#strict").html("Turn Strict mode Off");
  else
    $("#strict").html("Turn Strict mode On");
}

$("#reset").on("click",function(){
location.reload(true);  
});