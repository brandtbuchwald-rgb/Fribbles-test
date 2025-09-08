const builderBtn = document.getElementById("builderBtn");
const infographicBtn = document.getElementById("infographicBtn");
const builderSection = document.getElementById("builder");
const infographicSection = document.getElementById("infographic");
const buildBtn = document.getElementById("buildBtn");
const resetBtn = document.getElementById("resetBtn");
const canvas = document.getElementById("infographicCanvas");
const ctx = canvas.getContext("2d");

// Toggle sections
builderBtn.addEventListener("click", () => {
  builderSection.classList.remove("hidden");
  infographicSection.classList.add("hidden");
});

infographicBtn.addEventListener("click", () => {
  builderSection.classList.add("hidden");
  infographicSection.classList.remove("hidden");
});

// Placeholder gear form (you can expand later)
document.getElementById("gearForm").innerHTML = `
  <label>Attack %: <input type="number" id="atk" value="550"></label><br>
  <label>Defense %: <input type="number" id="def" value="550"></label><br>
  <label>Crit Chance %: <input type="number" id="crit" value="10"></label><br>
  <label>Attack Speed %: <input type="number" id="atkspd" value="5"></label><br>
  <label>Evasion %: <input type="number" id="eva" value="5"></label><br>
`;

buildBtn.addEventListener("click", () => {
  const atk = document.getElementById("atk").value;
  const def = document.getElementById("def").value;
  const crit = document.getElementById("crit").value;
  const atkspd = document.getElementById("atkspd").value;
  const eva = document.getElementById("eva").value;

  canvas.width = 400;
  canvas.height = 300;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";
  ctx.fillText("EHT Gear Infographic", 100, 30);
  ctx.fillText(`ATK: ${atk}`, 50, 80);
  ctx.fillText(`DEF: ${def}`, 50, 110);
  ctx.fillText(`CRIT: ${crit}%`, 50, 140);
  ctx.fillText(`ATK SPD: ${atkspd}%`, 50, 170);
  ctx.fillText(`Evasion: ${eva}%`, 50, 200);
});

resetBtn.addEventListener("click", () => {
  document.getElementById("atk").value = 550;
  document.getElementById("def").value = 550;
  document.getElementById("crit").value = 10;
  document.getElementById("atkspd").value = 5;
  document.getElementById("eva").value = 5;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
const buildBtn = document.getElementById("build");
const resetBtn = document.getElementById("reset");
const canvas = document.getElementById("infographic");
const ctx = canvas.getContext("2d");

buildBtn.addEventListener("click", () => {
  // Example stat values (later we’ll pull these from inputs)
  const atk = 550;
  const def = 550;
  const crit = 35;
  const atkspd = 12;
  const eva = 16;

  canvas.width = 450;
  canvas.height = 600;

  // Background
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Title
  ctx.fillStyle = "#fff";
  ctx.font = "bold 18px Arial";
  ctx.fillText("Hunter Gear Infographic", 90, 30);

  // Hunter placeholder (circle in middle)
  ctx.beginPath();
  ctx.arc(225, 200, 40, 0, 2 * Math.PI);
  ctx.fillStyle = "#4444ff";
  ctx.fill();

  // Gear slot placeholders
  const gearSlots = [
    [115, 80], [225, 60], [335, 80],  // top row
    [115, 200], [335, 200],           // mid row
    [115, 320], [225, 340], [335, 320] // bottom row
  ];
  ctx.fillStyle = "#663399";
  gearSlots.forEach(([x, y]) => {
    ctx.fillRect(x, y, 50, 50);
  });

  // Stats (bottom section)
  ctx.fillStyle = "#fff";
  ctx.font = "16px Arial";
  ctx.fillText(`ATK: ${atk}`, 50, 420);
  ctx.fillText(`DEF: ${def}`, 50, 450);
  ctx.fillText(`CRIT: ${crit}%`, 50, 480);
  ctx.fillText(`ATK SPD: ${atkspd}%`, 50, 510);
  ctx.fillText(`Evasion: ${eva}%`, 50, 540);
});

resetBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
