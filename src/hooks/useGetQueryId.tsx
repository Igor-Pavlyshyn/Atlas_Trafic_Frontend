import { useLayoutEffect, useState } from "react";

export const useGetQueryId = () => {
  const [id, setId] = useState<string | null>(null);

  useLayoutEffect(() => {
    const handlePopState = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const newId = searchParams.get("id");
      setId(newId);
    };

    window.addEventListener("popstate", handlePopState);

    handlePopState();

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return { id };
};
