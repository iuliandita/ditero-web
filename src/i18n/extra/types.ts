export interface FeatureGroup { id: string; title: string; summary: string; items: string[] }

export interface ExtraCopy {
  ui: { tour: string; view: string; desktop: string; phone: string; groups: string; docs: string; details: string; menu: string; heroIntro: string; platforms: string };
  setup: { steps: string[] };
  ai: { title: string; intro: string; exampleLabel: string; example: string; resultLabel: string; results: { title: string; detail: string }[]; source: string; shortSource: string; points: string[]; link: string };
  features: { groups: FeatureGroup[] };
}
