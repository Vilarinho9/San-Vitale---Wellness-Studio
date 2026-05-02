function toggleMenu() {
  const nav = document.getElementById("nav");
  if (nav) nav.classList.toggle("show");
}

function filterServices(category, button) {
  const services = document.querySelectorAll(".service");
  const buttons = document.querySelectorAll(".filter-area button");
  const msg = document.getElementById("msgFiltro");

  if (msg) msg.style.display = "none";

  buttons.forEach(btn => btn.classList.remove("active"));
  if (button) button.classList.add("active");

  services.forEach(service => {
    const mostrar = category === "all" || service.classList.contains(category);
    service.style.display = mostrar ? "flex" : "none";
  });
}

function abrirInvestimento() {
  const tabela = document.getElementById("investimentoBox");
  const botao = document.getElementById("btnInvestimento");
  const msg = document.getElementById("msgTabela");

  if (!tabela || !botao) return;

  if (tabela.style.display === "none" || tabela.style.display === "") {
    tabela.style.display = "block";
    botao.textContent = "▲";
    if (msg) msg.style.display = "none";
  } else {
    tabela.style.display = "none";
    botao.textContent = "▼";
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

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      navLinks.forEach(item => item.classList.remove("active"));
      this.classList.add("active");

      const destino = document.querySelector(this.getAttribute("href"));

      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

      const nav = document.getElementById("nav");
      if (nav) nav.classList.remove("show");
    });
  });
});
