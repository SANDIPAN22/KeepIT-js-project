
var titles=[]
var msgs=[]


titles=JSON.parse(localStorage.getItem('titles'))

msgs=JSON.parse(localStorage.getItem('msgs'))

console.log(msgs.length)
var counter=msgs.length

msgs.forEach((element,index )=> {
    const pb = document.querySelector('.pb')
    const htmlBox= `
    <div class="accordion m-4" id= ${index}>
    <div class="btn-group d-flex shadow-lg flex-wrap" role="group" aria-label="Basic outlined example">
    <button type="button" class="btn btn-outline-danger" onclick='deleteBox(event)'>Delete</button>
    <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='updateBox(event)' >Update</button>
      <button type="button" class="btn btn-outline-success" onclick='doneBox(event)'>Done</button>
      </div>
        <div class="accordion-item-updated">
          <h2 class="accordion-header-updated" id="panelsStayOpen-heading${index}">
            <button class="accordion-button-updated" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${index}">
             ${titles[index]}
            </button>
          </h2>
          <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body-mini">
            ${element}
            </div>
          </div>
        </div>
  </div>
    
    
    
    
    `
    pb.insertAdjacentHTML('beforeend',htmlBox);
    
    
    
});

const newBox =()=>{
    
    const pb = document.querySelector('.pb')
    const htmlBox= `
    <div class="accordion m-4" id= ${counter}>
    
    
    <div class="btn-group d-flex shadow-lg flex-wrap" role="group" aria-label="Basic outlined example">
    <button type="button" class="btn btn-outline-danger" onclick='deleteBox(event)'>Delete</button>
    <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='updateBox(event)' >Update</button>
    
      
    </div>
        <div class="accordion-item-updated">
          <h2 class="accordion-header-updated" id="panelsStayOpen-heading${counter}">
            <button class="accordion-button-updated" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${counter}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${counter}">
             New Item 🆕
            </button>
          </h2>
          <div id="panelsStayOpen-collapse${counter}" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body-mini">
             Write more about your task !!
            </div>
          </div>
        </div>
  </div>
    
    
    
    
    `
    pb.insertAdjacentHTML('beforeend',htmlBox);
    counter++;
}

const deleteBox =(e)=>{
    
    const target=(e.target.parentElement.parentElement)

msgs.splice(Number(target.id),1)
titles.splice(Number(target.id),1)
window.localStorage.setItem('titles',JSON.stringify(titles))
window.localStorage.setItem('msgs',JSON.stringify(msgs))
    target.remove();
    
}

const doneBox=(e)=>{
    const target=(e.target)
    console.log(target)

    // target.parentElement.classList.add('disableMe')
    const undoBTN=`
    <button type="button" class="btn btn-dark" onclick='undoBox(event)'>UNDO</button>

    `
    target.parentElement.insertAdjacentHTML('afterbegin',undoBTN)
    target.parentElement.nextElementSibling.classList.add('disableMe')
    target.previousElementSibling.remove()
     target.remove()
 
}
const undoBox=(e)=>{
    const target=(e.target)
    console.log(target)
    const doneBTN=`
    <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='updateBox(event)' >Update</button>
    <button type="button" class="btn btn-outline-success" onclick='doneBox(event)'>Done</button>

    `
    target.parentElement.insertAdjacentHTML('beforeend',doneBTN)
    target.parentElement.nextElementSibling.classList.remove('disableMe')
    target.remove()
}

var boxTarget
const updateBox=(e)=>{
    boxTarget=e.target.parentElement
    const t=document.querySelector('#title-name');
    const m=document.querySelector('#message-text');

    t.value=boxTarget.nextElementSibling.firstElementChild.firstElementChild.innerHTML
    m.value=boxTarget.nextElementSibling.lastElementChild.firstElementChild.innerHTML
}

const setVal=()=>{
  
    const t=document.querySelector('#title-name');
    console.log(t.value)
    const m=document.querySelector('#message-text');
    console.log(m.value)
    
    boxTarget.nextElementSibling.firstElementChild.firstElementChild.innerHTML=t.value
    boxTarget.nextElementSibling.lastElementChild.firstElementChild.innerHTML=m.value
    titles.push(t.value)
    msgs.push(m.value)
    window.localStorage.setItem('titles',JSON.stringify(titles))
    window.localStorage.setItem('msgs',JSON.stringify(msgs))
    const doneBTN=`
    <button type="button" class="btn btn-outline-success" onclick='doneBox(event)'>Done</button>
    `
    boxTarget.insertAdjacentHTML('beforeend',doneBTN)

}
