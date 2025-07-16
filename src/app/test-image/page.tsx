import Image from 'next/image';

export default function TestImage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Image</h1>
      <div className="border p-4">
        <p className="mb-2">Image path: /images/quantum-article.png</p>
        <div className="relative w-64 h-48">
          <Image
            src="/images/quantum-article.png"
            alt="Test Quantum Article Image"
            fill
            style={{
              objectFit: 'cover',
            }}
            onError={(e) => {
              console.error('Image failed to load:', e);
            }}
          />
        </div>
      </div>
    </div>
  );
}
