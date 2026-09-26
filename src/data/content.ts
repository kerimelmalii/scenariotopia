import type { IconComponent } from '../types';
import { IconCloud, IconFileText, IconLayers, IconMapPin, IconNote, IconShuffle, IconUsers } from '../components/icons/icons';

export interface FeatureHighlight {
  icon: IconComponent;
  title: string;
  desc: string;
}

export const FEATURE_HIGHLIGHTS: readonly FeatureHighlight[] = [
  {
    icon: IconMapPin,
    title: 'Her Yerde Yaz',
    desc: 'Evde, otobüste ya da sette — yazdığın an kaydolur, kaldığın yerden devam edersin.',
  },
  {
    icon: IconUsers,
    title: 'Karakter Matrisi',
    desc: 'Her karakterin İstek (Want) ve İhtiyaç (Need) alanlarını tek bakışta düzenle.',
  },
  {
    icon: IconLayers,
    title: 'Dramatik Yapı',
    desc: '"Save the Cat!" şablonuyla olay örgünü sağlam temellere oturt.',
  },
];

export interface FeatureDetail {
  reverse?: boolean;
  kicker: string;
  title: string;
  desc: string;
  icon: IconComponent;
}

export const FEATURE_DETAILS: readonly FeatureDetail[] = [
  {
    kicker: 'Her yerde',
    title: 'İstediğin Yerde Yaz.',
    desc: 'Evde, otobüste, metroda ya da sette beklerken — senaryon her an parmaklarının ucunda. Yazdığın an kaydolur, kaldığın yerden devam edersin.',
    icon: IconMapPin,
  },
  {
    reverse: true,
    kicker: 'Karakter matrisi',
    title: 'Karakterlerini Düzenle.',
    desc: 'Karakterlerinin amacını (Want), içsel ihtiyacını (Need) ve karmaşık ilişki ağlarını tek bir bakışta cebine sığdır.',
    icon: IconUsers,
  },
  {
    kicker: 'Dramatik yapı',
    title: 'Dramatik Yapını Kur.',
    desc: '"Save the Cat!" ve Kahramanın Yolculuğu şablonlarıyla olay örgünü sağlam temellere oturt, hiçbir beat’i kaçırma.',
    icon: IconLayers,
  },
  {
    reverse: true,
    kicker: 'Kolay biçimlendirme',
    title: 'Blok Tabanlı Editör.',
    desc: 'Sahne, Eylem, Karakter, Diyalog ve Parantez bloklarıyla gerçek sektör standardına uygun yaz — format kurallarıyla uğraşma.',
    icon: IconFileText,
  },
  {
    kicker: 'Fikir sandığı',
    title: 'Hiçbir Fikri Kaçırma.',
    desc: 'Aklına gelen bir diyalog ya da sahne fikrini anında not al, dashboard’unda seni bekliyor olsun.',
    icon: IconNote,
  },
];

export interface HowItWorksStep {
  step: string;
  title: string;
  desc: string;
}

export const HOW_IT_WORKS: readonly HowItWorksStep[] = [
  {
    step: '01',
    title: 'Fikrini At Ortaya.',
    desc: 'Tek satırlık bir logline ile başla. Format kaygısı yok, boş sayfa korkusu yok.',
  },
  {
    step: '02',
    title: 'Yapıyı Kur.',
    desc: '"Save the Cat!" beat sheet\'i ve karakter matrisiyle hikayeni sağlam temellere otur.',
  },
  {
    step: '03',
    title: 'Sahneye Taşı.',
    desc: 'Blok editörle gerçek sektör formatında yaz, tek dokunuşla PDF olarak dışa aktar.',
  },
];

export interface DifferentiatorItem {
  icon: IconComponent;
  title: string;
  desc: string;
}

export const DIFFERENTIATORS: readonly DifferentiatorItem[] = [
  {
    icon: IconShuffle,
    title: 'Format kuralları otomatik',
    desc: 'Sahne, karakter ve diyalog girintilerini Word ya da Google Docs\'ta elle ayarlamazsın — biz hallederiz.',
  },
  {
    icon: IconCloud,
    title: 'Kurulum ve senkron beklemesi yok',
    desc: 'Tarayıcı aç, yaz. Hiçbir uygulama indirmeden, hiçbir dosya kaybetme riski olmadan.',
  },
  {
    icon: IconUsers,
    title: 'Karakter odaklı düşünmeye zorlar',
    desc: 'Her karakterin Want/Need alanı her zaman bir tık uzağında — düz metin editörlerinde bu iz kaybolur.',
  },
];

export interface PricingPlan {
  key: 'guest' | 'writer';
  label: string;
  price: string;
  priceSuffix?: string;
  desc: string;
  featured?: boolean;
}

export const PRICING_PLANS: readonly PricingPlan[] = [
  {
    key: 'guest',
    label: 'Misafir',
    price: '₺0',
    desc: 'Sınırsız senaryo yazımı ve PDF olarak dışa aktarma.',
  },
  {
    key: 'writer',
    label: 'Yazar',
    price: '₺89',
    priceSuffix: '/ay',
    desc: 'Karakter matrisi, dramatik yapı araçları, Akademi ve daha fazlası.',
    featured: true,
  },
];
