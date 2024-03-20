
import CocktailCard from "./CocktailCard";
import Wrapper from "../assets/wrappers/CocktailList";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: "center" }}>No matching cocktails found...</h4>
    );
  }
  return (
    <Wrapper>
      {drinks.map((drink) => {
        return <CocktailCard key={drink.idDrink} {...drink} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
