  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyClf2UoFBdG7ID-m50eSmBgIbM430TiCkk",
    authDomain: "netflix-website-2e11f.firebaseapp.com",
    projectId: "netflix-website-2e11f",
    storageBucket: "netflix-website-2e11f.appspot.com",
    messagingSenderId: "403224879899",
    appId: "1:403224879899:web:25de3ca40a1d46630969be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//   ******************************* firebase *********************************
// favbicon animation
let favbicon_animation = document.querySelector(".container_favbicon");

// button asked question 
let onebutton = document.querySelector(".onebutton");
let twobutton = document.querySelector(".twobutton");
let threebutton = document.querySelector(".threebutton");
let fourButton = document.querySelector(".fourButton");
let fivebutton = document.querySelector(".fivebutton");
// button asked question 
let oneText = document.querySelector(".oneText");
let twoText = document.querySelector(".twoText");
let threeText = document.querySelector(".threeText");
let fourText = document.querySelector(".fourText");
let fiveText = document.querySelector(".fiveText");

onebutton.addEventListener("click", () => {
    oneText.classList.add("activeOne");
    twoText.classList.remove("activeTwo");
    threeText.classList.remove("activeThree");
    fourText.classList.remove("activeFour");
    fiveText.classList.remove("activeFive");
})

twobutton.addEventListener("click", () => {
    twoText.classList.add("activeTwo");
    oneText.classList.remove("activeOne");
    threeText.classList.remove("activeThree");
    fourText.classList.remove("activeFour");
    fiveText.classList.remove("activeFive");
})

threebutton.addEventListener("click", () => {
    threeText.classList.add("activeThree");
    oneText.classList.remove("activeOne");
    twoText.classList.remove("activeTwo");
    fourText.classList.remove("activeFour");
    fiveText.classList.remove("activeFive");
})

fourButton.addEventListener("click", () => {
    fourText.classList.add("activeFour");
    oneText.classList.remove("activeOne");
    twoText.classList.remove("activeTwo");
    threeText.classList.remove("activeThree");
    fiveText.classList.remove("activeFive");
})

fivebutton.addEventListener("click", () => {
    fiveText.classList.add("activeFive");
    oneText.classList.remove("activeOne");
    twoText.classList.remove("activeTwo");
    threeText.classList.remove("activeThree");
    fourText.classList.remove("activeFour");
})

// ***************************** sign-up-Maine-Container ***********************************
let sign_Maine_Container = document.getElementById("sign-In-Maine-Container");
let sign_up_pop = document.getElementById("sign_up_pop");


sign_Maine_Container.addEventListener("click", () => {
    sign_up_pop.classList.add("pop_show_box");
})

// pop_form_sign_up 
const pop_form_sign_up = document.getElementById("pop_form_sign_up");

pop_form_sign_up.addEventListener("submit", popSignUpFunctionForm);

function popSignUpFunctionForm(e){
    e.preventDefault();
    popSignUpInputDatilas();
}

// pop Sign Up Input Function 
function popSignUpInputDatilas(){
    const pop_sign_up_name = document.getElementById("pop_sign_up_name").value;
    const email_pop_sign_up = document.getElementById("email_pop_sign_up").value;
    const email_pop_sign_password = document.getElementById("email_pop_sign_password").value;

    console.log(pop_sign_up_name, email_pop_sign_up ,email_pop_sign_password);
    // if condation with logic 
    ifCondationWithLogic(pop_sign_up_name, email_pop_sign_up, email_pop_sign_password);
    // firebase sign up form 
    firebaseSignUpForm(email_pop_sign_up, email_pop_sign_password);
    // realtime Data base this function below 
    realTimeDatabaseStoreData(pop_sign_up_name, email_pop_sign_up ,email_pop_sign_password);

    // document.getElementById("pop_form_sign_up").reset();
}

// firebase Sign Up Pop 
function firebaseSignUpForm(email_pop_sign_up, email_pop_sign_password){
    firebase.auth().createUserWithEmailAndPassword(email_pop_sign_up, email_pop_sign_password)
    .then( (result) => {
        // console.log(result); 
        swal("Congratulations!", `Your Form is Submit! ${result.user.email}`, "success");
        // setTimeout in function start 
        setTimeout(function(){
            window.open("index2.html", "_Self");
        },1000);
        // setTimeout in function end 
    })
    .catch( (error) => {
        // console.log(error); 
        console.log("Error!", `Please Try agin! ${error.message}`, "error");
        document.querySelector(".smallError").innerHTML = `Please Try agin! ${error.message}`;
    })
}

// if condation with logic show text input below 
function ifCondationWithLogic(pop_sign_up_name, email_pop_sign_up, email_pop_sign_password){
    const small = document.querySelectorAll("small");
    const inputSignUp = document.querySelectorAll(".border_input");
    // console.log(inputSignUp);

    if(pop_sign_up_name == ""){
        small[0].innerHTML = "Please Enter Your Name";
        inputSignUp[0].classList.add("border_bottom");
    }else if(email_pop_sign_up == ""){
        small[1].innerHTML = "Please Enter Your Email Address";
        inputSignUp[1].classList.add("border_bottom");
    }else if(email_pop_sign_password == ""){
        small[2].innerHTML = "Please Enter Your Password";
        inputSignUp[2].classList.add("border_bottom");
    }else{
        small[3].innerHTML = "<center><h1>Thanks</h1></center>";
    }

}

// key press sign up function with input text
window.addEventListener("keypress", removeAllTextSignUp);

function removeAllTextSignUp(){
    const inputSignUp = document.querySelectorAll(".border_input");
    const small = document.querySelectorAll("small");

    inputSignUp.forEach(element => {
        element.classList.remove("border_bottom");
    })

    small.forEach(smallElement => {
        smallElement.innerHTML = "";
    })
}

// relatime databse storge data with input faild text 
function realTimeDatabaseStoreData(pop_sign_up_name, email_pop_sign_up ,email_pop_sign_password){
    const firebaseDatabase = firebase.database().ref("Bio Data " + pop_sign_up_name); 
    const refMessage = firebaseDatabase.push();
    refMessage.set({
        Name : pop_sign_up_name,
        Email : email_pop_sign_up,
        Password : email_pop_sign_password
    })
}

// email with button maine container click this button visti the pop Form box show 
    const maine_container_pop_form = document.querySelectorAll(".maine_container_pop_form");
    const maine_container_SignUp_button = document.querySelectorAll(".maine_container_SignUp");

    maine_container_pop_form.forEach(submitForm => {
        submitForm.addEventListener("submit", submitMaineContainerForm);
    });

    function submitMaineContainerForm(e){
        e.preventDefault();
        let sign_up_pop = document.getElementById("sign_up_pop");

        maine_container_SignUp_button[0].addEventListener("click", () => {
            sign_up_pop.classList.add("pop_show_box");
        })

        maine_container_SignUp_button[1].addEventListener("click", () => {
            sign_up_pop.classList.add("pop_show_box");
        })
    }

    // Sign in Email and password with text pop Sign up Function submit below
    
    let Sign_in_child_button = document.getElementById("Sign_in_child_button");
    let Sign_up_child_button = document.getElementById("Sign_up_child_button");
    // body container with text 
    let sign_in_pop = document.getElementById("sign_in_pop");

    Sign_in_child_button.addEventListener("click", clickEventWithFunction);
    Sign_up_child_button.addEventListener("click", clickEventWithSignUpFunction);

    function clickEventWithFunction(){
        sign_in_pop.classList.add("sign_In_open");
        sign_up_pop.classList.remove("pop_show_box");
    }

    function clickEventWithSignUpFunction(){
        sign_in_pop.classList.remove("sign_In_open");
        sign_up_pop.classList.add("pop_show_box");
    }
    

    // submit function sign in with form validdateion 
    const form_sign_in = document.getElementById("pop_form_sign_in");
    
    form_sign_in.addEventListener("submit", submitFormSignIn);

    function submitFormSignIn(e){
        e.preventDefault();
        // sign in form with input faild
        signInFaildFunction();
    }

    // sign in input faild 
    function signInFaildFunction(){
        const email_pop_sign_in = document.getElementById("email_pop_sign_in").value;
        const email_pop_sign_in_password = document.getElementById("email_pop_sign_in_password").value;

        console.log(email_pop_sign_in, email_pop_sign_in_password);
        // sign in with firebase function 
        firebaseSignInFunction(email_pop_sign_in, email_pop_sign_in_password);
    }

    // sign in function with email with firebase 
    function firebaseSignInFunction(email_pop_sign_in, email_pop_sign_in_password){
        firebase.auth().signInWithEmailAndPassword(email_pop_sign_in, email_pop_sign_in_password)
        .then( (result) => {
            console.log(result);
            swal("Congratulations!", `Welcome : ${result.user.email}`, "success");
            // setTimeout in function start 
        setTimeout(function(){
            window.open("index2.html", "_Self");
        },1000);
        // setTimeout in function end 
        })
        .catch( (error) => {
            console.log(error);
            swal("error!", `Plase Try agin : ${error.message}`, "error");
        })
    }




    

















