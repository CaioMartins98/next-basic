import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
 
  //pegar cookie de autenticação

  //chamar alguma API

  return NextResponse.redirect('http://localhost:3000/');
}
