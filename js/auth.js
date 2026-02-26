window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });

function sendOTP() {
    const number = document.getElementById('phone').value;
    auth.signInWithPhoneNumber(number, window.recaptchaVerifier)
        .then((res) => {
            window.confirmationResult = res;
            document.getElementById('otp-area').style.display = 'block';
            document.getElementById('send-btn').style.display = 'none';
        }).catch((err) => alert(err.message));
}

function verifyOTP() {
    const code = document.getElementById('otp').value;
    confirmationResult.confirm(code).then((res) => {
        window.location.href = "dashboard/index.html";
    }).catch((err) => alert("Invalid Code"));
}
