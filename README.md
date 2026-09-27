# Senaryotopia

Cebindeki senaryo ofisi — ekran yazarları için şık, premium ve mobil-öncelikli bir senaryo yazım uygulaması prototipi.

## Nedir?

Senaryotopia, senaryo yazarlarının format kurallarıyla boğuşmadan, her yerde (evde, otobüste, sette) yazabilmesi için tasarlanmış bir konsept ürün. Tasarım dili, senaryo formatının kendisinden (slugline etiketler, Courier Prime, sahne numaraları) ilham alır — jenerik bir SaaS şablonu değil, yazarlık zanaatına özgü bir kimlik hedefler. Marka kimliği, logodaki altı renkli çizgi motifinden türeyen bir "kategori rengi" sistemine dayanır: her kurs, etkinlik ve özellik kartı bu altı renkten birini taşır.

## Sayfalar

- **Anasayfa** — hero, özellik/format/Akademi/fiyat teaser'ları ve bülten kaydı.
- **Özellikler** — 8 özelliğin tek tek anlatıldığı detay sayfası.
- **Format** — desteklenen 4 senaryo formatı (Uzun Metraj, Dizi, Kısa Film, Tiyatro).
- **Akademi** — kurs kataloğu (6 kurs) ve yaklaşan yazı etkinlikleri (4 etkinlik).
- **Fiyatlandırma** — planlar ve sık sorulan sorular.
- **Dashboard / Editör** — kayıtlı ve misafir kullanıcılar için çalışma alanı: blok tabanlı senaryo editörü, dramatik yapı (Save the Cat!) şablonu, karakter matrisi (Want/Need), fikir sandığı ve günlük yazım hedefi.

## Teknoloji

Proje, **Vite + React 18 + TypeScript** ile inşa edilmiş bir SPA'dır:

- `src/App.tsx` — uygulama durumu ve sayfa yönlendirmesi (view state, gerçek bir router olmadan).
- `src/components/` — `landing`, `features`, `format`, `academy`, `pricing`, `dashboard`, `workspace`, `auth` ve paylaşılan `ui` bileşenleri.
- `src/data/content.ts` — tüm pazarlama metinleri ve içerik listeleri (özellikler, formatlar, kurslar, etkinlikler, fiyatlandırma).
- `src/types.ts` — tüm domain modelleri (Project, ScriptBlock, CharacterEntry, …) için tip tanımları.
- `src/lib/` — Supabase istemcisi ve auth servisi (henüz uygulamaya bağlanmadı, `supabase/migrations/` altında şema hazır).
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

`main` dalına her push'ta `.github/workflows/deploy-pages.yml` otomatik build alıp GitHub Pages'e yayınlar (repo ayarlarında Settings → Pages → Source: **GitHub Actions** seçili olmalı).

## Teknik notlar

- Bu bir prototip/tasarım demosudur — giriş, kayıt ve veri kaydı şu an simüle edilmiştir, gerçek bir backend'e henüz bağlı değildir.
- Tüm uygulama state'i React state'inde tutulur (kalıcı depolama yok); sayfa yenilendiğinde sıfırlanır.
