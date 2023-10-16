import React, { useCallback, useEffect, useRef, useState } from "react";

export const useDynamicSvgImport = (iconName: string) => {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  const importSvgIcon = useCallback(async (): Promise<void> => {
    try {
      importedIconRef.current = await import(`../assets/svg/${iconName}.svg`);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [iconName]);

  useEffect(() => {
    setLoading(true);

    importSvgIcon();
  }, [importSvgIcon]);

  return { error, loading, SvgIcon: importedIconRef.current };
};
