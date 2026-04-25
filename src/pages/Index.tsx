import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/files/1e6f1e85-4de1-4add-a18b-cdfb20b54e6f.jpg";
const FIGURES_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/files/399b6811-f3df-4f77-812d-2fe6d059c927.jpg";
const CRAFT_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/files/c596f571-2945-42a0-a21c-87e7ebf46f05.jpg";

// Real hero photos
const LISTOROG_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/a3064c08-c90f-4d3a-aba1-76d4f5cf07fe.png";
const DREVLIN_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/4825ce46-c1d4-422f-811e-269ae9bcf456.png";
const EMIRO_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/035e76a2-8a75-4012-b786-6501103bbb95.png";
const NERELIY_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/ea7a0815-d083-4f46-84b3-96c4fa65cdfb.png";
const AREYA_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/c81c87b4-2625-4276-8fc0-4bad85f666e6.png";

const heroes = [
  { name: "Аэрея", state: "Свобода", meaning: "Приносит свободу мыслей", color: "#8BA3B0", emoji: "🌬️", symbol: "~", img: AREYA_IMG },
  { name: "Листорог", state: "Опора", meaning: "Даёт опору и корни", color: "#7A8C6E", emoji: "🌿", symbol: "Ψ", img: LISTOROG_IMG },
  { name: "Эмиро", state: "Любовь", meaning: "Открывает сердце", color: "#B87A8A", emoji: "💖", symbol: "♡", img: EMIRO_IMG },
  { name: "Древлин", state: "Спокойствие", meaning: "Приносит тишину внутри", color: "#8B6B4A", emoji: "🪶", symbol: "∞", img: DREVLIN_IMG },
  { name: "Нерелий", state: "Эмоции", meaning: "Успокаивает чувства", color: "#6B8BA3", emoji: "💧", symbol: "◯", img: NERELIY_IMG },
  { name: "Игнитрис", state: "Энергия", meaning: "Возвращает внутренний огонь", color: "#C4963A", emoji: "🔥", symbol: "∆", img: null },
];

const states = [
  { name: "Спокойствие", hero: "Древлин", icon: "Moon", desc: "Найти тишину внутри" },
  { name: "Энергия", hero: "Игнитрис", icon: "Flame", desc: "Разжечь внутренний огонь" },
  { name: "Любовь", hero: "Эмиро", icon: "Heart", desc: "Открыть сердце миру" },
  { name: "Эмоции", hero: "Нерелий", icon: "Waves", desc: "Прожить и отпустить" },
  { name: "Опора", hero: "Листорог", icon: "TreePine", desc: "Найти свои корни" },
  { name: "Свобода", hero: "Аэрея", icon: "Wind", desc: "Расправить внутренние крылья" },
];

const features = [
  { icon: "TreePine", label: "Натуральное дерево" },
  { icon: "Hand", label: "Ручная работа" },
  { icon: "Sparkles", label: "Каждая уникальна" },
  { icon: "Star", label: "Коллекционная серия" },
  { icon: "Heart", label: "Сделано со смыслом" },
  { icon: "Package", label: "Премиальная упаковка" },
  { icon: "Gift", label: "Подарок с эмоцией" },
  { icon: "Shield", label: "Талисман рядом" },
];

const navLinks = [
  { label: "Герои", href: "#heroes" },
  { label: "Состояния", href: "#states" },
  { label: "Магазин", href: "#shop" },
  { label: "Доставка", href: "#delivery" },
  { label: "Контакты", href: "#contacts" },
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function ParticleField() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${8 + i * 8}%`,
    duration: `${7 + (i % 5)}s`,
    delay: `${(i * 0.7) % 6}s`,
    size: i % 3 === 0 ? 4 : i % 2 === 0 ? 2.5 : 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle-dot"
          style={{
            left: p.left,
            "--duration": p.duration,
            "--delay": p.delay,
            width: p.size,
            height: p.size,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(245,240,232,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,184,150,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span
            className="text-2xl tracking-widest"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "var(--color-dark)" }}
          >
            LIS<span style={{ color: "var(--color-gold)" }}>KIDS</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <a href="#shop" className="hidden md:block btn-primary rounded-none text-xs">
          <span>Магазин</span>
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "var(--color-dark)" }}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-5"
          style={{ background: "rgba(245,240,232,0.97)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#shop" className="btn-primary rounded-none text-xs text-center mt-2">
            <span>Магазин</span>
          </a>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    const handler = () => {
      if (parallaxRef.current) {
        const y = window.scrollY * 0.4;
        parallaxRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG with parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 hero-overlay" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(196,150,58,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Light rays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[15, 30, 50, 70, 85].map((x, i) => (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: `${x}%`,
              width: "1px",
              height: "70%",
              background: `linear-gradient(180deg, rgba(255,220,100,${0.15 - i * 0.02}) 0%, transparent 100%)`,
              transform: `rotate(${-5 + i * 3}deg)`,
              transformOrigin: "top center",
              filter: "blur(8px)",
            }}
          />
        ))}
      </div>

      <ParticleField />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="section-label mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 0.2s",
          }}
        >
          Деревянные фигурки со смыслом
        </p>

        <h1
          className="leading-none mb-6 md:mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            fontSize: "clamp(3rem, 12vw, 8rem)",
            color: "var(--color-dark)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(30px)",
            transition: "all 1.1s cubic-bezier(0.16,1,0.3,1) 0.4s",
            letterSpacing: "-0.02em",
          }}
        >
          Хранители<br />
          <em style={{ color: "var(--color-wood)", fontStyle: "italic" }}>внутреннего мира</em>
        </h1>

        <p
          className="max-w-xl mx-auto mb-10 md:mb-12 leading-relaxed"
          style={{ fontSize: "clamp(0.95rem, 3vw, 1.2rem)" }}
          style={{
            fontFamily: "'Golos Text', sans-serif",
            fontWeight: 300,
            color: "rgba(28,21,16,0.7)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 0.7s",
          }}
        >
          Деревянные фигурки, которые помогают чувствовать себя,
          находить опору и вдохновение.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 1s",
          }}
        >
          <a href="#heroes" className="btn-primary rounded-none">
            <span>Выбрать своего героя</span>
          </a>
          <a href="#states" className="btn-outline rounded-none">
            Найти своё состояние
          </a>
        </div>

        {/* Figures image */}
        <div
          className="mt-16 relative inline-block"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 1.3s cubic-bezier(0.16,1,0.3,1) 1.2s",
          }}
        >
          <img
            src={FIGURES_IMG}
            alt="Деревянные хранители LISKIDS"
            className="w-full max-w-2xl mx-auto rounded-none"
            style={{
              maskImage: "linear-gradient(180deg, black 60%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(180deg, black 60%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, rgba(196,150,58,0.15) 0%, transparent 70%)",
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 0.5 : 0,
          transition: "opacity 1s ease 2s",
        }}
      >
        <span className="section-label" style={{ fontSize: "0.6rem" }}>
          прокрутить
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(180deg, var(--color-gold), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}

function StatesSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="states" className="py-16 md:py-32 px-4 md:px-6" style={{ background: "var(--color-milk)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">Твоё состояние</p>
          <h2
            className="text-5xl md:text-7xl reveal reveal-delay-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "var(--color-dark)" }}
          >
            Выбери своё
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {states.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setActive(i)}
              className={`reveal reveal-delay-${i + 1} p-5 md:p-8 text-left transition-all duration-500 group`}
              style={{
                background: active === i
                  ? "linear-gradient(135deg, var(--color-wood), var(--color-gold))"
                  : "rgba(212,184,150,0.15)",
                border: active === i
                  ? "1px solid transparent"
                  : "1px solid rgba(212,184,150,0.3)",
                color: active === i ? "var(--color-milk)" : "var(--color-dark)",
                transform: active === i ? "scale(1.02)" : "scale(1)",
              }}
            >
              <div className="mb-4">
                <Icon
                  name={s.icon}
                  size={28}
                  style={{ color: active === i ? "rgba(245,240,232,0.8)" : "var(--color-gold)" }}
                />
              </div>
              <h3
                className="text-xl mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, fontSize: "1.5rem" }}
              >
                {s.name}
              </h3>
              <p
                className="text-sm mt-1"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  fontWeight: 300,
                  opacity: 0.7,
                  fontSize: "0.8rem",
                  letterSpacing: "0.02em",
                }}
              >
                {s.desc}
              </p>
              <p
                className="text-xs mt-3"
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  opacity: active === i ? 0.9 : 0.5,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontSize: "0.65rem",
                }}
              >
                → {s.hero}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroesSection() {
  return (
    <section
      id="heroes"
      className="py-16 md:py-32 px-4 md:px-6"
      style={{
        background: "linear-gradient(180deg, var(--color-milk) 0%, rgba(139,107,74,0.08) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="section-label reveal mb-4">Коллекция</p>
          <h2
            className="text-5xl md:text-7xl reveal reveal-delay-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Шесть хранителей
          </h2>
          <p
            className="mt-6 text-base max-w-lg mx-auto reveal reveal-delay-3"
            style={{
              fontFamily: "'Golos Text', sans-serif",
              fontWeight: 300,
              color: "rgba(28,21,16,0.6)",
              lineHeight: "1.8",
            }}
          >
            Каждый герой несёт в себе особую силу — состояние, которое
            может стать твоим внутренним ориентиром.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {heroes.map((hero, i) => (
            <div
              key={hero.name}
              className={`reveal reveal-delay-${(i % 3) + 1} card-hover group cursor-pointer overflow-hidden`}
              style={{
                background: "rgba(245,240,232,0.85)",
                border: "1px solid rgba(212,184,150,0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Hero photo */}
              <div
                className="relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, rgba(245,240,232,1) 0%, ${hero.color}18 100%)`,
                  minHeight: "200px",
                }}
              >
                {hero.img ? (
                  <img
                    src={hero.img}
                    alt={hero.name}
                    className="w-full transition-transform duration-700 group-hover:scale-105"
                    style={{
                      objectFit: "contain",
                      maxHeight: "220px",
                      padding: "1rem 1rem 0",
                      display: "block",
                      margin: "0 auto",
                    }}
                  />
                ) : (
                  <div
                    className="flex items-center justify-center"
                    style={{ minHeight: "200px" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "5rem",
                        color: hero.color,
                        opacity: 0.4,
                        lineHeight: 1,
                      }}
                    >
                      {hero.symbol}
                    </span>
                  </div>
                )}
                {/* Color accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8"
                  style={{
                    background: `linear-gradient(180deg, transparent, ${hero.color}20)`,
                  }}
                />
              </div>

              {/* Color stripe */}
              <div
                className="h-0.5 w-full"
                style={{ background: `linear-gradient(90deg, ${hero.color}, transparent)` }}
              />

              <div className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-1">
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                      fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
                      color: "var(--color-dark)",
                      lineHeight: 1.1,
                    }}
                  >
                    {hero.name}
                  </h3>
                  <span className="text-lg">{hero.emoji}</span>
                </div>

                <p
                  className="mb-2"
                  style={{
                    fontFamily: "'Golos Text', sans-serif",
                    color: hero.color,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: 400,
                    fontSize: "0.65rem",
                  }}
                >
                  {hero.state}
                </p>

                <p
                  style={{
                    fontFamily: "'Golos Text', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(0.75rem, 2.5vw, 0.88rem)",
                    color: "rgba(28,21,16,0.65)",
                    lineHeight: "1.6",
                  }}
                >
                  {hero.meaning}
                </p>

                <div
                  className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "var(--color-gold)" }}
                >
                  <span
                    style={{
                      fontFamily: "'Golos Text', sans-serif",
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Выбрать
                  </span>
                  <Icon name="ArrowRight" size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <a href="#shop" className="btn-primary rounded-none inline-block">
            <span>Перейти в магазин</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section
      className="py-16 md:py-32 px-4 md:px-6"
      style={{ background: "rgba(139,107,74,0.06)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="section-label reveal mb-4">Качество</p>
          <h2
            className="text-5xl md:text-6xl reveal reveal-delay-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            Почему нас выбирают
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.label}
              className={`reveal reveal-delay-${(i % 4) + 1} group text-center p-8 transition-all duration-500 hover:-translate-y-2`}
              style={{
                background: "rgba(245,240,232,0.6)",
                border: "1px solid rgba(212,184,150,0.25)",
              }}
            >
              <div
                className="mx-auto mb-5 w-12 h-12 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(196,150,58,0.15), rgba(139,107,74,0.1))",
                  border: "1px solid rgba(196,150,58,0.2)",
                  borderRadius: "50%",
                }}
              >
                <Icon name={f.icon} size={20} style={{ color: "var(--color-gold)" }} />
              </div>
              <p
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.85rem",
                  color: "var(--color-dark)",
                  lineHeight: "1.5",
                }}
              >
                {f.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section
      className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden"
      style={{ background: "var(--color-dark)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${CRAFT_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(28,21,16,0.85) 0%, rgba(28,21,16,0.6) 50%, rgba(28,21,16,0.85) 100%)",
        }}
      />

      <ParticleField />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="section-label reveal mb-6" style={{ color: "var(--color-gold)" }}>
          История бренда
        </p>
        <h2
          className="text-5xl md:text-7xl mb-10 reveal reveal-delay-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            color: "var(--color-milk)",
            lineHeight: "1.1",
          }}
        >
          Каждая фигурка
          <em className="block" style={{ color: "var(--color-sand)", fontStyle: "italic" }}>
            рождается вручную
          </em>
        </h2>

        <p
          className="text-lg leading-relaxed mb-12 reveal reveal-delay-3"
          style={{
            fontFamily: "'Golos Text', sans-serif",
            fontWeight: 300,
            color: "rgba(245,240,232,0.75)",
            lineHeight: "1.9",
          }}
        >
          Мы вкладываем в дерево заботу, тепло и смысл, чтобы герой стал
          твоим личным талисманом — маленьким хранителем, который всегда
          рядом.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center reveal reveal-delay-4"
        >
          {[
            { value: "6", label: "уникальных героев" },
            { value: "100%", label: "ручная работа" },
            { value: "∞", label: "смысл внутри" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-8">
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "3rem",
                  fontWeight: 300,
                  color: "var(--color-gold)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Golos Text', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(245,240,232,0.5)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginTop: "0.5rem",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    { q: "Из какого дерева сделаны фигурки?", a: "Мы используем экологичное липовое и берёзовое дерево. Каждая фигурка обработана натуральными маслами." },
    { q: "Сколько времени занимает создание?", a: "Один герой создаётся от 3 до 7 дней. Это полностью ручная работа — от заготовки до финальной обработки." },
    { q: "Как происходит доставка?", a: "Доставляем по всей России. Каждая фигурка упакована в премиальную подарочную коробку с описанием героя." },
    { q: "Можно ли заказать персональную фигурку?", a: "Да! Мы делаем персональные заказы с индивидуальным символом и смыслом. Напишите нам для обсуждения деталей." },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-32 px-4 md:px-6" style={{ background: "var(--color-milk)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label reveal mb-4">Вопросы</p>
          <h2
            className="text-5xl md:text-6xl reveal reveal-delay-2"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300 }}
          >
            FAQ
          </h2>
        </div>

        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1}`}
              style={{ borderBottom: "1px solid rgba(212,184,150,0.3)" }}
            >
              <button
                className="w-full text-left py-7 flex items-center justify-between gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: "var(--color-dark)",
                  }}
                >
                  {faq.q}
                </span>
                <Icon
                  name={open === i ? "Minus" : "Plus"}
                  size={18}
                  style={{
                    color: "var(--color-gold)",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: open === i ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <p
                  className="pb-7"
                  style={{
                    fontFamily: "'Golos Text', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.95rem",
                    color: "rgba(28,21,16,0.65)",
                    lineHeight: "1.8",
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section
      className="relative py-40 px-6 overflow-hidden"
      id="shop"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          filter: "brightness(0.4) saturate(0.8)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(196,150,58,0.1) 0%, rgba(28,21,16,0.6) 70%)",
        }}
      />

      <ParticleField />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="section-label reveal mb-6" style={{ color: "var(--color-gold)" }}>
          Найди своего
        </p>
        <h2
          className="text-5xl md:text-7xl mb-8 reveal reveal-delay-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
            color: "var(--color-milk)",
            lineHeight: "1.1",
          }}
        >
          Какой хранитель
          <em className="block" style={{ fontStyle: "italic", color: "var(--color-sand)" }}>
            нужен тебе сегодня?
          </em>
        </h2>

        <p
          className="mb-12 reveal reveal-delay-3"
          style={{
            fontFamily: "'Golos Text', sans-serif",
            fontWeight: 300,
            color: "rgba(245,240,232,0.7)",
            fontSize: "1rem",
            lineHeight: "1.8",
          }}
        >
          Каждый герой ждёт именно тебя.
        </p>

        <div className="reveal reveal-delay-4">
          <a href="#heroes" className="btn-primary rounded-none inline-block text-sm">
            <span>Выбрать героя</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-16 px-6"
      style={{
        background: "var(--color-dark)",
        borderTop: "1px solid rgba(212,184,150,0.1)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span
              className="text-2xl tracking-widest"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, color: "var(--color-milk)" }}
            >
              LIS<span style={{ color: "var(--color-gold)" }}>KIDS</span>
            </span>
            <p
              className="mt-2"
              style={{
                fontFamily: "'Golos Text', sans-serif",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.35)",
                letterSpacing: "0.1em",
              }}
            >
              Хранители внутреннего мира
            </p>
          </div>

          <div className="flex gap-8">
            {[
              { label: "Instagram", icon: "Instagram" },
              { label: "Telegram", icon: "Send" },
              { label: "ВКонтакте", icon: "MessageCircle" },
            ].map((s) => (
              <a
                key={s.label}
                href="#contacts"
                className="flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1"
                style={{ color: "rgba(245,240,232,0.4)" }}
              >
                <Icon
                  name={s.icon}
                  size={18}
                  style={{ transition: "color 0.3s ease" }}
                  className="hover:text-gold"
                />
                <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  {s.label}
                </span>
              </a>
            ))}
          </div>

          <div id="contacts">
            <p
              style={{
                fontFamily: "'Golos Text', sans-serif",
                fontSize: "0.75rem",
                color: "rgba(245,240,232,0.3)",
                letterSpacing: "0.05em",
              }}
            >
              © 2025 LISKIDS. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileFloatBtn() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href="#heroes"
      className="md:hidden fixed bottom-6 left-1/2 z-50 btn-primary rounded-full flex items-center gap-2"
      style={{
        transform: visible
          ? "translateX(-50%) translateY(0)"
          : "translateX(-50%) translateY(100px)",
        transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        boxShadow: "0 8px 32px rgba(139,107,74,0.35)",
        padding: "0.75rem 1.75rem",
      }}
    >
      <span style={{ position: "relative", zIndex: 1, fontSize: "0.75rem", letterSpacing: "0.1em" }}>
        Выбрать героя
      </span>
      <Icon name="ArrowRight" size={14} style={{ position: "relative", zIndex: 1, color: "var(--color-milk)" }} />
    </a>
  );
}

const Index = () => {
  useReveal();

  return (
    <div style={{ background: "var(--color-milk)" }}>
      <Nav />
      <HeroSection />
      <StatesSection />
      <HeroesSection />
      <FeaturesSection />
      <StorySection />
      <MobileFloatBtn />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;