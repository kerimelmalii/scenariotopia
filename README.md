# Senaryotopia

Cebindeki senaryo ofisi — ekran yazarları için Apple tarzı, minimalist bir mobil-öncelikli senaryo yazım uygulaması prototipi.

## Nedir?

Senaryotopia, senaryo yazarlarının format kurallarıyla boğuşmadan, her yerde (evde, otobüste, sette) yazabilmesi için tasarlanmış bir konsept ürün. Bu depo, uçtan uca çalışan interaktif bir React prototipini tek bir `index.html` dosyasında barındırıyor.

## Özellikler

- **Landing sayfası** — ürünü tanıtan, Apple tarzı sade bir giriş sayfası.
- **Misafir akışı** — kayıt olmadan sınırsız senaryo yazımı ve PDF olarak dışa aktarma.
- **Blok tabanlı senaryo editörü** — Sahne / Eylem / Karakter / Diyalog / Parantez biçimlendirmesiyle gerçek sektör standardına uygun yazım.
- **Dramatik yapı şablonu** — "Save the Cat!" beat sheet'i (kayıtlı kullanıcılar için).
- **Karakter matrisi** — her karakter için İstek (Want) ve İhtiyaç (Need) alanları.
- **Dashboard** — son projeler, hızlı not alma ve günlük yazım hedefi belirleme.

## Çalıştırma

Herhangi bir kurulum gerekmez. `index.html` dosyasını bir tarayıcıda açmanız yeterli — React, ReactDOM ve Tailwind CSS CDN üzerinden yükleniyor, font olarak Google Fonts'tan Inter ve Courier Prime kullanılıyor.

GitHub Pages ile yayınlamak isterseniz: **Settings → Pages → Branch: main / (root)** seçip birkaç dakika içinde `https://<kullanıcı-adınız>.github.io/senaryotopia/` adresinden erişebilirsiniz.

## Teknik notlar

- Derleme adımı yok: React `React.createElement` ile (JSX'siz) yazıldı, tek dosyada UMD build'ler üzerinden çalışıyor.
- Bu bir prototip/tasarım demosudur — giriş, kayıt ve veri kaydı simüle edilmiştir, gerçek bir backend'e bağlı değildir.
