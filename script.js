// FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBo-EWvveW5Ycc-x_Joc6fJNFvWPOqbtbM",
  authDomain: "job-tracker-app-73d2f.firebaseapp.com",
  projectId: "job-tracker-app-73d2f",
  storageBucket: "job-tracker-app-73d2f.firebasestorage.app",
  messagingSenderId: "438109151286",
  appId: "1:438109151286:web:8fdef73150ef0b393ef897"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// GSAP
gsap.from("h1", { y: -100, opacity: 0, duration: 1.5 });
gsap.from("p", { x: -200, opacity: 0, duration: 5.5 });
gsap.from("main", { y: -400, opacity: 0, duration: 5 });

// ELEMENTS
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signUpBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");
const authSection = document.getElementById("auth");
const mainApp = document.querySelector("main");

const form = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");

// SIGN UP
signUpBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Signup Successful!");
            emailInput.value = "";
            passwordInput.value = "";
        })
        .catch(err => alert(err.message));
});

// LOGIN
loginBtn.addEventListener("click", () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login Successful!");
            emailInput.value = "";
            passwordInput.value = "";
        })
        .catch(err => alert(err.message));
});

// AUTH STATE
auth.onAuthStateChanged(user => {
    if (user) {
        authSection.style.display = "none";
        mainApp.style.display = "block";
    } else {
        authSection.style.display = "block";
        mainApp.style.display = "none";
    }
});

// JOB FORM
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const company = document.getElementById("company").value;
    const role = document.getElementById("role").value;
    const date = document.getElementById("myDate").value;
    const status = document.getElementById("status").value;

    const li = document.createElement("li");
    li.textContent = `COMPANY: ${company} - ROLE: ${role} - DATE: ${date} - STATUS: ${status}`;
    jobList.appendChild(li);

    form.reset();
});