import { ImageResponse } from 'next/og';

import { getPostBySlug } from '@/common/libs/blog';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

interface OgImageProps {
  params: Promise<{ slug: string }>;
}

export default async function OgImage({ params }: OgImageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return new ImageResponse(<div>Not Found</div>, size);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #121212 0%, #1e1e2e 60%, #312e81 100%)',
          fontFamily: 'sans-serif',
          color: '#fff',
          padding: '70px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 24,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 12,
            }}
          >
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 22,
                  color: '#c7d2fe',
                  border: '2px solid #6366f1',
                  borderRadius: 999,
                  padding: '6px 18px',
                  display: 'flex',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 800,
              lineHeight: 1.15,
              display: 'flex',
              maxWidth: 900,
            }}
          >
            {post.title}
          </div>
          {post.description ? (
            <div
              style={{
                fontSize: 26,
                color: '#a5b4fc',
                lineHeight: 1.4,
                display: 'flex',
                maxWidth: 880,
              }}
            >
              {post.description}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span>Rizki Arbiansyah</span>
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#c7d2fe',
              display: 'flex',
            }}
          >
            rizkiarbiansyah.vercel.app
          </div>
        </div>
      </div>
    ),
    size,
  );
}
