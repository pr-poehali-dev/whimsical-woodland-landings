import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Leaf, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { heroes, quizOptions, EMIRO_IMG, NERELIY_IMG, type Hero } from "./data";

function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#b8945f]">{eyebrow}</p>}
      <h2 className="font-serif text-4xl text-[#36291d] md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-[#6f6254] md:text-lg">{text}</p>}
    </div>
  );
}

export function AboutSection() {
  return (
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
  );
}

export function HowItWorksSection() {
  return (
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
  );
}

export function CollectionGrid() {
  return (
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
                      <img src={h.photo} alt={h.name} className="h-52 w-full object-contain pt-3" />
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
  );
}

export function QuizSection({ selected, setSelected }: { selected: Hero; setSelected: (h: Hero) => void }) {
  return (
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
  );
}
