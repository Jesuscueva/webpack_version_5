import ViewLink from "../views/Link.html"

const Link = () => {
    const div = document.createElement("div")
    div.innerHTML =ViewLink
    return div
}

export default Link