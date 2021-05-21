import Home from "../components/index.controller"

let content = document.getElementById("root")

const router = (route) => {
    content.innerHTML= ""

    switch(route){
        case "#/":{
            return content.appendChild(Home())
        }
        case "#/Products":
            return console.log("Products")
        case "#/Link":
            return console.log("Linkkk")
        default:
            return console.log("404")
    }

}

export {
    router
}