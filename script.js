
menu.onclick=function getMenu(){
  let x=document.getElementsByClassName('myMenu')[0];


  if(x.className ==='myMenu'){
    x.className+=' responsive';
  }else{
    x.className='myMenu';
  }
};