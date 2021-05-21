import ViewProducts from "../views/Products.html"

const Products = () => {
    const div =  document.createElement("div")
    div.innerHTML = ViewProducts

    return div
}

export default Products