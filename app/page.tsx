"use client";

import { useEffect } from "react";

const whatsappHero =
  "https://wa.me/5587981036787?text=Vim%20pelo%20site%20e%20quero%20agendar%20minha%20avalia%C3%A7%C3%A3o%20com%20a%20Dra.%20Nat%C3%A1lia.&utm_source=site&utm_medium=botao&utm_campaign=hero";

const whatsappServices =
  "https://wa.me/5587981036787?text=Vim%20pelo%20site%20e%20gostaria%20de%20saber%20qual%20procedimento%20%C3%A9%20mais%20indicado%20para%20mim.&utm_source=site&utm_medium=botao&utm_campaign=servicos";

const whatsappResults =
  "https://wa.me/5587981036787?text=Vim%20pelo%20site%2C%20gostei%20dos%20resultados%20e%20quero%20agendar%20minha%20avalia%C3%A7%C3%A3o.&utm_source=site&utm_medium=botao&utm_campaign=resultados";

const whatsappFaq =
  "https://wa.me/5587981036787?text=Vim%20pelo%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20com%20a%20Dra.%20Nat%C3%A1lia.&utm_source=site&utm_medium=botao&utm_campaign=faq";

const treatments = [
  {
    number: "01",
    title: "Toxina botulínica",
    description:
      "Cuidado das linhas de expressão e prevenção dos sinais do envelhecimento, mantendo a naturalidade.",
  },
  {
    number: "02",
    title: "Ácido hialurônico",
    description:
      "Reposição de volume e harmonização delicada de lábios, olheiras e outras áreas da face.",
  },
  {
    number: "03",
    title: "Bioestimuladores",
    description:
      "Estímulo da produção natural de colágeno para melhorar firmeza, qualidade e vitalidade da pele.",
  },
  {
    number: "04",
    title: "Fios de sustentação",
    description:
      "Técnica planejada para estimular colágeno e favorecer a sustentação da pele com equilíbrio.",
  },
];

const results = [
  {
    image: "/assets/resultado-01.png",
    alt: "Registro de antes e depois de resultado facial realizado pela Dra. Natália",
  },
  {
    image: "/assets/resultado-02.png",
    alt: "Comparativo de antes e depois de acompanhamento estético facial",
  },
  {
    image: "/assets/resultado-03.png",
    alt: "Antes e depois da região facial e dos olhos com resultado natural",
  },
];

const faqs = [
  {
    question: "Como saber qual tratamento é o mais indicado para mim?",
    answer:
      "A indicação é definida somente após uma avaliação individual, considerando suas necessidades, expectativas e características.",
  },
  {
    question: "Os resultados ficam naturais?",
    answer:
      "A naturalidade orienta todo o planejamento. O cuidado é pensado para valorizar seus traços, sem apagar sua identidade.",
  },
  {
    question: "Preciso fazer uma avaliação antes do procedimento?",
    answer:
      "Sim. A avaliação é essencial para compreender seu objetivo, esclarecer dúvidas e definir um plano seguro e personalizado.",
  },
  {
    question: "Existe acompanhamento após o atendimento?",
    answer:
      "Sim. O acompanhamento faz parte da experiência, com orientações antes e depois do procedimento indicado.",
  },
];

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <img
            src="/assets/logo-dra-natalia.png"
            alt="Dra. Natália Alcântara — Estética Avançada"
          />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#tratamentos">Tratamentos</a>
          <a href="#resultados">Resultados</a>
          <a href="#localizacao">Localização</a>
        </nav>
        <a
          className="header-cta"
          href={whatsappHero}
          target="_blank"
          rel="noreferrer"
        >
          Agendar avaliação <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">
            <span />
            Estética avançada em Petrolina
          </p>
          <h1>
            Sua beleza, com a <em>naturalidade</em> que merece.
          </h1>
          <p className="hero-description">
            Cuidado individual, segurança e resultados que valorizam aquilo que
            já é único em você.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={whatsappHero}
              target="_blank"
              rel="noreferrer"
            >
              Agendar minha avaliação <span aria-hidden="true">→</span>
            </a>
            <a className="text-link" href="#sobre">
              Conheça a Dra. Natália
            </a>
          </div>
          <div className="hero-proof" aria-label="Diferenciais do atendimento">
            <div>
              <strong>Desde 2022</strong>
              <span>respeitando a sua beleza</span>
            </div>
            <div>
              <strong>Atendimento</strong>
              <span>próximo e personalizado</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-photo-frame">
            <img
              src="/assets/dra-natalia.jpg"
              alt="Dra. Natália Alcântara em sua clínica"
            />
          </div>
          <div className="hero-seal" aria-hidden="true">
            <span>NA</span>
            <small>Estética avançada</small>
          </div>
          <p className="photo-caption">Dra. Natália Alcântara</p>
        </div>

        <a
          className="scroll-cue"
          href="#sobre"
          aria-label="Rolar para conhecer a Dra. Natália"
        >
          <span>Role para descobrir</span>
          <i aria-hidden="true">↓</i>
        </a>
      </section>

      <div className="curve curve-cream" aria-hidden="true" />

      <section className="section about" id="sobre">
        <div className="section-shell about-grid">
          <div className="about-mark" data-reveal aria-hidden="true">
            <span>NA</span>
          </div>
          <div className="about-copy" data-reveal>
            <p className="eyebrow">
              <span />
              Cuidado com propósito
            </p>
            <h2>
              Técnica, escuta e um olhar atento para a sua <em>essência.</em>
            </h2>
            <p className="lead">
              Farmacêutica graduada pela UFPB e pós-graduada em Estética, a Dra.
              Natália une conhecimento, segurança e sensibilidade em cada
              atendimento.
            </p>
            <p>
              Da primeira conversa ao acompanhamento pós-procedimento, cada
              etapa é pensada de forma individual. O objetivo não é transformar
              quem você é, mas cuidar da sua beleza com leveza, equilíbrio e
              naturalidade.
            </p>
            <div className="credentials">
              <div>
                <strong>UFPB</strong>
                <span>Formação em Farmácia</span>
              </div>
              <div>
                <strong>Pós-graduação</strong>
                <span>Especialização em Estética</span>
              </div>
              <div>
                <strong>Humanizado</strong>
                <span>Acompanhamento contínuo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="treatments" id="tratamentos">
        <div className="section treatments-heading">
          <div className="section-shell treatments-heading-grid">
            <div data-reveal>
              <p className="eyebrow eyebrow-light">
                <span />
                Tratamentos personalizados
              </p>
              <h2>
                Escolhas conscientes para resultados <em>naturais.</em>
              </h2>
            </div>
            <p className="treatments-lead" data-reveal>
              A indicação ideal começa sempre por uma avaliação individual,
              respeitando suas necessidades, seu momento e seus objetivos.
            </p>
          </div>
        </div>
        <div className="section treatments-list-wrap">
          <div className="section-shell treatments-list">
            {treatments.map((treatment) => (
              <article className="treatment-card" data-reveal key={treatment.number}>
                <span className="treatment-number">{treatment.number}</span>
                <div>
                  <h3>{treatment.title}</h3>
                  <p>{treatment.description}</p>
                </div>
                <span className="treatment-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
          <div className="section-shell treatments-cta" data-reveal>
            <p>Não sabe por onde começar?</p>
            <a
              className="button button-primary"
              href={whatsappServices}
              target="_blank"
              rel="noreferrer"
            >
              Descobrir o cuidado ideal <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="curve curve-cream curve-after-dark" aria-hidden="true" />

      <section className="section experience" id="experiencia">
        <div className="section-shell">
          <div className="section-intro centered" data-reveal>
            <p className="eyebrow">
              <span />
              Experiência Natália Alcântara
              <span />
            </p>
            <h2>
              Resultados naturais, sem perder a sua <em>essência.</em>
            </h2>
            <p>
              Uma experiência baseada em escuta, precisão e cuidado contínuo —
              antes, durante e depois.
            </p>
          </div>
          <div className="experience-grid">
            <article className="experience-card" data-reveal>
              <span>01</span>
              <h3>Plano realmente individual</h3>
              <p>
                Cada indicação nasce da sua história, dos seus traços e daquilo
                que faz sentido para você.
              </p>
            </article>
            <article className="experience-card featured" data-reveal>
              <span>02</span>
              <h3>Segurança em cada decisão</h3>
              <p>
                Formação, atualização e uma conversa clara para que você se
                sinta segura em todas as etapas.
              </p>
            </article>
            <article className="experience-card" data-reveal>
              <span>03</span>
              <h3>Acompanhamento próximo</h3>
              <p>
                Orientações cuidadosas e presença contínua para acompanhar a
                evolução do seu resultado.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section results" id="resultados">
        <div className="results-glow" aria-hidden="true" />
        <div className="section-shell">
          <div className="results-header">
            <div data-reveal>
              <p className="eyebrow eyebrow-light">
                <span />
                Resultados e histórias reais
              </p>
              <h2>Quando o cuidado aparece sem exageros.</h2>
            </div>
            <p data-reveal>
              Registros reais compartilhados pela Dra. Natália. Cada resultado
              é individual e reflete um planejamento personalizado.
            </p>
          </div>
          <div className="results-grid">
            {results.map((result, index) => (
              <figure className="result-card" data-reveal key={result.image}>
                <div className="result-image">
                  <img src={result.image} alt={result.alt} loading="lazy" />
                  <span>Antes &amp; depois</span>
                </div>
                <figcaption>
                  <strong>Resultado {String(index + 1).padStart(2, "0")}</strong>
                  <span>Naturalidade respeitada em cada etapa.</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="results-action" data-reveal>
            <div>
              <span className="result-stars" aria-label="Cuidado cinco estrelas">
                ★ ★ ★ ★ ★
              </span>
              <p>Seu resultado também começa com uma conversa.</p>
            </div>
            <a
              className="button button-primary"
              href={whatsappResults}
              target="_blank"
              rel="noreferrer"
            >
              Agendar minha avaliação <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <div className="curve curve-cream curve-over-results" aria-hidden="true" />

      <section className="section evaluation" id="avaliacao">
        <div className="section-shell evaluation-grid">
          <div className="evaluation-copy" data-reveal>
            <p className="eyebrow">
              <span />
              Seu primeiro passo
            </p>
            <h2>Uma avaliação que olha para você por inteiro.</h2>
            <p>
              Sem pressa e sem fórmulas prontas. A consulta é o momento de
              entender seu objetivo e construir uma recomendação segura.
            </p>
            <a
              className="button button-dark"
              href={whatsappHero}
              target="_blank"
              rel="noreferrer"
            >
              Agendar minha avaliação <span aria-hidden="true">→</span>
            </a>
          </div>
          <ol className="evaluation-steps">
            <li data-reveal>
              <span>01</span>
              <div>
                <h3>Escuta e avaliação</h3>
                <p>
                  Conversamos sobre suas necessidades, sua rotina e o resultado
                  que você deseja.
                </p>
              </div>
            </li>
            <li data-reveal>
              <span>02</span>
              <div>
                <h3>Planejamento personalizado</h3>
                <p>
                  Você recebe uma recomendação clara, construída para seus
                  traços e seu momento.
                </p>
              </div>
            </li>
            <li data-reveal>
              <span>03</span>
              <div>
                <h3>Cuidado e acompanhamento</h3>
                <p>
                  Após o procedimento indicado, você segue acompanhada e bem
                  orientada.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section className="section location" id="localizacao">
        <div className="section-shell location-grid">
          <div className="location-visual" data-reveal>
            <div className="location-monogram" aria-hidden="true">
              <span>NA</span>
              <small>Petrolina · PE</small>
            </div>
            <div className="location-lines" aria-hidden="true" />
          </div>
          <div className="location-copy" data-reveal>
            <p className="eyebrow eyebrow-light">
              <span />
              Onde cuidar de você
            </p>
            <h2>Um espaço preparado para acolher.</h2>
            <p>
              Atendimento presencial em um ambiente reservado, confortável e
              pensado para uma experiência tranquila.
            </p>
            <address>
              <span>Empresarial Thaís Maria</span>
              Rua Santa Luzia, 36, Sala 204
              <br />
              Centro, Petrolina — PE · CEP 56304-100
            </address>
            <div className="location-actions">
              <a
                className="button button-primary"
                href="https://www.google.com/maps/search/?api=1&query=Empresarial+Tha%C3%ADs+Maria%2C+Rua+Santa+Luzia%2C+36%2C+Petrolina+PE"
                target="_blank"
                rel="noreferrer"
              >
                Ver como chegar <span aria-hidden="true">↗</span>
              </a>
              <a
                className="location-link"
                href={whatsappServices}
                target="_blank"
                rel="noreferrer"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq" id="duvidas">
        <div className="section-shell faq-grid">
          <div className="faq-copy" data-reveal>
            <p className="eyebrow">
              <span />
              Dúvidas frequentes
            </p>
            <h2>Informação também é uma forma de cuidado.</h2>
            <p>
              Se sua dúvida não estiver aqui, fale diretamente com a equipe
              pelo WhatsApp.
            </p>
            <a
              className="button button-outline"
              href={whatsappFaq}
              target="_blank"
              rel="noreferrer"
            >
              Tirar uma dúvida <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details data-reveal key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {faq.question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-orbit" aria-hidden="true" />
        <div className="section-shell footer-main" data-reveal>
          <img
            src="/assets/logo-dra-natalia.png"
            alt="Dra. Natália Alcântara — Estética Avançada"
          />
          <p className="footer-script">Vamos cuidar da sua beleza?</p>
          <h2>Seu próximo passo começa aqui.</h2>
          <a
            className="button button-primary footer-button"
            href={whatsappHero}
            target="_blank"
            rel="noreferrer"
          >
            Agendar minha avaliação <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="section-shell footer-bottom">
          <div>
            <strong>Contato</strong>
            <a href="tel:+5587981036787">(87) 98103-6787</a>
            <a
              href="https://instagram.com/dranataliadfalcantara"
              target="_blank"
              rel="noreferrer"
            >
              @dranataliadfalcantara
            </a>
          </div>
          <div>
            <strong>Endereço</strong>
            <span>Rua Santa Luzia, 36, Sala 204</span>
            <span>Centro · Petrolina — PE</span>
          </div>
          <div className="footer-legal">
            <span>© 2026 Natália Alcântara</span>
            <span>Estética Avançada</span>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappHero}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
      >
        <span aria-hidden="true">↗</span>
        <small>WhatsApp</small>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            name: "Natália Alcântara | Estética Avançada",
            image: "/assets/dra-natalia.jpg",
            telephone: "+55 87 98103-6787",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Santa Luzia, 36, Sala 204",
              addressLocality: "Petrolina",
              addressRegion: "PE",
              postalCode: "56304-100",
              addressCountry: "BR",
            },
            sameAs: ["https://instagram.com/dranataliadfalcantara"],
          }),
        }}
      />
    </main>
  );
}
