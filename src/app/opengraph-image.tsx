import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #121212 0%, #1e1e2e 60%, #312e81 100%)',
          fontFamily: 'sans-serif',
          color: '#fff',
          textAlign: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            marginBottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          Rizki Arbiansyah
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#a5b4fc',
            marginBottom: 16,
          }}
        >
          Web Developer &amp; IT Support
        </div>
        <div
          style={{
            fontSize: 28,
            color: '#c7d2fe',
          }}
        >
          Laravel · MySQL · Tailwind CSS · IT Support &amp; Networking
        </div>
      </div>
    ),
    size,
  );
}
