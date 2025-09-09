// Arquivo: middleware.ts
import { NextRequest, NextResponse } from 'next/server';


export function middleware(request: NextRequest) {
  // Gera um código único e aleatório a cada requisição
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  // Cria a nova política de segurança, agora usando o 'nonce'
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com;
    font-src 'self' https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://region1.google-analytics.com;
  `.replace(/\s{2,}/g, ' ').trim(); // Limpa espaços extras
  
  // Adiciona o nonce aos cabeçalhos da requisição para que possamos usá-lo no layout
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-nonce', nonce);
  
  // Define o cabeçalho CSP na resposta que será enviada ao navegador
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
// response.headers.set('Content-Security-Policy', cspHeader);

  return response;
}