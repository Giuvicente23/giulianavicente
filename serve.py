import os, http.server, socketserver

os.chdir('/Users/giuliana/Desktop/giulianavicente')
PORT = 8080
Handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(('', PORT), Handler) as httpd:
    httpd.serve_forever()
