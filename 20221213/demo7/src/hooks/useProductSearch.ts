import { useEffect, useState } from "react";
import IProduct from "../model/IProduct";
import ProductService from "../services/ProductService";

const useProductSearch:any = () => {
    const [data, setData] = useState<Array<IProduct>>();
    const [filter, setFilter] = useState<string>('');
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
      const fetchData = async () => {
        if (filter) {
            console.log(`Searching REST service for ${filter} ...`);
      
            const ps = new ProductService();
      
            setIsProcessing(true);
            setIsError(false);
      
            try {
              let filtered = await ps.search(filter);
              setData(filtered);
            } catch (error) {
              setIsError(true);
            }
            setIsProcessing(false);
          }
      };

      fetchData();
    }, [filter]);

    return [{ data, isProcessing, isError }, setFilter];
  }

  export default useProductSearch;