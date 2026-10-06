export interface FeatureGroup { id: string; title: string; items: string[] }

export interface ExtraCopy {
  ui: { platforms: string; groups: string; docs: string; details: string; menu: string; heroIntro: string; assistantTeaser: string };
  setup: { steps: string[] };
  ai: { title: string; intro: string; exampleLabel: string; example: string; resultLabel: string; results: { title: string; detail: string }[]; source: string; shortSource: string; points: string[]; link: string };
  features: { groups: FeatureGroup[] };
}
