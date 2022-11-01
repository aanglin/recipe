import { NextResponse } from "next/dist/server/web/spec-extension/response";


export default function middleware(req) {
    let verify = req.cookies.get('loggedin');
    let url = req.url;

    if (!verify && url.includes("/homepage")){
        return NextResponse.redirect("localhost:3000")
    }
    if (!verify && url.includes("/favorites")){
        return NextResponse.redirect("localhost:3000")
    }
    if (!verify && url.includes("/createRecipes")){
        return NextResponse.redirect("localhost:3000")
    }
}