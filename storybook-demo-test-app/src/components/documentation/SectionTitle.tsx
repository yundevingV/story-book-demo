function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-default-800 dark:text-default-200 mb-4">
      {children}
    </h2>
  );
}

export { SectionTitle };
export default SectionTitle;
