let countEl= document.getElementById('count-el')
let count=0

//FUNCTION FOR INCREMENT
function increment(){
    count=count+1
    countEl.innerText= count
    
}
let saveEl= document.getElementById('save-el')
//FUNCTION FOR SAVING
function save(){
    let countStr=count+' - '
    saveEl.textContent+=countStr
    count=0
    countEl.innerText=0


}


