const net = require('net');
const server = net.createServer();
server.on('connection', (socket)=>{
    socket.on('data',(data)=> {
        console.log('Mensaje recibido desde el cliente: '+ data )

        if(data=='hola')
        {
            socket.write('Hola buenos dias\n')
        }
        if(data=='que dia es')
        {
            let hoy = new Date();
            let output = String(hoy.getDate()).padStart(2, '0') + '/' + String(hoy.getMonth()).padStart(2, '0')+ '/' + hoy.getFullYear();
            socket.write('Hoy es ' + output);
        }
        if(data=='que hora es')
        {
            let hoy = new Date();
            let output = String(hoy.getHours()).padStart(2, '0') + ':' + String(hoy.getMinutes()).padStart(2, '0') + ':' + hoy.getSeconds();
            socket.write('La hora es ' + output);
        }
        if(data=='que carrera estudio')
        {
            socket.write('Ingenieria informatica\n')
        }
        if(data=='adios')
        {
            socket.write('Nos vemos luego')
        }
    })

    socket.on('close', ()=>{
        console.log('Comunicacion finalizada')
    })
    socket.on('error', (err)=>{
        console.log(err.message);
})
})
server.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto', server.address().port)
})