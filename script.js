function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

function filterServices(category, button) {
  const services = document.querySelectorAll(".service");
  const buttons = document.querySelectorAll(".filter-area button");

  buttons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  services.forEach(service => {
    if (category === "all" || service.classList.contains(category)) {
      service.style.display = "flex";
    } else {
      service.style.display = "none";
    }
  });
}

function togglePrecos() {
  const tabela = document.getElementById("tabelaPrecos");
  const botao = document.getElementById("togglePrices");

  if (tabela.style.display === "none") {
    tabela.style.display = "block";
    botao.textContent = "▲";
  } else {
    tabela.style.display = "none";
    botao.textContent = "▼";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("togglePrices");

  if (botao) {
    botao.addEventListener("click", togglePrecos);
  }
});

function agendarWhatsApp(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const data = document.getElementById("data").value;
  const horario = document.getElementById("horario").value;
  const aniversario = document.getElementById("aniversario")?.value || "";

  const mensagem = `Olá! Meu nome é ${nome}. Gostaria de agendar uma sessão na San Vitale.%0A%0AServiço: ${servico}%0AData do agendamento: ${data}%0AHorário: ${horario}%0AMeu aniversário: ${aniversario}`;

  window.open(`https://wa.me/5586998055995?text=${mensagem}`, "_blank");
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("show");
  });
});
const toggleBtn = document.getElementById("togglePrices");
const tabelaPrecos = document.getElementById("tabelaPrecos");


toggleBtn.addEventListener("click", () => {
  tabelaPrecos.classList.toggle("hidden");
  toggleBtn.classList.toggle("rotate");
});
function enviarEmpresaWhatsApp(event) {
  event.preventDefault();

  const empresa = document.getElementById("empresaNome")?.value || "";
  const servico = document.getElementById("empresaServico")?.value || "";
  const descricao = document.getElementById("empresaDescricao")?.value || "";

  const mensagem = `Olá! Gostaria de solicitar uma proposta para empresa.%0A%0AEmpresa: ${empresa}%0AServiço de interesse: ${servico}%0ADescrição: ${descricao}`;

  window.open(`https://wa.me/5586998055995?text=${mensagem}`, "_blank");
}
const btn = document.getElementById("toggle-precos");
const tabela = document.getElementById("tabela-precos");

btn.addEventListener("click", () => {
  if (tabela.style.display === "none") {
    tabela.style.display = "block";
    btn.textContent = "▲";
  } else {
    tabela.style.display = "none";
    btn.textContent = "▼";
  }
});
function togglePrecos() {
  const tabela = document.getElementById("tabelaPrecos");
  const botao = document.getElementById("togglePrices");

  if (!tabela || !botao) return;

  tabela.classList.toggle("is-hidden");

  botao.textContent = tabela.classList.contains("is-hidden") ? "▼" : "▲";
}
function abrirInvestimento() {
  const tabela = document.getElementById("investimentoBox");
  const botao = document.getElementById("btnInvestimento");
  const msg = document.getElementById("msgTabela");

  const estaFechada =
    tabela.style.display === "none" || tabela.style.display === "";

  if (estaFechada) {
    tabela.style.display = "block";

    if (msg) msg.style.display = "none";

    setTimeout(() => {
      tabela.classList.add("show");
    }, 10);

    botao.textContent = "▲";
  } else {
    tabela.classList.remove("show");

    setTimeout(() => {
      tabela.style.display = "none";
      if (msg) msg.style.display = "block";
    }, 300);

    botao.textContent = "▼";
  }
}
document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', function () {
    
    // remove active de todos
    document.querySelectorAll('#nav a').forEach(el => {
      el.classList.remove('active');
    });

    // adiciona no clicado
    this.classList.add('active');
  });
});
const navLinks = document.querySelectorAll("#nav a");
const sections = document.querySelectorAll(
  "#inicio, #diferenciais, #sobre, #experiencias, #empresas, #cursos"
);

function updateActiveMenu() {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    

    if (link.getAttribute("href") === `#${currentSection}`) {
      
    }
  });
}

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll("#nav a").forEach(item => {
      item.classList.remove("active");
    });

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
function filterServices(category, button) {
  const services = document.querySelectorAll(".service");
  const buttons = document.querySelectorAll(".filter-area button");
  const msg = document.getElementById("msgFiltro");

  if (msg) {
    msg.style.display = "none";
  }

  buttons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  services.forEach(service => {
    if (category === "all" || service.classList.contains(category)) {
      service.style.display = "flex";
    } else {
      service.style.display = "none";
    }
  });
}
