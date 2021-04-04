const UserName=document.getElementById("UserName")
const password=document.getElementById("password")
const email=document.getElementById("email")
const confirmPassword=document.getElementById("confirm-password")
const phone=document.getElementById("phone")
const userNameError=document.getElementById("userName-error")
const passwordError=document.getElementById("password-error")
const confirmPasswordError=document.getElementById("confirm-password-error")
const emailError=document.getElementById("email-error")
const phoneError=document.getElementById("phone-error")
const btn=document.getElementById("btn")
const specialChar=["!","@","#","$","%","^","&","*","(",")","_","-","=","+"]

const lowerCase=new RegExp("(?=.*[a-z])")
const upperCase=new RegExp("(?=.*[A-Z])")
const number=new RegExp("(?=.*[0-9])")
const specialChara=new RegExp("(?=.*[!@#\$%\^&\*])")




function check(){

    const name=UserName.value
    const pass=password.value
    const confirmPass=confirmPassword.value
    const emailVal=email.value
    const phoneVal=phone.value

    if (name==""){
        userNameError.innerHTML="**User-Name can'nt be empty"
        return false
    }else if(name!=""){
        if (name.length<=2||name.length>=20){
            userNameError.innerHTML="**User-name should be of atleast 3 characters!"
            return false
        }

        for (i=0;i<specialChar.length;i++){
            if (name.includes(specialChar[i])){
                userNameError.innerHTML="**No special character is permitted in User-name"
                return false
            }
        }

        for(i=0;i<name.length;i++){
            const elm=name.split("")
            if (!isNaN(parseInt(elm[i]))){
                userNameError.innerHTML="**User-name can'nt include number"
                return false
            }
        }

    }

    if (pass==""){
        passwordError.innerHTML="**Password field can'nt remain empty"
        return false
    } else if (pass!=""){
        if (!lowerCase.test(pass)){
            passwordError.innerHTML="**At least one lower case"
            return false
        }
        
        if (!upperCase.test(pass)){
            passwordError.innerHTML="**At least one upper case needed"
            return false
        }
    
        if (!number.test(pass)){
            passwordError.innerHTML="**At least one numeric digit"
            return false
        }
    
        if (!specialChara.test(pass)){
            passwordError.innerHTML="**At least one special character required(!@#$%^&*()_+-=)"
            return false
        }

        if (pass.length<8){
            passwordError.innerHTML="**Password length should be atleast 8 characters long"
            return false
        }
    }

    if (confirmPass==""){
        confirmPasswordError.innerHTML="**Confirm-Password field can'nt remain empty"
        return false
    }else if (confirmPass!=""){
        if (pass!=confirmPass){
            confirmPasswordError.innerHTML="**password and confirm password do not match"
            return false
        }
    }



   

    if (emailVal==""){
        emailError.innerHTML="**Email field can'nt remain empty"
        return false
    } else if(emailVal!=""){
        if (emailVal.indexOf("@")==0||emailVal.indexOf("@")==emailVal.length-1){
            emailError.innerHTML="**Mail Id is incorrect!"
            return false
        }
    }

    if (phoneVal==""){
        phoneError.innerHTML="**Password field can'nt remain empty"
        return false
    }else if (phoneVal!=""){

        if (isNaN(phoneVal)){
            phoneError.innerHTML="**Only digits from 0-9 are allowed!"
            return false
        }

        if (phoneVal.length<10){
            phoneError.innerHTML="**Phone number should be of 10 digits only"
            return false
        }
        
    }
    

    



   

   
    
}
