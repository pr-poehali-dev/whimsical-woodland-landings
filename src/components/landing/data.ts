import { Heart, Leaf, Flame, Wind, Droplets, Home } from "lucide-react";

export const EMIRO_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/035e76a2-8a75-4012-b786-6501103bbb95.png";
export const NERELIY_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/ea7a0815-d083-4f46-84b3-96c4fa65cdfb.png";
export const AREYA_IMG = "https://cdn.poehali.dev/projects/bcefdb1b-af34-4e7f-b67b-50f2c5278e95/bucket/c81c87b4-2625-4276-8fc0-4bad85f666e6.png";

export const heroes = [
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

export const quizOptions = [
  { label: "Мне тревожно", hero: heroes[0] },
  { label: "Я устал", hero: heroes[2] },
  { label: "Мне тяжело", hero: heroes[5] },
  { label: "Я запутался", hero: heroes[3] },
  { label: "Я закрылся", hero: heroes[4] },
  { label: "Мне нужна энергия", hero: heroes[1] },
];

export type Hero = (typeof heroes)[0];
