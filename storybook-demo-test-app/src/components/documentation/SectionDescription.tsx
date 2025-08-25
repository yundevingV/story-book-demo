interface SectionDescriptionProps {
  children: React.ReactNode;
}
function SectionDescription({ children }: SectionDescriptionProps) {
  return (
    <p className="text-base text-default-600 dark:text-default-400 leading-relaxed">
      {children}
    </p>
  );
}

export default SectionDescription;
