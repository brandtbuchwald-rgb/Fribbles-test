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
