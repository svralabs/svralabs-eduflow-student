export default function Skeleton({ width = '100%', height = '20px', className = '' }) {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded ${className}`}
      style={{ width, height }}
    />
  );
}
