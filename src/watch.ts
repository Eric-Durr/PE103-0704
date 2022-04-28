import WatchFileClass from './watchFile.class';

const sumaWatcher: WatchFileClass = new WatchFileClass(process.argv[2], process.argv[3]);

if (!sumaWatcher.watcher) {
  console.log(`Fichero ${process.argv[2]} no encontrado en el directorio raíz, terminando el programa`);
}
