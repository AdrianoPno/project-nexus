export default function Loading() {
  return (
    <div className="p-8 space-y-8 container mx-auto pt-28">
      {/* Skeleton do Hero */}
      <div className="h-96 w-full bg-gray-200 animate-pulse rounded-3xl" />

      {/* Skeletons do Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-64 bg-gray-200 animate-pulse rounded-2xl" />
        <div className="h-64 bg-gray-200 animate-pulse rounded-2xl" />
      </div>
    </div>
  );
}
