import { useLocation } from "react-router-dom";


function ProductPage() {
    let location = useLocation();
    console.log(location)
  return (
    <div>ProductPage for {location.pathname}
    
    {location.pathname=="/bd" && <span>Shirt 50taka</span>}
    {location.pathname=="/cad" && <span>shirt 100taka</span>}
    </div>
  )
}

export default ProductPage