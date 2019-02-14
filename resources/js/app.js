document.addEventListener('DOMContentLoaded', ()=>{
    
    const btn = document.querySelector('#btn')
    btn.addEventListener('click',()=>{
        document.querySelector('#title').innerHTML = "Goodbye Laravel Mix"
    })
    
})