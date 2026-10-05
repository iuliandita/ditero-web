export interface CarouselGroup { id: string; tab: string; title: string; items: string[] }

export interface ExtraCopy {
  ui: { prev: string; next: string; of: string; groups: string; docs: string };
  ai: { title: string; intro: string; exampleLabel: string; example: string; points: string[]; note: string; link: string };
  carousel: { title: string; intro: string; note: string; label: string; groups: CarouselGroup[] };
}
