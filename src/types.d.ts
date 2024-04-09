type AboutMenuProps = {
    focusNext: () => void;
    focusPrevious: () => void;
    onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
  };

  type Options = {
    initialActiveIndex: null | number;
    vertical: boolean;
    handlers?: {
      onKeyDown: (
        event: React.KeyboardEvent<HTMLAnchorElement>,
        fns: { setActiveIndex: React.Dispatch<React.SetStateAction<number | null>> },
      ) => void;
    };
  };
  type AdmissionsMenuProps = {
    focusNext: () => void;
    focusPrevious: () => void;
    onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
  };

  type FooterProps = {
    value: any;
  }
  