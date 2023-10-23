const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);

const btnSubmit=$('.login_btn button')
const inputSections=$$('.login_wrapper_main label input')
const spanSections=$$('.login_wrapper_main label span')

let input1='',input2=''
inputSections.forEach((inp,index) => {
    inp.addEventListener('input',(e)=>{
        if(e.target.value){
            spanSections[index].classList.add('typing')
            if(index==0){
                input1=e.target.value
            }
            if(index==1){
                input2=e.target.value
            }
            if(input1&&input2){
                btnSubmit.setAttribute('type','button')
            }
        }else{
            spanSections[index].classList.remove('typing')
            btnSubmit.setAttribute('type','submit')
        }
    })
});