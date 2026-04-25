import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Flame, Wind, Droplets, Home, Sparkles, ShoppingBag, User, Search, Play, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Real hero photos
const EMIRO_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/035e76a2-8a75-4012-b786-6501103bbb95.png";
const NERELIY_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/ea7a0815-d083-4f46-84b3-96c4fa65cdfb.png";
const AREYA_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/c81c87b4-2625-4276-8fc0-4bad85f666e6.png";

const heroes = [
  {
    name: "Нерелий",
    role: "Хранитель Потока",
    price: "€49",
    icon: Droplets,
    need: "Когда внутри слишком много",
    image: "💧",
    photo: NERELIY_IMG,
    color: "from-sky-200/30 to-blue-500/20",
    story: "Помогает проживать эмоции мягко и отпускать лишнее.",
  },
  {
    name: "Игнитрис",
    role: "Хранитель Воли",
    price: "€49",
    icon: Flame,
    need: "Когда нужен первый шаг",
    image: "🔥",
    photo: null,
    color: "from-orange-200/30 to-amber-500/20",
    story: "Зажигает внутреннюю искру и возвращает движение.",
  },
  {
    name: "Листорог",
    role: "Хранитель Роста",
    price: "€49",
    icon: Leaf,
    need: "Когда нужны силы",
    image: "🌿",
    photo: null,
    color: "from-green-200/30 to-emerald-600/20",
    story: "Возвращает ресурс, устойчивость и ощущение роста.",
  },
  {
    name: "Айрея",
    role: "Хранитель Пространства",
    price: "€49",
    icon: Wind,
    need: "Когда в голове шумно",
    image: "🌬️",
    photo: AREYA_IMG,
    color: "from-cyan-100/30 to-slate-300/30",
    story: "Приносит лёгкость, ясность и внутренний воздух.",
  },
  {
    name: "Эмиро",
    role: "Хранитель Сердца",
    price: "€49",
    icon: Heart,
    need: "Когда хочется тепла",
    image: "🤍",
    photo: EMIRO_IMG,
    color: "from-rose-100/40 to-pink-300/30",
    story: "Помогает снова чувствовать, доверять и открываться.",
  },
  {
    name: "Древлин",
    role: "Хранитель Укрытия",
    price: "€49",
    icon: Home,
    need: "Когда нужен покой",
    image: "🌳",
    photo: null,
    color: "from-stone-200/30 to-lime-700/20",
    story: "Создаёт ощущение дома, безопасности и опоры внутри.",
  },
];

const quizOptions = [
  { label: "Мне тревожно", hero: heroes[0] },
  { label: "Я устал", hero: heroes[2] },
  { label: "Мне тяжело", hero: heroes[5] },
  { label: "Я запутался", hero: heroes[3] },
  { label: "Я закрылся", hero: heroes[4] },
  { label: "Мне нужна энергия", hero: heroes[1] },
];

function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#b8945f]">{eyebrow}</p>}
      <h2 className="font-serif text-4xl text-[#36291d] md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-[#6f6254] md:text-lg">{text}</p>}
    </div>
  );
}

function HeroToy({ hero, className = "", delay = 0 }: { hero: (typeof heroes)[0]; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl ${className}`}
      style={{ background: "linear-gradient(135deg, #b8793a, #6c3d1f)" }}
    >
      <div className="absolute inset-2 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.22),transparent_30%),repeating-linear-gradient(110deg,rgba(255,255,255,.1)_0_1px,transparent_1px_10px)] opacity-60" />
      {hero.photo ? (
        <img
          src={hero.photo}
          alt={hero.name}
          className="z-10 h-full w-full object-contain p-3 drop-shadow-2xl"
        />
      ) : (
        <div className="z-10 text-6xl drop-shadow-lg md:text-7xl">{hero.image}</div>
      )}
      <div className="absolute bottom-5 h-3 w-1/2 rounded-full bg-black/25 blur-md" />
    </motion.div>
  );
}

export default function Index() {
  const [selected, setSelected] = useState(heroes[0]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5efe4] text-[#34271e]">
      {/* NAV */}
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#11150f]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-[#f6ead5]">
          <div className="font-serif text-2xl leading-none tracking-widest">LITTLE<br />SPIRITS</div>
          <div className="hidden items-center gap-8 text-sm text-[#f0ddbd] md:flex">
            <a href="#collection" className="cursor-pointer hover:text-white transition-colors">Коллекция</a>
            <a href="#about" className="cursor-pointer hover:text-white transition-colors">О мире</a>
            <a href="#quiz" className="cursor-pointer hover:text-white transition-colors">Найти героя</a>
            <a href="#reviews" className="cursor-pointer hover:text-white transition-colors">Отзывы</a>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <Search size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
            <User size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity hidden sm:block" />
            <ShoppingBag size={18} className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity" />
            <Button className="rounded-full bg-[#ead9bd] px-4 py-2 text-xs text-[#2d241b] hover:bg-white sm:px-6 sm:text-sm">
              Найти героя
            </Button>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <section className="relative min-h-screen bg-[#10140e] pt-28 text-[#f8ecd7]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,196,103,.35),transparent_20%),radial-gradient(circle_at_70%_35%,rgba(98,131,77,.25),transparent_30%),linear-gradient(to_bottom,rgba(0,0,0,.1),#10140e_90%)]" />
        <div className="absolute inset-0 opacity-25 bg-[repeating-linear-gradient(90deg,transparent_0_80px,rgba(255,255,255,.04)_80px_81px)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9 }}>
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-[#d9bc85]">маленькие хранители</p>
            <h1 className="font-serif text-5xl leading-[0.95] md:text-7xl lg:text-8xl">У каждого есть свой хранитель</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#e0d1bb] md:mt-8 md:text-lg">
              Little Spirits — первая встреча ребёнка со своим внутренним миром и красивое напоминание взрослому о себе настоящем.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
              <Button className="rounded-full bg-[#ead9bd] px-6 py-5 text-[#2d241b] hover:bg-white md:px-8 md:py-6">
                Найти своего героя
              </Button>
              <Button variant="outline" className="rounded-full border-[#d7bd8d]/50 bg-transparent px-6 py-5 text-[#ead9bd] hover:bg-white/10 md:px-8 md:py-6">
                Смотреть коллекцию
              </Button>
            </div>
          </motion.div>

          <div className="relative h-[440px] md:h-[560px] lg:h-[620px]">
            <div className="absolute inset-x-0 bottom-0 h-44 rounded-[50%] bg-[#4a371e]/70 blur-2xl" />
            <HeroToy hero={heroes[1]} delay={0.1} className="absolute left-[3%] top-[18%] h-52 w-36 rotate-[-3deg] md:h-72 md:w-44" />
            <HeroToy hero={heroes[2]} delay={0.2} className="absolute left-[27%] top-[4%] h-64 w-44 md:h-96 md:w-56" />
            <HeroToy hero={heroes[3]} delay={0.3} className="absolute right-[7%] top-[10%] h-56 w-36 rotate-[3deg] md:h-80 md:w-48" />
            <HeroToy hero={heroes[5]} delay={0.4} className="absolute bottom-[4%] left-[2%] h-52 w-36 md:h-72 md:w-44" />
            <HeroToy hero={heroes[0]} delay={0.5} className="absolute bottom-0 left-[34%] h-48 w-36 md:h-64 md:w-48" />
            <HeroToy hero={heroes[4]} delay={0.6} className="absolute bottom-[2%] right-[8%] h-52 w-36 md:h-72 md:w-44" />
          </div>
        </div>
      </section>

      {/* ABOUT CHILDREN */}
      <section id="about" className="relative bg-[#10140e] px-5 py-16 text-[#f6ead5] md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="overflow-hidden rounded-[2rem] border-0 bg-[#2b261e] shadow-2xl">
            <div className="h-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,215,150,.45),transparent_20%),linear-gradient(135deg,#3b2a1d,#12150f)] p-6 md:p-8">
              <div className="flex min-h-[280px] items-center justify-center rounded-[1.5rem] border border-[#e8d4ad]/20 bg-black/20 gap-4 md:min-h-[360px]">
                <img src={EMIRO_IMG} alt="Эмиро" className="h-36 w-28 object-contain drop-shadow-2xl md:h-52 md:w-40" />
                <img src={NERELIY_IMG} alt="Нерелий" className="h-36 w-28 -mt-6 object-contain drop-shadow-2xl md:h-52 md:w-40" />
              </div>
            </div>
          </Card>
          <div className="rounded-[2rem] border border-[#e5d1aa]/15 bg-[#1b1d16]/90 p-7 md:p-14">
            <h2 className="font-serif text-3xl leading-tight md:text-5xl lg:text-6xl">Ребёнок чувствует раньше, чем умеет объяснить</h2>
            <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2">
              <div>
                <p className="mb-4 text-[#bda984]">Иногда он не может сказать:</p>
                {["Мне тревожно", "Мне грустно", "Мне страшно", "Мне нужна поддержка"].map((x) => (
                  <p key={x} className="mb-3 flex items-center gap-3 text-[#ead9bd]">
                    <Sparkles size={16} className="shrink-0" />{x}
                  </p>
                ))}
              </div>
              <div className="border-t border-[#e5d1aa]/20 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <p className="mb-4 text-[#bda984]">Но он может сказать:</p>
                <div className="rounded-2xl border border-[#d6ba85]/30 bg-[#ead9bd]/10 p-4 text-lg md:p-5 md:text-xl">
                  Сегодня мне нужен Нерелий
                </div>
                <p className="mt-4 leading-7 text-[#d5c4aa] md:mt-5">Маленькие хранители помогают говорить о чувствах через игру.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#efe1ca] px-5 py-16 md:py-20">
        <SectionTitle title="Как это работает" />
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:mt-12 md:grid-cols-3">
          {([
            ["1. Выбери героя", "Интуитивно, по состоянию или по знаку зодиака.", Heart],
            ["2. Играй и проживай", "Через персонажа чувства становятся понятнее и безопаснее.", Play],
            ["3. Расти вместе", "Герои становятся частью важных разговоров дома.", Leaf],
          ] as const).map(([title, text, IconComp]) => (
            <Card key={title} className="rounded-[2rem] border-0 bg-[#f8f0e2]/80 p-7 shadow-sm md:p-8">
              <CardContent className="p-0 text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#b8945f]/30 text-[#8a7048] md:mb-6 md:h-16 md:w-16">
                  <IconComp />
                </div>
                <h3 className="font-serif text-xl md:text-2xl">{title}</h3>
                <p className="mt-3 leading-7 text-[#756856] md:mt-4">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* COLLECTION */}
      <section id="collection" className="bg-[#10140e] px-5 py-16 text-[#f8ecd7] md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#b8945f]">коллекция</p>
              <h2 className="font-serif text-4xl md:text-5xl">Коллекция хранителей</h2>
            </div>
            <Button variant="outline" className="rounded-full border-[#d7bd8d]/40 bg-transparent text-[#ead9bd] hover:bg-white/10">
              Смотреть всех
            </Button>
          </div>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-5">
            {heroes.map((h) => {
              const IconComp = h.icon;
              return (
                <motion.div key={h.name} whileHover={{ y: -8 }}>
                  <Card className="overflow-hidden rounded-[1.7rem] border border-[#e5d1aa]/10 bg-[#181a14] text-[#f8ecd7] shadow-xl">
                    <div className={`relative flex items-end justify-center bg-gradient-to-br ${h.color}`} style={{ minHeight: "13rem" }}>
                      {h.photo ? (
                        <img
                          src={h.photo}
                          alt={h.name}
                          className="h-52 w-full object-contain pt-3"
                        />
                      ) : (
                        <div className="flex h-52 w-full items-center justify-center text-6xl md:text-7xl">{h.image}</div>
                      )}
                    </div>
                    <CardContent className="p-4 md:p-5">
                      <IconComp size={17} className="mb-2 text-[#c59d5f] md:mb-3 md:size-5" />
                      <h3 className="font-serif text-lg md:text-2xl">{h.name}</h3>
                      <p className="text-xs text-[#c7b79a]">{h.role}</p>
                      <p className="mt-2 min-h-10 text-xs leading-5 text-[#e3d4bc] md:mt-3 md:min-h-12 md:leading-6">{h.need}</p>
                      <div className="mt-3 flex items-center justify-between md:mt-5">
                        <span className="text-sm md:text-base">{h.price}</span>
                        <Button size="icon" className="h-7 w-7 rounded-full bg-[#d7bd8d] text-[#21170f] hover:bg-white md:h-9 md:w-9">+</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUIZ */}
      <section id="quiz" className="relative bg-[#e8dcc9] px-5 py-16 md:py-24">
        <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_40%,rgba(121,154,177,.35),transparent_25%),radial-gradient(circle_at_90%_20%,rgba(255,255,255,.8),transparent_22%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Какой герой нужен тебе сейчас?</h2>
            <p className="mt-4 text-[#6f6254]">Выбери то, что чувствуешь прямо сейчас.</p>
            <div className="mt-7 grid gap-3 grid-cols-2 md:mt-8 md:grid-cols-3">
              {quizOptions.map((o) => (
                <button
                  key={o.label}
                  onClick={() => setSelected(o.hero)}
                  className="rounded-full border border-[#b8a17d]/30 bg-white/55 px-4 py-3 text-sm shadow-sm transition hover:bg-white active:scale-95"
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
          <Card className="rounded-[2rem] border-0 bg-white/65 p-6 shadow-xl backdrop-blur-md md:p-8">
            <CardContent className="p-0">
              <div
                className="mx-auto flex h-60 w-40 items-center justify-center overflow-hidden rounded-[2rem] shadow-2xl md:h-72 md:w-52"
                style={{ background: "linear-gradient(135deg, #c89155, #6d4223)" }}
              >
                {selected.photo ? (
                  <img src={selected.photo} alt={selected.name} className="h-full w-full object-contain" />
                ) : (
                  <span className="text-8xl">{selected.image}</span>
                )}
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.25em] text-[#92744d] md:mt-6">Твой герой</p>
              <h3 className="mt-2 font-serif text-3xl md:text-4xl">{selected.name}</h3>
              <p className="mt-2 text-[#675b4b]">{selected.role}</p>
              <p className="mt-3 leading-7 text-[#675b4b] md:mt-4">{selected.story}</p>
              <Button className="mt-5 rounded-full bg-[#596441] px-7 text-white hover:bg-[#414a2e] md:mt-6">
                Познакомиться
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* MEANING */}
      <section className="bg-[#f7efe3] px-5 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] bg-[linear-gradient(135deg,#2d3425,#a67845)] p-3 shadow-2xl">
            <div className="flex min-h-[280px] items-center justify-center gap-2 rounded-[1.6rem] bg-black/20 p-6 md:min-h-[420px] md:gap-4 md:p-8">
              <img src={NERELIY_IMG} alt="Нерелий" className="h-36 w-28 object-contain drop-shadow-2xl md:h-52 md:w-36" />
              <img src={AREYA_IMG} alt="Айрея" className="h-36 w-28 -mt-6 object-contain drop-shadow-2xl md:h-52 md:w-36" />
              <img src={EMIRO_IMG} alt="Эмиро" className="h-36 w-28 object-contain drop-shadow-2xl md:h-52 md:w-36" />
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#b8945f]">смысл</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">Это больше, чем игрушка</h2>
            <p className="mt-5 text-base leading-9 text-[#6f6254] md:mt-6 md:text-lg">
              Это первый мягкий язык эмоций для ребёнка. И красивое напоминание взрослому о внутреннем мире.
            </p>
            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
              {([
                ["Для детей", "Понимать чувства через игру"],
                ["Для родителей", "Говорить о важном легко"],
                ["Для взрослых", "Талисман со смыслом"],
              ] as const).map(([t, d]) => (
                <div key={t} className="rounded-3xl bg-white/70 p-5 shadow-sm md:p-6">
                  <h4 className="font-serif text-xl md:text-2xl">{t}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#756856] md:mt-3">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREORDER */}
      <section className="bg-[#10140e] px-5 py-16 text-[#f6ead5] md:py-24">
        <SectionTitle eyebrow="первая коллекция" title="Little Spirits First Edition" text="Ручная работа. Ограниченный тираж. Нумерованные фигурки." />
        <div className="mx-auto mt-10 grid max-w-5xl items-center gap-8 rounded-[2.5rem] border border-[#e5d1aa]/15 bg-[#181a14] p-6 md:mt-12 md:grid-cols-[1fr_1.2fr] md:p-8">
          <div className="overflow-hidden rounded-[2rem] bg-[#ead9bd] p-5 shadow-inner md:p-8">
            <div className="flex items-center justify-center gap-3">
              <img src={EMIRO_IMG} alt="Эмиро" className="h-32 w-24 object-contain drop-shadow-xl md:h-44 md:w-36" />
              <img src={NERELIY_IMG} alt="Нерелий" className="h-32 w-24 -mt-4 object-contain drop-shadow-xl md:h-44 md:w-36" />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-4 gap-2 text-center md:gap-3">
              {[["12", "дней"], ["08", "часов"], ["34", "мин."], ["19", "сек."]].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-[#e5d1aa]/15 p-3 md:p-5">
                  <div className="font-serif text-2xl md:text-4xl">{n}</div>
                  <div className="text-xs text-[#bda984]">{l}</div>
                </div>
              ))}
            </div>
            <Button className="mt-6 rounded-full bg-[#d7bd8d] px-7 py-5 text-[#21170f] hover:bg-white md:mt-8 md:px-8 md:py-6">
              Забронировать
            </Button>
            <p className="mt-3 text-sm text-[#c7b79a] md:mt-4">Бесплатная доставка при предзаказе</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-[#efe1ca] px-5 py-16 md:py-24">
        <SectionTitle title="Они уже нашли своего героя" />
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:mt-12 md:grid-cols-3">
          {[
            "Мой ребёнок стал спокойнее и начал говорить о чувствах через героев.",
            "Купила Эмиро себе на рабочий стол. Он каждый день напоминает быть мягче к себе.",
            "Это больше, чем декор. Спасибо за такую красоту.",
          ].map((q, i) => (
            <Card key={q} className="rounded-[2rem] border-0 bg-white/70 p-6 shadow-sm md:p-7">
              <CardContent className="p-0">
                <div className="mb-4 flex text-[#c59d5f]">
                  {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} size={16} fill="currentColor" />)}
                </div>
                <p className="leading-8 text-[#5c5143]">{q}</p>
                <p className="mt-5 text-sm text-[#92744d] md:mt-6">Покупатель #{i + 1}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#f7efe3] px-5 py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_2fr_1.2fr] md:gap-10">
          <div>
            <div className="font-serif text-3xl tracking-widest md:text-4xl">LITTLE<br />SPIRITS</div>
            <p className="mt-4 text-sm leading-7 text-[#6f6254] md:mt-5">Маленькие хранители большого внутреннего мира</p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm text-[#6f6254] md:gap-6">
            <div>
              <h4 className="mb-3 text-[#34271e] md:mb-4">Магазин</h4>
              <p className="mb-2">Все товары</p>
              <p className="mb-2">Коллекции</p>
              <p>Подарки</p>
            </div>
            <div>
              <h4 className="mb-3 text-[#34271e] md:mb-4">О мире</h4>
              <p className="mb-2">История</p>
              <p className="mb-2">Философия</p>
              <p>Материалы</p>
            </div>
            <div>
              <h4 className="mb-3 text-[#34271e] md:mb-4">Помощь</h4>
              <p className="mb-2">Доставка</p>
              <p className="mb-2">Возврат</p>
              <p>Контакты</p>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-serif text-xl md:text-2xl">Войти в мир Little Spirits</h4>
            <div className="flex overflow-hidden rounded-full bg-white shadow-sm">
              <input className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none md:px-5" placeholder="Ваш e-mail" />
              <Button className="rounded-full bg-[#596441] px-4 md:px-5">
                <Mail size={18} />
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-[#d6c5a8]/40 pt-7 text-center text-xs text-[#9c8e7a]">
          © 2025 Little Spirits. Все права защищены.
        </div>
      </footer>
    </main>
  );
}
