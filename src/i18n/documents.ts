import type { Locale } from './shared';
import type { DocumentCopy } from './docs/types';
import { en } from './docs/en';
import { de } from './docs/de';
import { es } from './docs/es';
import { fr } from './docs/fr';
import { ro } from './docs/ro';
import { ar } from './docs/ar';

export type { DocumentCopy } from './docs/types';
export const documents: Record<Locale, DocumentCopy> = { en, de, es, fr, ro, ar };
