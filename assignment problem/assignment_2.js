function validOtp(otp) {
    let prefix = 'ph-';

    if (typeof otp !== 'string') {
        return 'Invalid'
    }

    if (otp.startsWith(prefix) && otp.length === 8) {
        return true;
    } else {
        return false;
    }
}

const inputOtp = validOtp(["ph-10985"]);
console.log(inputOtp);