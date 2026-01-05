export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="font-headline text-3xl md:text-4xl font-bold mb-8 border-b pb-4">Admin Panel</h1>
      {children}
    </div>
  );
}
