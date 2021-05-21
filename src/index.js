import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./routes/index.routes";
import "./style.scss"

window.location.hash = "#/"
router(window.location.hash)


window.addEventListener("hashchange", ()=>{
    router(window.location.hash)
})