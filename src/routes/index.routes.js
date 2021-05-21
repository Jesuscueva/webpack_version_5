import Home from "../components/index.controller"
import Link from "../components/Link"
import Products from "../components/Products"

let content = document.getElementById("root")

const router = (route) => {
    content.innerHTML= ""

    switch(route){
        case "#/":{
            return content.appendChild(Home())
        }
        case "#/Products":
            return content.appendChild(Products())
        case "#/Link":
            return content.appendChild(Link())
        default:
            return console.log("404")
    }

}

export {
    router
}