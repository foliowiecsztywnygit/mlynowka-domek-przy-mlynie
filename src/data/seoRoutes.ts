export const SITE_URL = 'https://www.pieniny-sardynia.pl';

export interface RouteSeoMeta {
  title: string;
  description: string;
  siteName: string;
  url: string;
  image: string;
  imageWidth?: string;
  imageHeight?: string;
  imageAlt: string;
  type?: 'website' | 'article';
}

export const MLYNOWKA_META: RouteSeoMeta = {
  title: 'Młynówka — Domek przy Młynie | Krościenko nad Dunajcem, Pieniny',
  description:
    'Całoroczny drewniany domek w stylu alpejskim 70 m² na wyłączność. Ponad 1 ha ogrodu z zabytkową młynówką i bezpośrednim wyjściem na szlak na Trzy Korony. Krościenko nad Dunajcem.',
  siteName: 'Młynówka — Domek przy Młynie',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/mlynowka/857438807.jpg`,
  imageWidth: '1024',
  imageHeight: '628',
  imageAlt: 'Młynówka Domek przy Młynie — całoroczny drewniany domek w Krościenku nad Dunajcem',
  type: 'website',
};

export const ITALY_META: RouteSeoMeta = {
  title: "Il Dolce Tramonto Apartment — Sardynia | Trinità d'Agultu e Vignola",
  description:
    'Apartament wakacyjny 47 m² na północnej Sardynii (dla 4 osób) z prywatnym balkonem, panoramicznym widokiem na zachód słońca nad Zatoką Asinara, 2 basenami i bliskością plaż Isola Rossa.',
  siteName: 'Il Dolce Tramonto Apartment — Sardynia',
  url: `${SITE_URL}/wlochy`,
  image: `${SITE_URL}/sardynia/tlohero.jpg`,
  imageWidth: '2048',
  imageHeight: '1536',
  imageAlt: 'Il Dolce Tramonto Apartment — zachód słońca nad morzem na Sardynii',
  type: 'website',
};

export const BLOG_META: RouteSeoMeta = {
  title: 'Blog & Przewodnik po Pieninach | Młynówka — Domek przy Młynie',
  description:
    'Dziennik i przewodnik Młynówki w Krościenku nad Dunajcem. Odkryj szlaki w Pieninach, porady turystyczne i historię zabytkowego młyna.',
  siteName: 'Młynówka — Domek przy Młynie',
  url: `${SITE_URL}/blog`,
  image: `${SITE_URL}/mlynowka/857438807.jpg`,
  imageWidth: '1024',
  imageHeight: '628',
  imageAlt: 'Blog i przewodnik po Pieninach — Młynówka Domek przy Młynie',
  type: 'website',
};
