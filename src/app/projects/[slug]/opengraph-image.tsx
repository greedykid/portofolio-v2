import { ImageResponse } from 'next/og';

import { SITE_URL } from '@/common/constant/app';
import { getProjectBySlug } from '@/common/libs/projects';

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
  const project = getProjectBySlug(slug);
  if (!project) return new ImageResponse(<div>Not Found</div>, size);

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
              fontSize: 26,
              fontWeight: 700,
              color: '#a5b4fc',
              display: 'flex',
              gap: 12,
            }}
          >
            {project.stacks.slice(0, 4).map((stack) => (
              <span
                key={stack}
                style={{
                  border: '2px solid #6366f1',
                  borderRadius: 999,
                  padding: '6px 18px',
                  display: 'flex',
                }}
              >
                {stack}
              </span>
            ))}
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.15,
              display: 'flex',
              maxWidth: 900,
            }}
          >
            {project.title}
          </div>
          <div
            style={{
              fontSize: 27,
              color: '#c7d2fe',
              lineHeight: 1.4,
              display: 'flex',
              maxWidth: 880,
            }}
          >
            {project.description}
          </div>
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
            }}
          >
            Rizki Arbiansyah
          </div>
          <div
            style={{
              fontSize: 22,
              color: '#c7d2fe',
              display: 'flex',
            }}
          >
            {new URL(SITE_URL).hostname}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
