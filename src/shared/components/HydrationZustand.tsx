import React, { ReactNode } from "react";
import { useEffect, useState } from "react";

const HydrationZustand = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return <>{isHydrated ? <>{children}</> : null}</>;
};

export default HydrationZustand;
