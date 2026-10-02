import { ThemeProvider } from "next-themes";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* <div className="h-full">{children}</div> */}
      {children}
    </ThemeProvider>
  );
};

export default Provider;
