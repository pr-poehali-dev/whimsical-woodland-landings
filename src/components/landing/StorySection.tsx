import { Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { EMIRO_IMG, NERELIY_IMG, AREYA_IMG } from "./data";

function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#b8945f]">{eyebrow}</p>}
      <h2 className="font-serif text-4xl text-[#36291d] md:text-6xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-[#6f6254] md:text-lg">{text}</p>}
    </div>
  );
}

export function MeaningSection() {
  return (
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
  );
}

export function PreorderSection() {
  return (
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
  );
}

export function ReviewsSection() {
  return (
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
  );
}

export function Footer() {
  return (
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
  );
}
