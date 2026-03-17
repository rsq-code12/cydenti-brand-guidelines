import { clsx } from "clsx";

export function BrandLogo({ 
  className, 
  variant = "full", 
  color = "blue",
  withSlogan = false
}: { 
  className?: string; 
  variant?: "full" | "icon"; 
  color?: "blue" | "white" | "slate";
  withSlogan?: boolean;
}) {
  let src = "";

  if (variant === "icon") {
    switch (color) {
      case "white":
        src = "/CYDENTI DASHBOARD P 2/Brandmark[white].svg";
        break;
      case "slate":
        src = "/CYDENTI DASHBOARD P 2/Brandmark[black].svg";
        break;
      default: // blue
        src = "/CYDENTI DASHBOARD P 2/Brandmark[original].svg";
        break;
    }
  } else {
    // Full logo
    if (withSlogan) {
       switch (color) {
        case "white":
          src = "/CYDENTI DASHBOARD P 2/Cydenti primary logo with slogan[White].svg";
          break;
        case "slate":
           src = "/CYDENTI DASHBOARD P 2/Cydenti primary logo with slogan[Black].svg"; 
           break;
        default: // blue
          src = "/CYDENTI DASHBOARD P 2/Cydenti primary logo with slogan[Original].svg";
          break;
      }
    } else {
      switch (color) {
        case "white":
          src = "/CYDENTI DASHBOARD P 2/Cydenti primary logo [white].svg";
          break;
        case "slate":
          src = "/CYDENTI DASHBOARD P 2/Cydenti primary logo.svg";
          break;
        default: // blue
          src = "/CYDENTI DASHBOARD P 2/Cydenti primary logo [blue-primary].svg";
          break;
      }
    }
  }

  return (
    <img 
      src={src} 
      alt={`Cydenti ${variant} logo ${color} ${withSlogan ? 'with slogan' : ''}`} 
      className={clsx("h-auto w-auto max-w-full", className)} 
    />
  );
}
