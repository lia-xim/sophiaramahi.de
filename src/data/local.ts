/* Sammler der lokalen Stadt-Texte. Städte werden hier registriert,
   sobald ihre Texte geschrieben sind — bis dahin fallen ihre Seiten
   auf die generischen Standort-Texte zurück. */

import type { CityCopy, LocalDetail } from "./local/types";
import { duesseldorf } from "./local/duesseldorf";
import { koeln } from "./local/koeln";
import { krefeld } from "./local/krefeld";
import { meerbusch } from "./local/meerbusch";
import { neuss } from "./local/neuss";
import { ratingen } from "./local/ratingen";
import { solingen } from "./local/solingen";
import { wuppertal } from "./local/wuppertal";

export type { CityCopy, LocalDetail, LocalFaq, LocalPlace } from "./local/types";

export const localCopy: Record<string, CityCopy> = {
  duesseldorf,
  koeln,
  krefeld,
  meerbusch,
  neuss,
  ratingen,
  solingen,
  wuppertal,
};

export const localDetail = (citySlug: string, serviceSlug: string): LocalDetail | undefined =>
  localCopy[citySlug]?.[serviceSlug];
