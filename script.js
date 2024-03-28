const tall=document.getElementById("tall")
const ans=document.getElementById("ans")
const btn=document.getElementById("btn")
const data=document.getElementById("data")
const limit=document.getElementById("limit")
const txt=document.querySelectorAll(".check")

if (localStorage.length>0) {
    data.innerHTML="old val <br>"+localStorage.getItem("old")+"<br>"
}



btn.addEventListener("click", () => {
  data.innerHTML=""
  txt.forEach((item) => {
    if (item.checked) {
      let val=calc(item.value)
      data.innerHTML+=" <hr> your p ="+val.r+"kg"+"<br> the limit p"+(val.m)+"kg <hr>"
      localStorage.setItem("old",val.r)
    }
  })
  data.innerHTML+="<br>"+"old val <br>"+localStorage.getItem("old")
})


function calc(txt) {
  let bar=Math.round(((+tall.value-100 + +ans.value/10)*0.9).toFixed(2))
  let obj={
    moyen:{r:bar,m:bar*1.1},
    minc:{r:bar*0.9,m:bar},
    larg:{r:bar*1.1,m:"infini"}
  }
  return obj[txt]
}





