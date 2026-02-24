export {};

declare global {
  interface Window {
    WBOTdata?: any;
    WBOTopenChat?: () => void;
    WBOTcloseChat?: () => void;
    WBOTsendMessage?: () => void;
    WBOTstartSocket?: () => void;
    $?: {
      each?: (obj: any, cb: (key: any, value: any) => void) => void;
      [key: string]: any;
    };
  }
}

