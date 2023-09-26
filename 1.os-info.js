const os = require('node:os');

console.log("Información del Sitsema Operativo");
console.log("----------------------------------------------------");
console.log("Nombre del SO ", os.platform())
console.log("Version del SO ", os.release())
console.log("Arquitectura", os.arch())
console.log("CPUs", os.cpus())
console.log("Memoria Libre", os.freemem() / 1024 / 1024, "MB");
console.log("Memoria Total", os.totalmem() / 1024 / 1024, "MB");
console.log("Uptime", os.uptime() / 60 / 60);