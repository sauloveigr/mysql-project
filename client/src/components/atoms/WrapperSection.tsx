interface WrapperSectionProps {
   children: JSX.Element;
}

export const WrapperSection = ({ children }: WrapperSectionProps) => (
   <section className="flex items-center p-8 text-center bg-primary-grey w-full h-screen bg-[url('./assets/background.png')] bg-center">
      {children}
   </section>
);
