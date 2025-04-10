const Partners = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground mb-8">Trusted by businesses worldwide</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="flex justify-center">
              <div className="h-12 w-32 bg-muted rounded flex items-center justify-center">
                <span className="text-muted-foreground font-bold">Brand {index}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
