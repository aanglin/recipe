import { NextResponse } from "next/dist/server/web/spec-extension/response";


export default function middleware(req) {
    let verify = req.cookies.get('loggedin');
    let url = req.url;

    if (!verify && url.includes("localhost:3000/homepage")){
        return NextResponse.redirect("localhost:3000")
    }
    if (!verify && url.includes("localhost:3000/favorites")){
        return NextResponse.redirect("localhost:3000")
    }
    if (!verify && url.includes("localhost:3000/createRecipes")){
        return NextResponse.redirect("localhost:3000")
    }
}