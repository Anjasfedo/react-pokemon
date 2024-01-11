import React, { useState, useEffect } from "react";

const ErrorBoundary = (props: any) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const componentDidCatch = (error: any) => {
      setHasError(true);
    };

    window.addEventListener("error", componentDidCatch);

    return () => {
      window.removeEventListener("error", componentDidCatch);
    };
  }, []);

  if (hasError) {
    return props.fallback;
  }

  return props.children;
};

export default ErrorBoundary;
