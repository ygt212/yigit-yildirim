export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-[100]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary/10 border-t-[#60A5FA] rounded-full animate-spin"></div>
        <p className="text-primary/60 text-sm font-medium tracking-widest animate-pulse">
          YÜKLENİYOR...
        </p>
      </div>
    </div>
  );
}
