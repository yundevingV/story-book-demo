interface SectionDescriptionProps {
  children: React.ReactNode;
}
function SectionDescription({ children }: SectionDescriptionProps) {
  return (
    <p className="text-default-600 dark:text-default-400 text-base leading-relaxed">
      {children}
    </p>
  );
}

export default SectionDescription;
