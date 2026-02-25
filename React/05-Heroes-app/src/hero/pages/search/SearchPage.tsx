import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/hero/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";

export const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Superhero search"
        description="Discover, explore, and manage your favorite superheroes and villains"
      />

      {/*Stat Dashboard*/}
      <HeroStats />

      {/*Search and filter controls*/}

      <SearchControls />
    </>
  );
};

export default SearchPage;
