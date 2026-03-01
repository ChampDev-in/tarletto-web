export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded bg-primary flex items-center justify-center text-background text-xs font-bold font-display">
            T
          </span>
          <span className="font-display font-bold tracking-wider text-foreground">Tarletto<span className="text-primary">.</span></span>
        </div>
        
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Tarletto Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
