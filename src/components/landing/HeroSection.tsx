import { motion } from "framer-motion";
import { ShoppingBag, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroes, type Hero } from "./data";

function HeroToy({ hero, className = "", delay = 0 }: { hero: Hero; className?: string; delay?: number }) {
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

export function Nav() {
  return (
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
  );
}

export function HeroSection() {
  return (
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
  );
}
