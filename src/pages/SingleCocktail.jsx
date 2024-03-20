import axios from "axios";
import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${url}${id}`);
      return data;
    },
  };
};

export const cocktailLoader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const SingleCocktail = () => {
  const { id } = useLoaderData();

  const { data } = useQuery(singleCocktailQuery(id));

  if (!data) return <Navigate to="/" />;

  const drink = data.drinks[0];
  const validIngredients = Object.keys(drink).filter(
    (item) => item.startsWith("strIngredient") && drink[item] !== null
  );
  const validIngredientsValue = validIngredients.map((item) => drink[item]);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{drink.strDrink}</h3>
      </header>
      <div className="drink">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {drink.strDrink}
          </p>

          <p>
            <span className="drink-data">category:</span>
            {drink.strCategory}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {drink.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {drink.strGlass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {`${validIngredientsValue.join(", ")}.`}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {drink.strInstructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleCocktail;
