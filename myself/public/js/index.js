//��Ϊ���۽��밴ť�����ǽ���ul����Ҫ��֤ul��ʾ
//��Ϊ���۴Ӱ�ť�������Ǵ�ul������Ҫ�ر�ul
//����Ϊ��ť��ul���ǰ�����һ��div�ڵ�
//���ԣ�Ӧ�ð���������Ƴ��¼����ڹ�ͬ�ĸ�Ԫ��div��
//1. ���Ҵ����¼�Ԫ��:
$("li.dropdown")
//2. ���¼�������
//��������divʱ
    .mouseover(function(){
      //3. ����Ҫ�޸ĵ�Ԫ��
      $(".dropdown-menu")
        //4. �޸�Ԫ��
          .css("display","block")
      //dropdown-menu.show();
    })
//������Ƴ�divʱ
    .mouseout(function(){
      //3. ����Ҫ�޸ĵ�Ԫ��
      $(".dropdown-menu").hide();
      //4. �޸�Ԫ��
      //  .css("height",0)
    });
var i=0;
var LIWIDTH=1920;
var DURATION=500;
var LICOUNT=5;
var ulImgs=document.getElementById("ul-imgs");
var ulIdxs=document.getElementById("ul-idxs");
var lis=ulIdxs.children;
function moveTo(to){
  if(to==undefined){
    to=i+1;
  }
  if(i==0){
    if(to>i){
      ulImgs.className="transition";
    }else{
      ulImgs.className="";
      ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
      setTimeout(function(){
        moveTo(LICOUNT-1);
      },100);
      return;
    }
  }
  i=to;
  ulImgs.style.marginLeft=-i*LIWIDTH+"px";
  for(var li of lis){
    li.className=""
  }
  console.log(i);
  if(i==LICOUNT){
    i=0;
    setTimeout(function(){
      ulImgs.className="";
      ulImgs.style.marginLeft=0;
    },DURATION)
  }
  lis[i].className="active";
}
var btnLeft=document.getElementById("btn-left");
var btnRight=document.getElementById("btn-right");
var canClick=true;
btnRight.onclick=function(){
  move(1)
}
function move(n){
  if(canClick){
    console.log(i+n);
    moveTo(i+n);
    canClick=false;
    setTimeout(function(){
      canClick=true;
    },DURATION+100);
  }
}
btnLeft.onclick=function(){
  move(-1);
}
var interval=3000;
var timer=setInterval(function(){
  moveTo()
},3000);
var banner=document.getElementById("banner");
banner.onmouseover=function(){
  clearInterval(timer);
}
banner.onmouseout=function(){
  timer=setInterval(function(){
    moveTo()
  },2000);
}
var ulIdxs=document.getElementById("ul-idxs");
var canClick=true;
ulIdxs.onclick=function(e){
  if(canClick){
    var li=e.target;
    if(li.nodeName=="LI"){
      if(li.className!=="active"){
        for(var i=0;i<lis.length;i++){
          if(lis[i]==li){
            break;
          }
        }
        moveTo(i);
        setTimeout(function(){
          canClick=true;
        },DURATION);
      }
    }
  }
}
