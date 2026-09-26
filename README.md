# Scenariotopia

Cebindeki senaryo ofisi — ekran yazarları için Apple tarzı, minimalist bir mobil-öncelikli senaryo yazım uygulaması prototipi.

## Nedir?

Scenariotopia, senaryo yazarlarının format kurallarıyla boğuşmadan, her yerde (evde, otobüste, sette) yazabilmesi için tasarlanmış bir konsept ürün. Tasarım dili, senaryo formatının kendisinden (slugline, Courier Prime, sahne numaraları) ilham alır — jenerik bir SaaS şablonu değil, yazarlık zanaatına özgü bir kimlik hedefler.

## Özellikler

- **Landing sayfası** — ürünü tanıtan, editoryal ve sade bir giriş sayfası; "Nasıl çalışır" ve "Neden Scenariotopia" bölümleriyle.
- **Ayrı Özellikler sayfası** — tüm özelliklerin detaylı anlatıldığı, kendi rotası olan bir sayfa.
- **Misafir akışı** — kayıt olmadan sınırsız senaryo yazımı ve PDF olarak dışa aktarma.
- **Blok tabanlı senaryo editörü** — Sahne / Eylem / Karakter / Diyalog / Parantez biçimlendirmesiyle gerçek sektör standardına uygun yazım.
- **Dramatik yapı şablonu** — "Save the Cat!" beat sheet'i (kayıtlı kullanıcılar için).
- **Karakter matrisi** — her karakter için İstek (Want) ve İhtiyaç (Need) alanları.
- **Dashboard** — son projeler, hızlı not alma ve günlük yazım hedefi belirleme.

## Teknoloji

Proje, **Vite + React 18 + TypeScript** ile inşa edilmiş bir SPA'dır (tek dosyalık prototipten gerçek bir bileşen mimarisine taşındı):

- `src/App.tsx` — uygulama durumu ve sayfa yönlendirmesi (view state, gerçek bir router olmadan).
- `src/components/` — `landing`, `features`, `dashboard`, `workspace`, `auth` ve paylaşılan `ui` bileşenleri.
- `src/data/` — statik içerik (özellik listeleri, fiyatlandırma) ve tohum verisi (`seed.ts`).
- `src/types.ts` — tüm domain modelleri (Project, ScriptBlock, CharacterEntry, …) için tip tanımları.
- Stil: Tailwind CSS (gerçek derleme adımıyla, CDN üzerinden değil), tasarım token'ları `src/index.css` içindeki CSS değişkenlerinde.
- Fontlar (`Inter`, `Courier Prime`) `@fontsource` ile self-host edilir; harici bir CDN'e bağımlılık yoktur.

## Çalıştırma

```bash
npm install
npm run dev       # geliştirme sunucusu (http://localhost:5173)
npm run build     # tip kontrolü + üretim derlemesi (dist/)
npm run preview   # üretim derlemesini yerelde önizleme
npm run lint      # ESLint
```

GitHub Pages gibi statik bir barındırma için `npm run build` sonrası oluşan `dist/` klasörünü yayınlayın.

## Teknik notlar

- Bu bir prototip/tasarım demosudur — giriş, kayıt ve veri kaydı simüle edilmiştir, gerçek bir backend'e bağlı değildir.
- Tüm state React state'inde tutulur (kalıcı depolama yok); sayfa yenilendiğinde sıfırlanır.
