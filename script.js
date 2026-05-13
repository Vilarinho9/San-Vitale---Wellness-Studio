function toggleMenu() {
  const nav = document.getElementById("nav");
  if (nav) nav.classList.toggle("show");
}

function filterServices(category, button) {
  const services = document.querySelectorAll(".service");
  const buttons = document.querySelectorAll(".filter-area button");
  const msg = document.getElementById("msgFiltro");

  const jaAtivo = button.classList.contains("active");

  buttons.forEach(btn => btn.classList.remove("active"));

  if (jaAtivo) {
    services.forEach(service => {
      service.style.display = "none";
    });

    if (msg) msg.style.display = "block";
    return;
  }

  button.classList.add("active");

  if (msg) msg.style.display = "none";

  services.forEach(service => {
    if (category === "all" || service.classList.contains(category)) {
      service.style.display = "flex";
    } else {
      service.style.display = "none";
    }
  });
}

function abrirInvestimento() {
  const tabela = document.getElementById("investimentoBox");
  const botao = document.getElementById("btnInvestimento");
  const msg = document.getElementById("msgTabela");

  if (!tabela) return;

  const fechada = tabela.style.display === "none" || tabela.style.display === "";

  if (fechada) {
    tabela.style.display = "block";
    if (botao) botao.textContent = "▲";
    if (msg) msg.style.display = "none";
  } else {
    tabela.style.display = "none";
    if (botao) botao.textContent = "▼";
    if (msg) msg.style.display = "block";
  }
}

function agendarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome")?.value || "";
  const servico = document.getElementById("servico")?.value || "";
  const data = document.getElementById("data")?.value || "";
  const horario = document.getElementById("horario")?.value || "";
  const aniversario = document.getElementById("aniversario")?.value || "";

  const mensagem =
    `Olá! Meu nome é ${nome}. Gostaria de agendar uma sessão na San Vitale.\n\n` +
    `Serviço: ${servico}\n` +
    `Data do agendamento: ${data}\n` +
    `Horário: ${horario}\n` +
    `Meu aniversário: ${aniversario}`;

  window.open(
    `https://wa.me/5586998055995?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
}

function enviarEmpresaWhatsApp(event) {
  event.preventDefault();

  const empresa = document.getElementById("empresaNome")?.value || "";
  const servico = document.getElementById("empresaServico")?.value || "";
  const descricao = document.getElementById("empresaDescricao")?.value || "";

  const mensagem =
    `Olá! Gostaria de solicitar uma proposta para empresa.\n\n` +
    `Empresa: ${empresa}\n` +
    `Serviço de interesse: ${servico}\n` +
    `Descrição: ${descricao}`;

  window.open(
    `https://wa.me/5586998055995?text=${encodeURIComponent(mensagem)}`,
    "_blank"
  );
}

function agendarExperiencia() {
  const tempo = document.getElementById("tempoLivre")?.value || "";
  const descricao = document.getElementById("descricaoTratamento")?.value.trim() || "";

  if (descricao.length < 5) {
    alert("Descreva um pouco melhor o que você busca com o tratamento.");
    return;
  }

  if (!tempo) {
    alert("Selecione quanto tempo você deseja reservar.");
    return;
  }

  const numeroWhatsApp = "5586998055995";

  const mensagem =
    `Olá! Gostaria de receber uma indicação personalizada da San Vitale.\n\n` +
    `Tempo disponível: ${tempo}\n\n` +
    `O que busco com o tratamento:\n${descricao}`;

  const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}
const darkModeBtn =
  document.getElementById("darkModeBtn");

function ativarDarkMode() {

  document.body.classList.add("dark-mode");

  darkModeBtn.innerHTML = "🌙";

  localStorage.setItem("darkMode", "on");
}

function desativarDarkMode() {

  document.body.classList.remove("dark-mode");

  darkModeBtn.innerHTML = "☀️";

  localStorage.setItem("darkMode", "off");
}

if (darkModeBtn) {

  /* CARREGAMENTO */

  if(localStorage.getItem("darkMode") === "on") {

    ativarDarkMode();

  } else {

    desativarDarkMode();
  }

  /* CLIQUE */

  darkModeBtn.addEventListener("click", () => {

    if(document.body.classList.contains("dark-mode")) {

      desativarDarkMode();

    } else {

      ativarDarkMode();
    }

  });

}
document.addEventListener("DOMContentLoaded", function () {
  const botao = document.getElementById("btnInvestimento");
  const tabela = document.getElementById("investimentoBox");
  const msg = document.getElementById("msgTabela");

  if (!botao || !tabela) {
    console.log("Botão ou tabela não encontrados");
    return;
  }

  botao.addEventListener("click", function () {
    const estaFechada =
      tabela.style.display === "none" || tabela.style.display === "";

    if (estaFechada) {
      tabela.style.display = "block";
      botao.textContent = "▲";
      if (msg) msg.style.display = "none";
    } else {
      tabela.style.display = "none";
      botao.textContent = "▼";
      if (msg) msg.style.display = "block";
    }
  });
});
