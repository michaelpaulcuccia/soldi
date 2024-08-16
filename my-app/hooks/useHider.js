import { usePathname } from "next/navigation";
import { hideHeroPaths } from "../constants";

const useHideHero = () => {
  const pathname = usePathname();

  // Returns true if the hero should be hidden
  return !hideHeroPaths.includes(pathname);
};

export default useHideHero;
