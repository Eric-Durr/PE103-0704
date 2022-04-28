import * as fs from 'fs';

fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log('hubo un error al abrir el fichero');
  }
  const dataString: string = data.toString();
  console.log(`Los números del fichero ${process.argv[2]} son ${dataString.split(' ')}`);
  console.log(`Su suma da como resultado ${dataString.split(' ').map((el) => Number(el)).reduce((acc, num) => acc * num)}`);
});
