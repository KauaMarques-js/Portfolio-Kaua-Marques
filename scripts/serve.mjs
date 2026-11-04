import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";

// Servidor de prévia do export estático; nenhuma API ou persistência.
const root = path.resolve("out");
const port = Number(process.argv[2] || 3000);
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png", ".webp": "image/webp", ".ico": "image/x-icon", ".woff2": "font/woff2" };

http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    const requestedPath = path.resolve(root, `.${pathname}`);
    const relative = path.relative(root, requestedPath);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      response.writeHead(403).end("Forbidden");
      return;
    }
    let filePath = requestedPath;
    if ((await fs.stat(filePath)).isDirectory()) filePath = path.join(filePath, "index.html");
    const data = await fs.readFile(filePath);
    response.writeHead(200, { "Content-Type": mime[path.extname(filePath)] || "application/octet-stream" });
    response.end(data);
  } catch (error) {
    if (["ENOENT", "ENOTDIR"].includes(error.code)) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Página não encontrada");
    } else {
      response.writeHead(500).end("Erro ao servir a prévia");
    }
  }
}).listen(port, "127.0.0.1", () => console.log(`Local: http://127.0.0.1:${port}`));
