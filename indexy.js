console.log("this is the js file of my website");
//constructor
function book(author,name,type){
    this.author=author;
    this.name=name;
    this.type=type;

}
// display constructor
// this is the file of constructor event of
function Display(){}
Display.prototype.add=function(booook)//make the function for add  display
{
    console.log("this is for runnig");
    tablebody=document.getElementById('tablebody');
    let uistring=`<tr>
            <td>${booook.name}</td>
            <td>${booook.author}</td>
            <td>${booook.type}</td>
           </tr>`;
tablebody.innerHTML+=uistring;
}
Display.prototype.clear=function(){

    let libraryForm=document.getElementById("libraryForm");   
     libraryForm.reset();
    }
    //we will make a function for show  function have two parameters one show success or danger and others is what you want
    Display.prototype.show=function(type,dmessage){

       let message=document.getElementById('message')
       message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
       <strong>message</strong> ${dmessage}
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
     </div>`;
     setTimeout(function(){
         message.innerHTML=''
     },2000);
    }
//this is for validate the function 
Display.prototype.validate=function(booook){

    if(booook.name.length<2 || booook.author.length<2){
        return false
    }
    else {
        return true
    }
}
// add submit event listener to libraryForm 
//dcoument.getelementid().addeventlistener("submit",function name whatever function you have put)
let libraryForm=document.getElementById("libraryForm");
libraryForm.addEventListener('submit',libraryFormsubmit);
function libraryFormsubmit(i){
i.preventDefault();//this function allows to prevent the default 
    console.log("welcome to your");
   // document.getElementById("libraryForm").innerHTML = Date();
   let name=document.getElementById("bookName").value;
   let author=document.getElementById("bookauthor").value;
   let type;

 let mechnical =document.getElementById("mechnical");
   let programming=document.getElementById("programming");
   let electrical=document.getElementById("electrical");
   if(mechnical.checked){
       type=mechnical.value;
   }
  else if(programming.checked){
       type=programming.value;
   }
  else if(electrical.checked){
       type=electrical.value;
   }
   let booook=new book(name,author,type);

   console.log(booook);
   let display=new Display();
   if(display.validate(booook)){
   display.add(booook);
   display.clear();
   display.show('success',"your book is show")}
   else{
   display.show('danger',"your book is not available please put the best book")}

}

