/* Sammler der lokalen Stadt-Texte. Städte werden hier registriert,
   sobald ihre Texte geschrieben sind — bis dahin fallen ihre Seiten
   auf die generischen Standort-Texte zurück. */

import type { CityCopy, LocalDetail } from "./local/types";
import { bochum } from "./local/bochum";
import { bonn } from "./local/bonn";
import { dortmund } from "./local/dortmund";
import { duesseldorf } from "./local/duesseldorf";
import { duisburg } from "./local/duisburg";
import { essen } from "./local/essen";
import { koeln } from "./local/koeln";
import { krefeld } from "./local/krefeld";
import { leverkusen } from "./local/leverkusen";
import { meerbusch } from "./local/meerbusch";
import { moenchengladbach } from "./local/moenchengladbach";
import { neuss } from "./local/neuss";
import { oberhausen } from "./local/oberhausen";
import { ratingen } from "./local/ratingen";
import { solingen } from "./local/solingen";
import { wuppertal } from "./local/wuppertal";

export type { CityCopy, LocalDetail, LocalFaq, LocalPlace } from "./local/types";

export const localCopy: Record<string, CityCopy> = {
  bochum,
  bonn,
  dortmund,
  duesseldorf,
  duisburg,
  essen,
  koeln,
  krefeld,
  leverkusen,
  meerbusch,
  moenchengladbach,
  neuss,
  oberhausen,
  ratingen,
  solingen,
  wuppertal,
};

export const localDetail = (citySlug: string, serviceSlug: string): LocalDetail | undefined =>
  localCopy[citySlug]?.[serviceSlug];
