import { usePathname } from "next/navigation";

const useHideHero = () => {
  const pathname = usePathname();

  // Define paths where the header should not be shown
  //TO DO - make this a const
  const hideHeaderPaths = ["/testpage"];

  // Return true if the header should be hidden
  return !hideHeaderPaths.includes(pathname);
};

export default useHideHero;
