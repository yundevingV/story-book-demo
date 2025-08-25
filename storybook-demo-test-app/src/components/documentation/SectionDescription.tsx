function SectionDescription({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base text-default-600 dark:text-default-400 leading-relaxed">
      {children}
    </p>
  );
}

export { SectionDescription };
export default SectionDescription;
