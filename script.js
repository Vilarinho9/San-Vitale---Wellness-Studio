:root {
  --green-dark: #4E6B5B;
  --green: #6F8F7B;
  --green-light: #A8BFB0;
  --soft: #F4F7F5;
  --text: #33443a;
  --shadow: 0 12px 35px rgba(55, 79, 66, .14);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  color: var(--text);
  background: #fff;
}

header {
  height: 96px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 16px rgba(0, 0, 0, .07);
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-img {
  height: 60px;
  width: auto;
  object-fit: contain;
  display: block;
}

.logo-mark {
  width: 58px;
  height: 58px;
  max-width: 58px;
  max-height: 58px;
  flex-shrink: 0;
  display: block;
  overflow: visible;
}

.logo-mark path {
  fill: none;
  stroke: currentColor;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.logo-mark text {
  font-size: 54px;
  font-family: Georgia, serif;
  fill: currentColor;
}

.logo h1 {
  font-family: "Playfair Display", serif;
  font-size: 36px;
  line-height: 34px;
  color: var(--green-dark);
}

.logo span {
  font-size: 12px;
  letter-spacing: 3px;
  font-weight: 700;
  color: var(--green-dark);
}

nav {
  display: flex;
  align-items: center;
  gap: 28px;
}

nav a {
  text-decoration: none;
  color: #2b2f2b;
  font-weight: 600;
  font-size: 14px;
  position: relative;
  transition: color 0.3s ease;
}

nav a.active,
nav a:hover {
  color: var(--green-dark);
}

nav a::after {
  content: "";
  width: 0;
  height: 2px;
  background: var(--green);
  position: absolute;
  bottom: -8px;
  left: 0;
  transition: width 0.3s ease;
}

nav a.active::after,
nav a:hover::after {
  width: 100%;
}

.btn {
  background: var(--green-dark);
  color: #fff;
  border: 0;
  border-radius: 10px;
  padding: 15px 22px;
  font-weight: 800;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: .3s;
  box-shadow: 0 10px 25px rgba(78, 107, 91, .22);
}

.btn:hover {
  background: #3f594a;
  transform: translateY(-2px);
}

.menu {
  display: none;
  border: 0;
  background: transparent;
  font-size: 34px;
  color: var(--green-dark);
  cursor: pointer;
}

.wpp-icon,
.wpp-mini,
.mail-icon,
.pin-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: currentColor;
  flex-shrink: 0;
}

.wpp-icon,
.wpp-mini {
  mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 3C8.82 3 3 8.57 3 15.45c0 2.36.7 4.56 1.9 6.43L3.65 29 11 27.1c1.54.52 3.22.8 5 .8 7.18 0 13-5.57 13-12.45S23.18 3 16 3Zm0 22.65c-1.62 0-3.13-.35-4.45-.97l-.43-.2-4.35 1.12.78-4.12-.28-.42a10.02 10.02 0 0 1-1.9-5.61C5.37 9.82 10.14 5.25 16 5.25s10.63 4.57 10.63 10.2S21.86 25.65 16 25.65Zm5.95-7.54c-.32-.16-1.9-.9-2.2-1-.29-.1-.5-.16-.72.16-.21.31-.82 1-.99 1.2-.18.21-.36.23-.67.08-.32-.16-1.34-.47-2.55-1.5-.94-.8-1.58-1.78-1.76-2.08-.18-.31-.02-.48.14-.63.14-.14.32-.36.48-.54.16-.18.21-.31.32-.52.1-.21.05-.39-.03-.55-.08-.16-.72-1.66-.99-2.28-.26-.6-.53-.52-.72-.53h-.62c-.21 0-.55.08-.84.39-.29.31-1.1 1.04-1.1 2.54s1.13 2.95 1.29 3.15c.16.21 2.23 3.28 5.4 4.6.76.32 1.35.5 1.81.64.76.23 1.45.2 2 .12.61-.09 1.9-.75 2.17-1.47.27-.72.27-1.34.19-1.47-.08-.13-.29-.21-.61-.36Z'/%3E%3C/svg%3E") center / contain no-repeat;
}

.mail-icon {
  mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6h16v12H4z' fill='none' stroke='black' stroke-width='2'/%3E%3Cpath d='M4 7l8 6 8-6' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E") center / contain no-repeat;
}

.pin-icon {
  mask: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 21s7-5 7-12a7 7 0 1 0-14 0c0 7 7 12 7 12z' fill='none' stroke='black' stroke-width='2'/%3E%3Ccircle cx='12' cy='9' r='2.5' fill='none' stroke='black' stroke-width='2'/%3E%3C/svg%3E") center / contain no-repeat;
}

.hero {
  min-height: 690px;
  background:
    linear-gradient(90deg, rgba(36, 58, 45, .88), rgba(78, 107, 91, .62), rgba(255, 255, 255, .08)),
    url("https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1800&q=80");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 90px 8%;
}

.hero-content {
  max-width: 720px;
  color: #fff;
}

.hero h2 {
  font-family: "Playfair Display", serif;
  font-size: clamp(28px, 4vw, 48px);
  line-height: 1.2;
  margin-bottom: 10px;
}

.hero h3 {
  font-family: "Playfair Display", serif;
  font-size: clamp(18px, 3vw, 22px);
  line-height: 1.05;
  color: #c8ddce;
  margin-bottom: 34px;
  max-width: 520px;
  opacity: 0.9;
}

.hero p {
  font-size: 18px;
  line-height: 1.8;
  max-width: 560px;
  font-weight: 500;
}

.hero-tags {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 34px 0;
}

.tag {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  font-weight: 800;
}

.tag i {
  width: 54px;
  height: 54px;
  background: rgba(244, 247, 245, .95);
  color: var(--green-dark);
  display: grid;
  place-items: center;
  border-radius: 50%;
}

.tag i svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

section {
  padding: 58px 8%;
}

.title {
  text-align: center;
  margin-bottom: 34px;
}

.title h2 {
  font-family: "Playfair Display", serif;
  font-size: clamp(34px, 4vw, 48px);
  color: var(--green-dark);
  position: relative;
  display: inline-block;
}

.title h2::before,
.title h2::after {
  content: "";
  width: 80px;
  height: 2px;
  background: var(--green);
  position: absolute;
  top: 50%;
}

.title h2::before {
  right: 105%;
}

.title h2::after {
  left: 105%;
}

.title p {
  margin-top: 10px;
  color: #6f7e74;
  font-size: 16px;
}

.differentials,
.booking,
.prices {
  background: var(--soft);
}

.differentials-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 46px;
  align-items: center;
}

.diff-text {
  display: grid;
  gap: 25px;
}

.diff-item {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 18px;
}

.diff-item span {
  width: 54px;
  height: 54px;
  background: #fff;
  color: var(--green-dark);
  display: grid;
  place-items: center;
  border-radius: 50%;
  box-shadow: 0 8px 25px rgba(78, 107, 91, .12);
}

.diff-item svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.diff-item p {
  line-height: 1.75;
  font-size: 16px;
}

.diff-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.diff-gallery img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.diff-gallery .diff-main {
  grid-column: 1 / -1;
  height: 260px;
}

.filter-area {
  display: flex;
  gap: 13px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
}

.filter-area button {
  border: 1px solid var(--green);
  background: #fff;
  color: var(--green-dark);
  font-weight: 800;
  padding: 12px 22px;
  border-radius: 50px;
  cursor: pointer;
}

.filter-area button:hover,
.filter-area button.active {
  background: var(--green);
  color: #fff;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: hidden;
  /* IMPORTANTE */
}

.card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--shadow);
  position: relative;
  transition: .3s;
  display: flex;
  flex-direction: column;
  min-height: 390px;
}

.card:hover {
  transform: translateY(-6px);
}

.card img {
  width: 100%;
  height: 145px;
  object-fit: cover;
  display: block;
  flex-shrink: 0;
}

.card-icon {
  width: 52px;
  height: 52px;
  background: var(--green-dark);
  color: #fff;
  display: grid;
  place-items: center;
  border-radius: 50%;
  position: absolute;
  top: 119px;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid #fff;
}

.card-icon svg {
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.card-body {
  padding: 42px 18px 16px;
  text-align: center;
  flex: 1;
}

.card h3 {
  color: var(--green-dark);
  font-family: "Playfair Display", serif;
  font-size: 20px;
  margin-bottom: 9px;
}

.card p {
  color: #68756d;
  font-size: 14px;
  line-height: 1.55;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 18px 18px;
  color: var(--green-dark);
  font-weight: 800;
  font-size: 13px;
  margin-top: auto;
}

.price-toggle-box {
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 780px;
}

th {
  background: var(--green-dark);
  color: #fff;
  text-align: left;
  padding: 15px;
  font-size: 14px;
}

td {
  padding: 14px 15px;
  border-bottom: 1px solid #e8eee9;
  color: #59665d;
  font-size: 14px;
}

td strong {
  color: var(--green-dark);
}

.booking-box {
  background: #fff;
  box-shadow: var(--shadow);
  padding: 18px;
  border-radius: 14px;
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
  gap: 18px;
  align-items: end;
}

label {
  font-size: 13px;
  color: #7a827a;
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
}

select,
input {
  width: 100%;
  padding: 15px;
  border: 1px solid #dde5df;
  border-radius: 8px;
  font-family: inherit;
  color: #6d756f;
}

.booking-extra {
  display: flex;
  justify-content: center;
  margin-top: 24px;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 42px;
  align-items: center;
}

.about img {
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.about h2 {
  color: var(--green-dark);
  font-family: "Playfair Display", serif;
  font-size: 38px;
  margin-bottom: 14px;
}

.about p {
  color: #66736b;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.whatsapp {
  position: fixed;
  right: 28px;
  bottom: 28px;
  width: 64px;
  height: 64px;
  background: #25D366;
  color: #fff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, .28);
  z-index: 60;
}

.whatsapp .wpp-icon {
  width: 34px;
  height: 34px;
}

footer {
  background: #274739;
  color: #fff;
  padding: 44px 8% 22px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1.35fr 1.3fr;
  gap: 35px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, .16);
}

footer h3 {
  font-family: "Playfair Display", serif;
  font-size: 30px;
}

footer h4 {
  margin-bottom: 16px;
  font-size: 18px;
}

footer p,
footer a {
  color: rgba(255, 255, 255, .84);
  text-decoration: none;
  font-size: 15px;
  line-height: 1.8;
}

.contact-line {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
}

.copy {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  padding-top: 20px;
  color: rgba(255, 255, 255, .75);
  gap: 16px;
}

@media(max-width: 1180px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media(max-width: 1080px) {
  header {
    padding: 0 5%;
  }

  nav {
    display: none;
    position: absolute;
    top: 96px;
    left: 0;
    width: 100%;
    background: #fff;
    padding: 24px;
    flex-direction: column;
    box-shadow: 0 8px 18px rgba(0, 0, 0, .12);
  }

  nav.show {
    display: flex;
  }

  .menu {
    display: block;
  }

  .header-btn {
    display: none;
  }

  section {
    padding-left: 5%;
    padding-right: 5%;
  }

  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .differentials-grid,
  .about {
    grid-template-columns: 1fr;
  }

  .booking-box {
    grid-template-columns: 1fr 1fr;
  }

  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media(max-width: 620px) {
  header {
    height: 92px;
    padding: 0 6%;
  }

  .logo-mark {
    width: 56px;
    height: 56px;
  }

  .logo h1 {
    font-size: 31px;
    line-height: 30px;
  }

  .logo span {
    font-size: 10px;
    letter-spacing: 2.3px;
  }

  nav {
    top: 92px;
  }

  .hero {
    min-height: 680px;
    padding: 64px 6%;
  }

  .hero h2 {
    font-size: 48px;
  }

  .hero h3 {
    font-size: 37px;
  }

  .hero p {
    font-size: 17px;
  }

  .tag {
    font-size: 15px;
    width: 100%;
  }

  .btn {
    width: 100%;
    max-width: 360px;
    padding: 18px 22px;
    font-size: 16px;
  }

  .title h2::before,
  .title h2::after {
    width: 50px;
  }

  .services-grid,
  .footer-grid,
  .booking-box {
    grid-template-columns: 1fr;
  }

  .card {
    min-height: auto;
  }

  .card img {
    height: 190px;
  }

  .card-icon {
    top: 164px;
  }

  .diff-gallery {
    grid-template-columns: 1fr;
  }

  .diff-gallery .diff-main,
  .diff-gallery img {
    height: 230px;
  }

  .about img {
    height: 245px;
  }

  .contact-line {
    align-items: center;
  }

  .copy {
    flex-direction: column;
    text-align: center;
  }

  .whatsapp {
    right: 22px;
    bottom: 24px;
    width: 62px;
    height: 62px;
  }
}

.hero .btn,
.booking-extra .btn,
.about .btn {
  display: none !important;
}

.price-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 20px;
}

.toggle-arrow {
  background: #6F8F7B;
  color: white;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;
}

.toggle-arrow:hover {
  background: #4E6B5B;
  transform: scale(1.1);
}

.toggle-arrow.rotate {
  transform: rotate(180deg);
}

.price-table.hidden {
  display: none;
}

.logo-mark {
  width: 55px;
  height: 55px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo svg,
.logo svg path,
.logo svg text,
.logo-mark,
.logo-mark path,
.logo-mark text {
  color: #6F8F7B !important;
  stroke: #6F8F7B !important;
  fill: none;
}

.logo-mark text {
  fill: #6F8F7B !important;
  stroke: none !important;
}

.logo-mark {
  width: 58px !important;
  height: 58px !important;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-img {
  height: 55px;
  width: auto;
  object-fit: contain;
  display: block;
}

/* MOBILE */
@media (max-width: 620px) {
  .logo-img {
    height: 42px;
  }
}

.hero-tags {
  display: flex;
  flex-direction: column;
  /* deixa em lista */
  gap: 15px;
  align-items: flex-start;
  /* alinha à esquerda */
}

.tag {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero h3 {
  white-space: nowrap;
  font-size: clamp(18px, 2.5vw, 24px);
}

@media (max-width: 768px) {
  .hero h3 {
    white-space: normal;
    /* volta a quebrar no mobile */
  }
}

.info-agendamento {
  background: #F4F7F5;
  border-left: 5px solid #6F8F7B;
  padding: 18px 20px;
  margin-top: 20px;
  border-radius: 8px;
  color: #4E6B5B;
  font-size: 14px;
  line-height: 1.6;
}

.info-agendamento strong {
  display: block;
  margin-bottom: 6px;
  font-weight: 700;
}

.booking-box {
  grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr auto !important;
}

.booking-box input,
.booking-box select {
  height: 52px !important;
  border-radius: 12px !important;
  border: 1px solid #dce7df !important;
  background: #fff !important;
  color: #4E6B5B !important;
  font-weight: 500 !important;
  outline: none !important;
  transition: .25s ease !important;
}

.booking-box input:focus,
.booking-box select:focus {
  border-color: #6F8F7B !important;
  box-shadow: 0 0 0 4px rgba(111, 143, 123, .18) !important;
}

.booking-box input[type="date"] {
  cursor: pointer !important;
  color-scheme: light !important;
}

.booking-box label {
  color: #4E6B5B !important;
  font-weight: 800 !important;
  margin-bottom: 8px !important;
}

@media (max-width: 1080px) {
  .booking-box {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

@media (max-width: 620px) {
  .booking-box {
    grid-template-columns: 1fr !important;
  }
}

.empresas,
.cursos {
  background: #F4F7F5;
  padding: 70px 8%;
}

.empresa-box {
  background: #fff;
  box-shadow: var(--shadow);
  border-radius: 18px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 18px;
  align-items: end;
}

.empresa-full {
  grid-column: 1 / 3;
}

.empresa-box textarea {
  width: 100%;
  min-height: 110px;
  resize: vertical;
  padding: 15px;
  border: 1px solid #dde5df;
  border-radius: 12px;
  font-family: inherit;
  color: #4E6B5B;
  outline: none;
}

.empresa-box input,
.empresa-box select {
  height: 52px;
  border-radius: 12px;
}

@media(max-width: 1080px) {

  .empresa-box,
  .courses-grid {
    grid-template-columns: 1fr;
  }

  .empresa-full {
    grid-column: auto;
  }
}

.footer-grid a {
  display: block;
  margin-bottom: 6px;
}

.toggle-arrow {
  background: #6F8F7B !important;
  color: #fff !important;
  border: none !important;
  border-radius: 50% !important;
  width: 38px !important;
  height: 38px !important;
  cursor: pointer !important;
  font-size: 18px !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
}

.toggle-arrow:hover {
  background: #4E6B5B !important;
}

.price-table {
  max-height: 2000px;
  opacity: 1;
  transform: translateY(0);
  overflow: hidden;
  transition: max-height 0.7s ease, opacity 0.4s ease, transform 0.4s ease;
}

/* ===== ANIMAÇÃO SUAVE ===== */
.price-wrapper {
  display: none;
}

/* ===== VISUAL MODERNO DA TABELA ===== */
.price-table {
  background: #ffffff;
  border-radius: 14px;
  padding: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

/* Cabeçalho */
.price-table thead {
  background: #5f7f6e;
  color: white;
}

.price-table th {
  padding: 14px;
  text-align: left;
  font-weight: 600;
}

/* Linhas */
.price-table td {
  padding: 12px;
  border-bottom: 1px solid #eee;
}

.price-table tr:hover {
  background: #f8faf9;
  transition: 0.2s;
}

/* Cantos arredondados na tabela */
.price-table table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
}

/* BOTÃO SETA */
.toggle-arrow {
  background: #6f8f7b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.toggle-arrow:hover {
  background: #4e6b5b;
}

.toggle-arrow.open {
  transform: rotate(180deg);
}

.price-wrapper {
  display: none;
}

#tabelaPrecos {
  display: block !important;
  max-height: none !important;
  opacity: 1 !important;
  visibility: visible !important;
  overflow: visible !important;
  transform: none !important;
}

#tabelaPrecos.is-hidden {
  display: none !important;
}

.investimento-box {
  width: 100%;
  margin-top: 25px;
}

.investimento-box .price-table {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 12px 35px rgba(55, 79, 66, .14);
  overflow-x: auto;
}

.investimento-box {
  width: 100%;
  margin-top: 25px;

  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.investimento-box.show {
  opacity: 1;
  transform: translateY(0);
}

.investimento-box .price-table {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 12px 35px rgba(55, 79, 66, .14);
  overflow-x: auto;
}

.map-link {
  color: rgba(255, 255, 255, .84);
  text-decoration: none;
  transition: .3s ease;
}

.map-link:hover {
  color: #A8BFB0;
  text-decoration: underline;
}

.curso-botao-box {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}

.curso-btn {
  font-size: 16px;
  padding: 16px 28px;
}

.about-images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
}

.price-header {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 18px !important;
  margin-bottom: 40px !important;
}

.price-header::before,
.price-header::after {
  content: "";
  width: 90px;
  height: 2px;
  background: #6F8F7B;
}

.price-header h2 {
  font-family: "Playfair Display", serif !important;
  font-size: 42px !important;
  color: #4E6B5B !important;
  margin: 0 !important;
}

.toggle-arrow {
  background: #6F8F7B !important;
  color: white !important;
  border: none !important;
  width: 38px !important;
  height: 38px !important;
  border-radius: 50% !important;
  font-size: 17px !important;
  cursor: pointer !important;
}

.btn-agendar {
  background: #5f7f6e;
  color: white !important;
  padding: 10px 18px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: 0.3s;
}

.btn-agendar:hover {
  background: #4e6b5b;
}

.service-card {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  border-radius: 12px;
}

* {
  box-sizing: border-box;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 320px));
  justify-content: center;
  /* CENTRALIZA quando tiver poucos */
  gap: 24px;
}

section {
  scroll-margin-top: 110px;
}

.service {
  display: none;
}

.msg-filtro {
  text-align: center;
  margin: 30px 0;
  font-size: 16px;
  color: #6b7a6b;
  background: #f5f7f5;
  padding: 18px;
  border-radius: 12px;
  border: 1px solid #e0e6e0;
  animation: fadeIn 0.6s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.service {
  display: none;
}

@media (max-width: 620px) {

  header {
    height: 76px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }

  /* LOGO */
  .logo {
    display: flex;
    align-items: center;
    gap: 6px;
    max-width: 160px;
  }

  .logo-img {
    width: 40px !important;
    height: 40px !important;
  }

  .logo-text {
    display: flex;
    flex-direction: column;
    line-height: 1;
  }

  .logo-text h1 {
    font-size: 18px !important;
    margin: 0;
  }

  .logo-text span {
    font-size: 9px !important;
    letter-spacing: 2px;
    margin-top: 2px;
  }

  /* BOTÃO AGENDAR (AGORA MENOR, NÃO SOME) */
  .btn-agendar {
    display: flex !important;
    align-items: center;
    justify-content: center;
    padding: 6px 10px !important;
    font-size: 11px !important;
    border-radius: 10px !important;
    gap: 5px;
    white-space: nowrap;
  }

  /* MENU HAMBURGER */
  .menu {
    display: flex !important;
    font-size: 26px;
    margin-left: 5px;
  }

  /* NAV MOBILE */
  #nav {
    position: fixed;
    top: 76px;
    left: 0;
    width: 100%;
    background: #fff;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    display: none;
    box-shadow: 0 15px 30px rgba(0,0,0,0.08);
    z-index: 999;
  }

  #nav.show {
    display: flex;
  }

  .hero {
    padding-top: 100px;
  }
}


  header .btn-agendar {
  display: flex !important;
  padding: 8px 10px !important;
  font-size: 11px !important;
  border-radius: 10px !important;
  gap: 6px;
}

header .btn-agendar span {
  display: none; /* opcional: esconde texto grande se quiser só o ícone */
}

  .menu {
    display: flex !important;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    margin-left: auto;
  }

  #nav {
    position: fixed;
    top: 76px;
    left: 0;
    width: 100%;
    background: #fff;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    display: none;
    box-shadow: 0 20px 35px rgba(0, 0, 0, .08);
  }

  #nav.show {
    display: flex;
  }

  .hero {
    padding-top: 100px;
  }

