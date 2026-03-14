function previewImage(){

const file=document.getElementById("imageUpload").files[0]
const preview=document.getElementById("preview")

if(!file){
alert("Upload image first")
return
}

preview.src=URL.createObjectURL(file)
preview.style.display="block"

}
function previewImage(){

const file=document.getElementById("imageUpload").files[0]
const preview=document.getElementById("preview")

preview.src=URL.createObjectURL(file)
preview.style.display="block"

}

function predictDisease(){

let disease="Early Blight"
let confidence="92%"

localStorage.setItem("disease",disease)
localStorage.setItem("confidence",confidence)

window.location.href="result.html"

}

function predictDisease(){

let disease="Early Blight"
let confidence="92%"
let date=new Date().toLocaleDateString()

localStorage.setItem("disease",disease)
localStorage.setItem("confidence",confidence)

let history=JSON.parse(localStorage.getItem("history"))||[]

history.push({
disease:disease,
confidence:confidence,
date:date
})

localStorage.setItem("history",JSON.stringify(history))

window.location.href="result.html"

}

function loadResult(){

let disease=localStorage.getItem("disease")
let confidence=localStorage.getItem("confidence")

document.getElementById("prediction").innerHTML=
`<b>Disease:</b> ${disease}<br>
<b>Confidence:</b> ${confidence}`

}

function loadIPM(){

let disease=localStorage.getItem("disease")

let advice=""

if(disease==="Early Blight"){

advice=`
<b>Cultural Control</b><br>
Remove infected leaves and improve airflow.<br><br>

<b>Biological Control</b><br>
Apply Trichoderma biofungicide.<br><br>

<b>Chemical Control</b><br>
Mancozeb fungicide spray recommended.
`

}

document.getElementById("ipmAdvice").innerHTML=advice

}

function loadHistory(){

let history=JSON.parse(localStorage.getItem("history"))||[]

let table=document.getElementById("historyTable")

history.forEach(item=>{

let row=`
<tr>
<td>${item.disease}</td>
<td>${item.confidence}</td>
<td>${item.date}</td>
</tr>
`

table.innerHTML+=row

})

}