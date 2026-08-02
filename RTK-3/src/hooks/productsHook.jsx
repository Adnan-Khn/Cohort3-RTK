import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";
import { useState } from "react";

export const useProductApi = () => {
  const [filteredProducts, setFilteredProducts] = useState(null);
  const { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 10000, //10s tk kuch bhi change nhi hoga to data ko cache se le lega
  });

  let filterProds = (searchTerm = "", category = "") => {
    if (!data) return;

    let filtered = data.filter((prod) => {
      let matchedSearch = prod.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      let matchedCat = category === "" || prod.category === category;
      return matchedSearch && matchedCat;
    });
    setFilteredProducts(filtered);
  };
  const displayProds = filteredProducts ?? data;

  return { data, isPending, error, filterProds, displayProds };
};
