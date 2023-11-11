const pass = document.getElementById('userpass');
const passconf = document.getElementById('passconf');
const msg = document.querySelector('.error-text')

const validate = () => {
    if(pass.value !== passconf.value){
        pass.classList.add('error');
        passconf.classList.add('error');
        msg.textContent='*Passwords do not match';
    }else{
        pass.classList.remove('error');
        passconf.classList.remove('error');
        msg.textContent='';
    }
}

pass.addEventListener('input',validate);
passconf.addEventListener('input',validate);