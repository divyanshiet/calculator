let result=document.getElementById("input");
let calculate=(Number)=>
{
    result.value+=Number;
}
let Result=()=>{
    try{
        result.value=eval(result.value)
        } 
        catch(err){
            alert("abc");
        }

}
function clr()
{
    result.value=""
}
function del()
{
    result.value=result.value.slice(0,-1);
}
