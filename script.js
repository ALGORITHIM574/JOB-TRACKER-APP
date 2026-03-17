gsap.from("h1", {
    y: -100,
    opacity: 0,
    duration: 1.5
});
gsap.from("p",{
x: -200,
opacity:0,
duration:5.5
});
gsap.from("main",{
    y:-400,
    opacity:0,
    duration:5
});
const form = document.getElementById("jobForm");
const jobList = document.getElementById("jobList");

form.addEventListener("submit" ,function(e){
     e.preventDefault();
     const company = document.getElementById("company").value;
     const role = document.getElementById("role").value;
     const date  = document.getElementById("myDate").value;
     const status = document.getElementById("status").value;

     const li = document.createElement("li");
     li.textContent = ` COMPANY: ${company} - ROLE:  ${role} - DATE:  ${date} - STATUS: ${status}`;
     jobList.appendChild(li);
     form.reset();
})