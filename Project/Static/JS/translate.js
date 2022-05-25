let input=document.querySelector('input');
let textarea=document.querySelector('.target');
let btn=document.getElementById("btnsearch");
btn.addEventListener("click",()=>{
    let len=english.length;
    for(let i=0;i<len;i++){
        let regexp=new RegExp(english[i],"ig");
        textarea.value=textarea.value.replace(regexp,french[i]); 
    }
};
input.addEventListener('change',()=>{
    let files = input.files;
    let file= files[0];
    let reader=new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\n/);
        textarea.value=lines.join('\n');
    };
    reader.readAsText(file);    
});
function count(){
    let textarea=document.querySelector("textarea");
    let str=textarea.value;
    let arrstr=str.split(" ");
    let count=0;
    let len=arrstr.length;
    let input=document.getElementById("inputtext").value;
    for(let i=0;i<len;i++){
        if(arrstr[i].match(input) && arrstr[i].length==input.length){
            count=count+1;
        }
    }
    alert(count)
}



