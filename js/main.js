//eruda.init();

$(".maxW").css("max-width","100%");
$(".maxH").css("max-height","100%");

function show(){
  let code = localStorage.getItem("display-text");
  $("#display-text").val(code);
}
show();

$("#output").on('click',function(){
  $("#display-div").html($("#display-text").val())
  $(this).toggleClass("fa-eye")
  $(this).toggleClass("fa-eye-slash")
  $("#display-div").toggleClass("d-none");
  $("#display-text").toggleClass("d-none");
})

function cmd(e,t){
  let textBox = $("#display-text")[0];
  let end = textBox.selectionStart;
  textBox.setSelectionRange(end,end);
  textBox.focus();
  document.execCommand('insertText',true,e)
  if(t){
    textBox.setSelectionRange(textBox.selectionStart-t,textBox.selectionStart-t)
  }
}

/*$("#display-text").on("contextmenu",function (e){
  e.preventDefault();
  let menu = $(".context-menu")[0];
  menu.style.top = e.offsetY+"px";
  menu.style.left = e.offsetX+"px";
})
*/
function saveCode(){
  localStorage.setItem("display-text",$("#display-text").val());
  
}

$("#display-text").on("input",saveCode);

$("#print").on('click',function(){
  html2canvas($("#display-div")[0])
  .then((canvas)=>{
    canvas.toBlob((blob)=>{
      let a = document.createElement("a");
      a.download = "image.jpg";
      a.href = URL.createObjectURL(blob);
      a.click();
      a.remove();
    })
  })
})