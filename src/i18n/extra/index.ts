import type { Locale } from '../shared';
import type { ExtraCopy } from './types';
import { en } from './en';
import { de } from './de';
import { es } from './es';
import { fr } from './fr';
import { ro } from './ro';
import { ar } from './ar';

export type { ExtraCopy } from './types';
export const extra: Record<Locale, ExtraCopy> = { en, de, es, fr, ro, ar };
