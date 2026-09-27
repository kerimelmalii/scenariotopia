import type { IconComponent } from '../types';
import {
  IconCalendar,
  IconCloud,
  IconDownload,
  IconFilm,
  IconFileText,
  IconLayers,
  IconMapPin,
  IconMic,
  IconNote,
  IconTarget,
  IconTheater,
  IconTrophy,
  IconTv,
  IconUsers,
  IconWifiOff,
} from '../components/icons/icons';

export const HERO = {
  kicker: 'Cebinizdeki yazı odası',
  title: ['Cebindeki', 'Senaryo Ofisi.'],
  desc: 'Fikirlerinizi yatağınızda, sette veya metroda yazın. Bilgisayarında başla, telefonunda sürdür, tabletinde Akademi dersine devam et — hepsi tek çatı altında.',
  note: '"Hemen Yazmaya Başla" kayıt gerektirmez — istediğinde hesap açarsın.',
};

export interface FeatureHighlight {
  icon: IconComponent;
  eyebrow: string;
  title: string;
  desc: string;
}

export const FEATURE_HIGHLIGHTS: readonly FeatureHighlight[] = [
  {
    icon: IconMapPin,
    eyebrow: 'Her yerde',
    title: 'Dilediğin Yerde Yaz.',
    desc: 'Evde, otobüste, metroda ya da sette beklerken — senaryon her an parmaklarının ucunda. Yazdığın an kaydolur, kaldığın yerden devam edersin.',
  },
  {
    icon: IconUsers,
    eyebrow: 'Karakter matrisi',
    title: 'Karakterlerini Düzenle.',
    desc: 'Karakterlerinin amacını (Want), içsel ihtiyacını (Need) ve gelişim çizgisini tek bir bakışta cebine sığdır — ister bir korsan kaptan, ister genç bir şövalye yaz.',
  },
  {
    icon: IconLayers,
    eyebrow: 'Dramatik yapı',
    title: 'Dramatik Yapını Gör.',
    desc: 'İster Kahramanın Yolculuğu, ister Save the Cat! — istediğin şablonu seç, olay örgünü sağlam temellere oturt, hiçbir beat\'i kaçırma.',
  },
];

export interface FormatType {
  icon: IconComponent;
  title: string;
  desc: string;
}

export const FORMAT_INTRO = {
  kicker: 'Format seçebilme',
  title: 'Her Format, Tek Uygulama.',
  desc: 'Ne yazdığını seç, Senaryotopia sektörün beklediği biçimlendirmeyi senin için uygulasın.',
};

export const FORMAT_TYPES: readonly FormatType[] = [
  {
    icon: IconFilm,
    title: 'Uzun Metraj Film',
    desc: 'Sahne numaralı, endüstri standardı film formatı, otomatik sayfa ve tahmini süre hesabıyla.',
  },
  {
    icon: IconTv,
    title: 'Dizi Senaryosu',
    desc: 'Sezon/bölüm yapısına uygun A ve B hikaye ayrımı, reklam arası ve kesme işaretleri kendiliğinden yerleşir.',
  },
  {
    icon: IconFileText,
    title: 'Kısa Film',
    desc: 'Sade, tek perdelik format; fikirden çekim listesine giden en kısa yol.',
  },
  {
    icon: IconTheater,
    title: 'Tiyatro Oyunu',
    desc: 'Perde ve sahne düzenine göre biçimlenen, sahne yönergeleri için ayrı stil kullanan tiyatro formatı.',
  },
];

export interface FeatureDetail {
  reverse?: boolean;
  title: string;
  desc: string;
  icon: IconComponent;
}

export const FEATURES_INTRO = {
  kicker: 'Özellikler',
  title: 'Yazarken ihtiyacın olan her şey.',
};

export const FEATURE_DETAILS: readonly FeatureDetail[] = [
  {
    title: 'Karakter Matrisi',
    desc: 'Her karakter için İstek (Want) ve İhtiyaç (Need) alanlarını kaydet, çelişkilerini takip et.',
    icon: IconUsers,
  },
  {
    reverse: true,
    title: 'Dramatik Yapı Şablonları',
    desc: '"Save the Cat!" ve Kahramanın Yolculuğu dahil hazır beat sheet şablonları.',
    icon: IconLayers,
  },
  {
    title: 'Otomatik Format Kontrolü',
    desc: 'Sahne, karakter ve diyalog blokları sektör standardına göre kendiliğinden biçimlenir.',
    icon: IconFileText,
  },
  {
    reverse: true,
    title: 'PDF Dışa Aktarım',
    desc: 'Tek tıkla, yapımcıya gönderilmeye hazır temiz bir PDF çıktısı al.',
    icon: IconDownload,
  },
  {
    title: 'Bulut Senkronizasyonu',
    desc: 'Telefonda başladığın sahneyi bilgisayarında kaldığın yerden sürdür.',
    icon: IconCloud,
  },
  {
    reverse: true,
    title: 'Çevrimdışı Yazım',
    desc: 'İnternet olmasa da yazmaya devam et, bağlantı gelince otomatik senkronize olsun.',
    icon: IconWifiOff,
  },
  {
    title: 'Fikir Sandığı',
    desc: 'Aklına gelen bir diyalog ya da sahne fikrini kaybetmeden anında not al.',
    icon: IconNote,
  },
  {
    reverse: true,
    title: 'Yazım Hedefleri',
    desc: 'Günlük sayfa hedefi belirle, hatırlatmalarla yazım disiplinini koru.',
    icon: IconTarget,
  },
];

export type CourseLevel = 'Başlangıç' | 'Orta Seviye' | 'İleri Seviye';

export interface AcademyCourse {
  categoryIndex: number;
  title: string;
  subtitle: string;
  level: CourseLevel;
  episodes: number;
  duration: string;
  instructor: string;
}

export const ACADEMY_INTRO = {
  kicker: 'Senaryotopia Akademi',
  title: 'Yazarken öğren, öğrenirken yaz.',
  desc: 'Kısa dersler ve gerçek senaryo örnekleriyle zanaatını geliştir. Kaydolan her yazar Akademi\'ye erişebilir.',
};

export const ACADEMY_COURSES: readonly AcademyCourse[] = [
  {
    categoryIndex: 0,
    title: 'Sıfırdan Senaryoya',
    subtitle: '30 Günde İlk Taslağın',
    level: 'Başlangıç',
    episodes: 8,
    duration: '3 sa 20 dk',
    instructor: 'Deniz Aksoy',
  },
  {
    categoryIndex: 1,
    title: 'Diyalog Ustalığı',
    subtitle: 'Kulağa Gerçek Gelen Konuşmalar',
    level: 'Orta Seviye',
    episodes: 6,
    duration: '2 sa 45 dk',
    instructor: 'Mira Solmaz',
  },
  {
    categoryIndex: 2,
    title: 'Yapısal Anatomi',
    subtitle: 'Save the Cat! ile Sahne Sahne Kurgu',
    level: 'Orta Seviye',
    episodes: 7,
    duration: '3 sa',
    instructor: 'Kaan Ergüven',
  },
  {
    categoryIndex: 3,
    title: 'Karakter Psikolojisi',
    subtitle: 'Want vs. Need Atölyesi',
    level: 'Orta Seviye',
    episodes: 5,
    duration: '2 sa 10 dk',
    instructor: 'Zeynep Ilgaz',
  },
  {
    categoryIndex: 4,
    title: 'Dizi Yazarlığı',
    subtitle: 'Sezon Arkı ve Bölüm Yapısı',
    level: 'İleri Seviye',
    episodes: 9,
    duration: '4 sa 15 dk',
    instructor: 'Baran Tekin',
  },
  {
    categoryIndex: 5,
    title: 'Kısa Filmden Uzun Metraja',
    subtitle: 'Ölçeklenebilir Hikaye',
    level: 'İleri Seviye',
    episodes: 6,
    duration: '2 sa 30 dk',
    instructor: 'Deniz Aksoy',
  },
];

export interface WritingEvent {
  categoryIndex: number;
  icon: IconComponent;
  title: string;
  format: string;
  when: string;
  desc: string;
}

export const EVENTS_INTRO = {
  kicker: 'Yazı etkinlikleri',
  title: 'Yaklaşan atölyeler ve buluşmalar.',
};

export const EVENTS: readonly WritingEvent[] = [
  {
    categoryIndex: 2,
    icon: IconUsers,
    title: 'Kahramanın Yolculuğu Atölyesi',
    format: 'Çevrimiçi',
    when: '14 Ekim 2026, 20:00',
    desc: 'Canlı atölyede kendi hikayeni 12 aşamaya oturt, soru-cevapla kapan.',
  },
  {
    categoryIndex: 0,
    icon: IconTrophy,
    title: 'Senaryotopia Kısa Film Yarışması 2026',
    format: 'Başvuru Açık',
    when: 'Son başvuru: 30 Kasım 2026',
    desc: 'Kazanan senaryo Akademi\'de yayınlanır ve bir prodüksiyon ekibiyle buluşturulur.',
  },
  {
    categoryIndex: 4,
    icon: IconCalendar,
    title: 'Yazarlar Buluşuyor: İstanbul',
    format: 'Yüz Yüze, İstanbul',
    when: '22 Kasım 2026, 19:00',
    desc: 'Aylık senarist buluşması; ağ kur, taslağını oku, geri bildirim al.',
  },
  {
    categoryIndex: 3,
    icon: IconMic,
    title: 'Diyalog Yazımı Canlı Yayını',
    format: 'Çevrimiçi',
    when: 'Her ayın ilk Çarşambası',
    desc: 'Misafir bir senaristle canlı diyalog atölyesi ve izleyici sorularının cevaplanması.',
  },
];

export interface PricingPlan {
  key: 'guest' | 'writer';
  label: string;
  price: string;
  priceSuffix?: string;
  desc: string;
  features: readonly string[];
  featured?: boolean;
}

export const PRICING_INTRO = {
  kicker: 'Fiyatlandırma',
  title: 'Basit, dürüst planlar.',
};

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    key: 'guest',
    label: 'Misafir',
    price: '₺0',
    desc: 'Kayıt olmadan sınırsız senaryo yazımı.',
    features: ['Sınırsız senaryo yazımı', 'PDF olarak dışa aktarma', 'Blok tabanlı format editörü'],
  },
  {
    key: 'writer',
    label: 'Yazar',
    price: '₺89',
    priceSuffix: '/ay',
    desc: 'Kayıtlı yazarlar için tüm araçlar.',
    features: [
      'Misafir\'deki her şey',
      'Karakter matrisi (Want/Need)',
      'Dramatik yapı şablonları',
      'Senaryotopia Akademi erişimi',
      'Fikir Sandığı ve yazım hedefleri',
    ],
    featured: true,
  },
];

export const NEWSLETTER = {
  kicker: 'Özel bülten',
  title: 'Yazarlık masana gelsin.',
  desc: 'Ayda bir: yazarlık teknikleri, sektörden haberler, Akademi indirimleri ve seçtiğimiz senaryo örnekleri doğrudan gelen kutunda. Spam yok, istediğin zaman çık.',
};
