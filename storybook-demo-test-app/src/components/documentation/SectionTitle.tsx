interface SectionTitleProps {
  children: React.ReactNode;
}
function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-default-800 dark:text-default-200 mb-4 text-2xl font-bold">
      {children}
    </h2>
  );
}

export default SectionTitle;
