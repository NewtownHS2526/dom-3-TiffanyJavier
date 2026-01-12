const RunDemo1 = document.getElementById(`run-demo-1`);
const demoBtn1 = document.getElementById(`demo-btn-1`);
const demoText1 = document.getElementById(`demo-text-1`);
const demoBox1 = document.getElementById(`demo-box-1`);
const demoResult1 = document.getElementById(`demo-result-1`);

if (runDemo1) {
runDemo1.addEventListener (`click`) }
 console.log("=== DEMO 1: getElementById ===");


if (demoText1) {
    demoText1.textContent = "Text-content";
    demoText1.style.color = "#10d26790";
    demoText1.style.fontsize = "160px";

}

if (demoBox1) {
    demoBox1.innerHtml = "<strong>HTML</strong> changed";
    demoBox1.style.backgroundColor = #ef4212;
}

if (demoBtn) {
    demoBtn.textContext = "Clicked";
    demoBtn.stylebackground = #fe3f73;
}

if (demoResult1) {
    demoResult1.innerHTML `
    <Strong> Demo Results: </strong>
    `;
}

