import { useEffect, useRef } from "react";
// @ts-ignore
import mountMarketplace from "marketplace/Dashboard";

export const Marketplace = () => {
  const ref = useRef(null);

  useEffect(() => {
    const app = mountMarketplace(ref.current);

    return () => {
      app.unmount();
    };
  }, []);

  return <div ref={ref} />;
};

export default Marketplace;
