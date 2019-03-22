const dialog = document.querySelector('dialog');
const showDialogButton = document.querySelector('#show-dialog');
var btn_login = document.getElementById('btn_login');
var btn_register = document.getElementById('btn_register');
var input_mail = document.getElementById('input_mail');
var input_pwd = document.getElementById('input_pwd');

if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}
showDialogButton.addEventListener('click', function () {
    dialog.showModal();
})

btn_login.addEventListener('click', function () {
    if (input_mail.value && input_pwd.value) {
        console.log(input_mail.value, input_pwd.value);
    }
})

// sign up the user
function createUser() {
    firebaseAuth.createUserWithEmailAndPassword(input_mail.value, input_pwd.value).then(cred => {
        console.log(cred.user);
    });
}