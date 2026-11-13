export interface ItalyGalleryPhoto {
  id: string;
  src: string;
  title: string;
  category: 'balkon' | 'wnetrze' | 'kuchnia' | 'lazienka' | 'basen' | 'okolica';
  categoryLabel: string;
  description: string;
}

export const italyGalleryPhotos: ItalyGalleryPhoto[] = [
  // TARAS & ZACHÓD SŁOŃCA
  {
    id: 'balkon-lampion-zachod',
    src: '/sardynia/balkon-lampion-zachod.jpg',
    title: 'Wieczorny zachód słońca na balkonie z lampionem',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Magiczna złota godzina na prywatnym tarasie — ciepłe światło plecionego lampionu i panoramiczny widok na Zatokę Asinara.'
  },
  {
    id: 'balkon-widok-dzien',
    src: '/sardynia/balkon-widok-dzien.jpg',
    title: 'Widok z apartamentu na taras i bezkresne morze',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Słoneczny poranek i wyjście na prywatny balkon ze stolikiem kawowym, fotelami oraz panoramą wybrzeża Isola Rossa.'
  },
  {
    id: 'balkon-zachod-koc',
    src: '/sardynia/balkon-zachod-koc.jpg',
    title: 'Przytulny wieczór o zachodzie słońca na tarasie',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Komfortowy fotel tarasowy z miękkim kocem i bezpośredni widok na słońce zachodzące za wzgórzami Sardynii.'
  },
  {
    id: 'hero-sunset',
    src: '/sardynia/hero-sunset.jpg',
    title: 'Spektakularny zachód słońca nad Zatoką Asinara',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Szeroka panorama morza i wyspy Asinara o zachodzie słońca z prywatnego tarasu Il Dolce Tramonto Apartment.'
  },
  {
    id: '697993505',
    src: '/sardynia/697993505.jpg',
    title: 'Balkon ze stolikiem i kieliszkami o zachodzie słońca',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Komfortowe fotele, stolik kawowy z dwoma kieliszkami i panoramiczny widok na morze oraz dachy Trinità d\'Agultu.'
  },
  {
    id: '697993963',
    src: '/sardynia/697993963.jpg',
    title: 'Dwa kieliszki Aperol Spritz na tle zachodu słońca',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Kultowy kadr z balkonu apartamentu — wieczorny relaks przy zachodzącym słońcu i ciepłej morskiej bryzie.'
  },
  {
    id: '698001617',
    src: '/sardynia/698001617.jpg',
    title: 'Wygodne fotele wypoczynkowe na balkonie',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Miękkie poduchy i zielone rośliny w donicach tworzące przytulny kącik wypoczynkowy na świeżym powietrzu.'
  },
  {
    id: '697993635',
    src: '/sardynia/697993635.jpg',
    title: 'Złoty zachód słońca nad horyzontem morskim',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Magiczna gra świateł na falach Morza Śródziemnego widziana bezpośrednio z balkonu apartamentu.'
  },
  {
    id: '697993638',
    src: '/sardynia/697993638.jpg',
    title: 'Złoto-błękitne niebo nad Zatoką Asinara',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Spokojny wieczór i ciepłe barwy zachodu słońca rozciągające się nad linią wybrzeża północnej Sardynii.'
  },
  {
    id: '697993645',
    src: '/sardynia/697993645.jpg',
    title: 'Popołudniowe słońce i blask na wodach zatoki',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Szeroka panorama morza skąpanego w popołudniowym słońcu widziana z tarasu apartamentu.'
  },
  {
    id: '697993741',
    src: '/sardynia/697993741.jpg',
    title: 'Zachód słońca nad dachami Trinità d\'Agultu',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Ciepłe wieczorne światło nad tradycyjnymi terakotowymi dachami i linią brzegową w oddali.'
  },
  {
    id: '697993651',
    src: '/sardynia/697993651.jpg',
    title: 'Poranne espresso na balkonie z widokiem na morze',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Idealny początek każdego dnia — świeżo zaparzona włoska kawa z panoramą błękitnego wybrzeża Sardynii.'
  },
  {
    id: '698000121',
    src: '/sardynia/698000121.jpg',
    title: 'Wieczorny toast na prywatnym balkonie',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Prawdziwe \'Il Dolce Tramonto\' — kieliszek wina przy stoliku tarasowym z widokiem na wzgórza i morze.'
  },
  {
    id: '698001490',
    src: '/sardynia/698001490.jpg',
    title: 'Purpurowo-czerwony zmierzch nad Sardynią',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Ciepłe, purpurowo-złote odcienie nieba tuż po zachodzie słońca nad Zatoką Asinara.'
  },
  {
    id: '697993925',
    src: '/sardynia/697993925.jpg',
    title: 'Ceramiczna dekoracja balkonowa na tle morza',
    category: 'balkon',
    categoryLabel: 'Taras & Zachód Słońca',
    description: 'Śródziemnomorskie detale na balkonie apartamentu z błękitnym horyzontem w tle.'
  },

  // WNĘTRZE & ANTRESOLA
  {
    id: 'salon-antresola-aktualny',
    src: '/sardynia/salon-antresola-aktualny.jpg',
    title: 'Jasny salon z antresolą i widokiem na morze',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Przestronna część dzienna 47 m² z drewnianymi schodami, antresolą zabezpieczoną marynistyczną siatką, stołem i wyjściem na balkon.'
  },
  {
    id: 'antresola-sypialnia',
    src: '/sardynia/antresola-sypialnia.jpg',
    title: 'Przestronna sypialnia na antresoli z łóżkiem małżeńskim',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Górny poziom apartamentu z drewnianą podłogą, wygodnym łóżkiem małżeńskim, lampą stojącą i bezpieczną siatką żeglarską.'
  },
  {
    id: 'antresola-sypialnia-pion',
    src: '/sardynia/antresola-sypialnia-pion.jpg',
    title: 'Sypialnia na antresoli — przytulny kącik nocny',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Komfortowe podwójne łóżko ze świeżą turkusową narzutą, kinkietami do czytania i stylowymi morskimi dodatkami.'
  },
  {
    id: 'salon-sofa-aneks',
    src: '/sardynia/salon-sofa-aneks.jpg',
    title: 'Strefa wypoczynkowa z rozkładaną sofą w salonie',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Wygodna dwuosobowa sofa z funkcją spania dla 2 gości, śródziemnomorskie dekoracje ścienne oraz bezpośredni dostęp do aneksu.'
  },
  {
    id: '697993939',
    src: '/sardynia/697993939.jpg',
    title: 'Perspektywa z salonu na antresolę i jadalnię',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Wysoki bielony sufit z belkami, wygodne schody na poddasze sypialniane i otwarta przestrzeń dzienna.'
  },
  {
    id: '698001548',
    src: '/sardynia/698001548.jpg',
    title: 'Drewniane schody i konstrukcja antresoli',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Solidne drewniane schody prowadzące z poziomu salonu na antresolę oraz biała barierka z marynistyczną siatką.'
  },
  {
    id: '697993624',
    src: '/sardynia/697993624.jpg',
    title: 'Widok z antresoli w dół na salon',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Ażurowa siatka żeglarska zabezpieczająca antresolę, gwarantująca bezpieczeństwo i poczucie przestrzeni.'
  },
  {
    id: '697993956',
    src: '/sardynia/697993956.jpg',
    title: 'Kącik relaksu z plecionym fotelem na antresoli',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Przytulne miejsce do czytania książki i chwili wyciszenia na górnym poziomie apartamentu.'
  },
  {
    id: '698001572',
    src: '/sardynia/698001572.jpg',
    title: 'Marynistyczne dekoracje i strefa TV w salonie',
    category: 'wnetrze',
    categoryLabel: 'Wnętrze & Antresola',
    description: 'Subtelne morskie detale na stole jadalnianym oraz szafka z telewizorem Smart TV w głębi salonu.'
  },

  // KUCHNIA & JADALNIA
  {
    id: 'jadalnia-widok-morze',
    src: '/sardynia/jadalnia-widok-morze.jpg',
    title: 'Stół jadalniany z widokiem na Morze Śródziemne',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Okrągły biały stół dla 4 osób z plecionymi podkładkami i bezpośrednim widokiem przez drzwi balkonowe na morze.'
  },
  {
    id: '698001523',
    src: '/sardynia/698001523.jpg',
    title: 'Część jadalniana przy wyjściu na taras',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Wygodne krzesła i stół ustawiony tuż przy przeszklonych drzwiach prowadzących na słoneczny balkon.'
  },
  {
    id: '697993545',
    src: '/sardynia/697993545.jpg',
    title: 'W pełni wyposażony aneks kuchenny',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Płyta gazowa, mini piekarnik, zlew, półki z naczyniami i komplet garnków do przygotowywania włoskich posiłków.'
  },
  {
    id: '697993580',
    src: '/sardynia/697993580.jpg',
    title: 'Zastawa stołowa, kieliszki i naczynia',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Kompletna zastawa: kieliszki do wina, szklanki, miski oraz ręczniki kuchenne uporządkowane na półkach w aneksie.'
  },
  {
    id: '697993756',
    src: '/sardynia/697993756.jpg',
    title: 'Czajnik elektryczny i poranna herbata',
    category: 'kuchnia',
    categoryLabel: 'Kuchnia & Jadalnia',
    description: 'Stylowy czajnik elektryczny i akcesoria do parzenia kawy oraz herbaty zawsze pod ręką.'
  },

  // ŁAZIENKA
  {
    id: 'lazienka-aktualna',
    src: '/sardynia/lazienka-aktualna.jpg',
    title: 'Nowoczesna łazienka z prysznicem, bidetem i pralką',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Jasna łazienka wyposażona w kabinę prysznicową, pralkę automatyczną, umywalkę z szafką, tradycyjny włoski bidet oraz toaletę.'
  },
  {
    id: '697993613',
    src: '/sardynia/697993613.jpg',
    title: 'Zestaw kosmetyków powitalnych dla gości',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Starannie przygotowane kosmetyki kąpielowe czekające na gości po podróży.'
  },
  {
    id: '697993791',
    src: '/sardynia/697993791.jpg',
    title: 'Świeża lawenda — detal w łazience',
    category: 'lazienka',
    categoryLabel: 'Łazienka',
    description: 'Śródziemnomorski akcent aromatycznej lawendy zdobiący wnętrze jasnej łazienki.'
  },

  // BASENY & RELAKS
  {
    id: '697993552',
    src: '/sardynia/697993552.jpg',
    title: 'Dwa odkryte baseny w kompleksie wakacyjnym',
    category: 'basen',
    categoryLabel: 'Baseny & Relaks',
    description: 'Widok z góry na dwa baseny rekreacyjne z kamiennym tarasem słonecznym dostępne bezpłatnie dla gości apartamentu.'
  },
  {
    id: '697993664',
    src: '/sardynia/697993664.jpg',
    title: 'Basen rezydencji z panoramicznym widokiem na morze',
    category: 'basen',
    categoryLabel: 'Baseny & Relaks',
    description: 'Krystalicznie czysta woda basenowa z drabinką i widokiem na błękit Morza Śródziemnego oraz dachy Trinità d\'Agultu.'
  },

  // PLAŻE & OKOLICA
  {
    id: '697993607',
    src: '/sardynia/697993607.jpg',
    title: 'Piaszczysta plaża z turkusową wodą (5–6 km)',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Szeroka plaża ze złotym piaskiem i łagodnym zejściem do krystalicznego morza zaledwie kilka minut jazdy od apartamentu.'
  },
  {
    id: '697993823',
    src: '/sardynia/697993823.jpg',
    title: 'Malownicza ścieżka na plażę i czerwone skały',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Zielone zejście wśród śródziemnomorskiej roślinności prosto na urokliwą zatoczkę z ciepłym piaskiem.'
  },
  {
    id: '697993783',
    src: '/sardynia/697993783.jpg',
    title: 'Zatoka plażowa w cieniu nadmorskich sosen',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Kameralna plaża z jasnym piaskiem i turkusową wodą idealna na całodzienny wypoczynek.'
  },
  {
    id: '697993801',
    src: '/sardynia/697993801.jpg',
    title: 'Granitowe wybrzeże i fale Isola Rossa (6 km)',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Charakterystyczne czerwone skały granitowe północnej Sardynii obmywane przez lazurowe fale.'
  },
  {
    id: '697993867',
    src: '/sardynia/697993867.jpg',
    title: 'Zabytkowa wieża aragońska nad skalistym wybrzeżem',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Historyczna kamienna wieża strażnicza na tle krystalicznego morza i wysp północno-zachodniej Sardynii.'
  },
  {
    id: '697993810',
    src: '/sardynia/697993810.jpg',
    title: 'Szmaragdowa zatoka i zielone wzgórza wybrzeża',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Dziewicza śródziemnomorska przyroda, zalesione wzgórza i szafirowe wody zatok północnej Sardynii.'
  },
  {
    id: '697993597',
    src: '/sardynia/697993597.jpg',
    title: 'Panorama wybrzeża Isola Rossa ze wzgórz Trinità d\'Agultu',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Rozległy widok ze wzgórz na nadmorskie miasteczko Isola Rossa i bezkres Morza Śródziemnego.'
  },
  {
    id: '697993855',
    src: '/sardynia/697993855.jpg',
    title: 'Szeroki horyzont północnej Sardynii',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Zielone wzgórza łagodnie opadające w stronę lazurowego wybrzeża Zatoki Asinara.'
  },
  {
    id: '697993679',
    src: '/sardynia/697993679.jpg',
    title: 'Kwitnące wzgórza i widok na wybrzeże',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Wiosenno-letnia śródziemnomorska makia z panoramicznym widokiem na nadmorskie zatoki.'
  },
  {
    id: '697993700',
    src: '/sardynia/697993700.jpg',
    title: 'Naturalne okno skalne z widokiem na morze',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Unikalna formacja granitowa na sardyńskim wybrzeżu otwierająca widok na błękit wody.'
  },
  {
    id: '697993947',
    src: '/sardynia/697993947.jpg',
    title: 'Białe klify wapienne północno-zachodniej Sardynii',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Monumentalne nadmorskie klify idealne na całodniową wycieczkę samochodową lub rejs.'
  },
  {
    id: '697993874',
    src: '/sardynia/697993874.jpg',
    title: 'Dzika plaża i drewniany drogowskaz nad brzegiem',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Spokojny klimat sardyńskich plaż, gdzie czas płynie znacznie wolniej.'
  },
  {
    id: '697993880',
    src: '/sardynia/697993880.jpg',
    title: 'Różowe flamingi w nadmorskiej lagunie',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Dzikie flamingi odpoczywające w płytkich wodach laguny na tle sardyńskich gór.'
  },
  {
    id: '697993916',
    src: '/sardynia/697993916.jpg',
    title: 'Zachód słońca na skalistej plaży',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Złota godzina nad wodą podczas wieczornego spaceru wybrzeżem.'
  },
  {
    id: '697993773',
    src: '/sardynia/697993773.jpg',
    title: 'Zachód słońca wśród nadmorskich kwiatów',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Ciepłe światło sardyńskiego wieczoru nad zielonymi wzgórzami.'
  },
  {
    id: '697993557',
    src: '/sardynia/697993557.jpg',
    title: 'Nadmorska promenada z kwitnącymi krzewami',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Malownicza trasa spacerowa tuż nad brzegiem Morza Śródziemnego.'
  },
  {
    id: '697993630',
    src: '/sardynia/697993630.jpg',
    title: 'Drewniana kładka prowadząca na plażę',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Wygodne zejście wśród drzew piniowych na pobliską piaszczystą plażę.'
  },
  {
    id: '697993979',
    src: '/sardynia/697993979.jpg',
    title: 'Dzikie maki nad brzegiem Morza Śródziemnego',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Kolorowa przyroda Sardynii kwitnąca tuż nad linią brzegową.'
  },
  {
    id: '697993837',
    src: '/sardynia/697993837.jpg',
    title: 'Kościół Chiesa di Trinità d\'Agultu o zmierzchu',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Charakterystyczna kamienna dzwonnica i serce miasteczka Trinità d\'Agultu (1,5 km od apartamentu).'
  },
  {
    id: '697993589',
    src: '/sardynia/697993589.jpg',
    title: 'Klimatyczne uliczki Trinità d\'Agultu wieczorem',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Tradycyjne kamienne domy i nastrojowe uliczki miasteczka w ciepłym świetle latarni.'
  },
  {
    id: '697993538',
    src: '/sardynia/697993538.jpg',
    title: 'Kamienna tablica poetycka Grazii Deleddy',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Lokalna kultura i pamiątkowa inskrypcja poświęcona sardyńskiej noblistce.'
  },
  {
    id: '697993715',
    src: '/sardynia/697993715.jpg',
    title: 'Palmy na tle wieczornego nieba Sardynii',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Ciepłe śródziemnomorskie wieczory pod rozgwieżdżonym niebem.'
  },
  {
    id: '697993568',
    src: '/sardynia/697993568.jpg',
    title: 'Świeże cytryny dojrzewające w słońcu',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Aromatyczne sady cytrusowe spotykane na każdym kroku w okolicy.'
  },
  {
    id: '697993690',
    src: '/sardynia/697993690.jpg',
    title: 'Prawdziwa włoska pizza z owocami morza',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Lokalne restauracje i pizzerie w Trinità d\'Agultu oraz Isola Rossa oddalone o kilka minut.'
  },
  {
    id: '697993890',
    src: '/sardynia/697993890.jpg',
    title: 'Ilustrowana mapa atrakcji Sardynii',
    category: 'okolica',
    categoryLabel: 'Plaże & Okolica',
    description: 'Inspiracja do odkrywania północnego wybrzeża wyspy — od Badesi i Isola Rossa po Costa Paradiso.'
  }
];
