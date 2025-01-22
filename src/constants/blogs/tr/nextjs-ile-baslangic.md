---
title: 'Next.js 14 ile Başlangıç: Kapsamlı Rehber'
date: '2024-01-04'
author: 'Sarah Johnson'
excerpt: 'Next.js 14 ile modern web uygulamaları geliştirmeyi öğrenin. Server Components, App Router ve en iyi pratikler dahil.'
coverImage: '/blog/getting-started-with-nextjs.png'
categories: ['nextjs']
---

# Next.js 14 ile Başlangıç: Kapsamlı Rehber

Next.js 14, web uygulamaları geliştirme şeklimizi kökten değiştiren yenilikler sunuyor. Bu rehberde, temel kavramları ve en iyi pratikleri inceleyeceğiz.

## İçindekiler

- [Giriş](#giriş)
- [Temel Özellikler](#temel-özellikler)
- [Projeyi Kurma](#projeyi-kurma)
- [İleri Düzey Kavramlar](#i̇leri-düzey-kavramlar)

## Giriş

Next.js 14, React framework geliştirmede önemli bir atılımı temsil ediyor. Geliştirilmiş performans ve geliştirici deneyimi ile modern web uygulamaları için tercih edilen çözüm haline geliyor.

> "Next.js 14 sadece bir güncelleme değil; web geliştirmenin yeniden tanımlanmasıdır."
> — Vercel Ekibi

## Temel Özellikler

### 1. Server Components

Server Components, Next.js 14'ün performans iyileştirmelerinin temelidir:

```jsx
// app/page.tsx
async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
```

### 2. Geliştirilmiş Veri Çekme

Next.js 14, yerleşik çözümlerle veri çekmeyi basitleştirir:

| Özellik                | Açıklama              | Kullanım Alanı          |
| ---------------------- | --------------------- | ----------------------- |
| `fetch`                | Yerleşik önbellekleme | API çağrıları           |
| `generateStaticParams` | Statik üretim         | Dinamik rotalar         |
| `revalidate`           | ISR                   | Periyodik güncellemeler |

## Projeyi Kurma

1. Yeni proje oluşturma:

   ```bash
   npx create-next-app@latest my-app --typescript
   ```

2. Bağımlılıkları yükleme:

   ```bash
   cd my-app
   npm install
   ```

3. Geliştirmeyi başlatma:
   ```bash
   npm run dev
   ```

## İleri Düzey Kavramlar

### Paralel Rotalar

Next.js 14, karmaşık düzenler için paralel rotalar sunar:

```jsx
// app/@modal/page.tsx
export default function Modal() {
  return (
    <dialog>
      <h2>Modal İçeriği</h2>
    </dialog>
  );
}
```

### Hata Yönetimi

Sağlam hata sınırları uygulayın:

```jsx
// app/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error,
  reset: () => void,
}) {
  return (
    <div className="error-container">
      <h2>Bir şeyler yanlış gitti!</h2>
      <button onClick={reset}>Tekrar dene</button>
    </div>
  );
}
```

## Performans İpuçları

1. **Görsel Optimizasyonu**

   ```jsx
   import Image from 'next/image';

   <Image src="/hero.jpg" alt="Hero" width={1200} height={600} priority />;
   ```

2. **Font Optimizasyonu**

   ```jsx
   import { Inter } from 'next/font/google';

   const inter = Inter({ subsets: ['latin'] });
   ```

## Kod Örnekleri

İşte Server Components ve TypeScript kullanan daha karmaşık bir örnek:

```typescript
interface Post {
  id: string;
  title: string;
  content: string;
}

async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose lg:prose-xl">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
```

## Son Düşünceler

Next.js 14, web geliştirmede önemli bir adımı temsil ediyor. Server Components ve App Router'ı benimseyerek, geliştiriciler daha hızlı, daha ölçeklenebilir uygulamaları daha az karmaşıklıkla oluşturabilirler.

---

_Daha fazla bilgi için [resmi Next.js dokümantasyonunu](https://nextjs.org/docs) ziyaret edin._
