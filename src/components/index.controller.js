import views from "../views/home.html"

const Home = () => {
    const element = document.createElement("div")
    element.innerHTML = views

    return element
}

export default Home