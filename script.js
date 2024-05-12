const main_base=document.querySelectorAll(".question");


main_base.forEach((answer)=>{
    const btns=answer.querySelector('.button');
    // console.log(btns);

    btns.addEventListener('click', ()=>{
        // console.log(answer);
        main_base.forEach((peram)=>{
            if(peram !== answer){
                peram.classList.remove("config")
            }
        })
        answer.classList.toggle('config')
    })
});