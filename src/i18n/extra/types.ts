export interface CarouselGroup { id: string; tab: string; title: string; items: string[] }

export interface ExtraCopy {
  ui: { of: string; groups: string; docs: string; details: string; menu: string; heroIntro: string };
  setup: { steps: string[] };
  ai: { title: string; intro: string; exampleLabel: string; example: string; resultLabel: string; results: { title: string; detail: string }[]; points: string[]; link: string };
  carousel: { note: string; label: string; groups: CarouselGroup[] };
}
