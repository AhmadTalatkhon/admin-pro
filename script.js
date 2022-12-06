function func(){
    let request = prompt('Enter login / admin, programmer');
    let release = document.getElementById('chiqarish');
    if (request === 'admin') {
        let password = prompt('Enter password');
        release.innerHTML = password;
    }
    else if (request === '' || request === null){
        release.innerHTML = 'canceled'
    }
    else if (request === 'dasturchi' || 'programmer'){
        release.innerHTML = 'Welcome...'
    }
}
func()