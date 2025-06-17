export const SkeletonItem = () => {
  return (
    <li className="border-b border-border pb-2 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-full mb-1" />
      <div className="h-3 bg-gray-200 rounded w-1/3" />
    </li>
  );
};
