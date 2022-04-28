import { existsSync, watch } from 'fs';
import { spawn } from 'child_process';
/**
 * # Watch File Class | Primary parent class
 * This class runs a foreign program by child process spawning over a watched file
 *
 * ## Features
 *
 * - filename | name of file to watch
 * - watcher | launching of watcher property for execution handling
 *
 * ## Methods
 * - filename(void) | returns String with filename
 * - operation(void) | returns String with operation Type
 * - watcher(void) | returns boolean of execution, runs file watcher events
 */

export default class WatchFileClass {
  private _filename: string;

  private readonly _operation: string;

  constructor(filename: string, operation: string) {
    this._filename = filename;
    this._operation = operation;
  }

  get filename(): string { return this._filename; }

  get operation(): string { return this._operation; }

  get watcher(): boolean {
    if (existsSync(this.filename)) {
      watch(this.filename, (eventType, filename) => {
        console.log(`file ${filename} detected, launching watcher`);
        if (eventType === 'rename') {
          console.log('file renamed or deleted, relaunching watcher');
          process.exit(1);
        }
        if (eventType === 'change') {
          console.log(this.operation);
          if (this.operation === '+') {
            console.log('file changed, launching suma.js');
            const command = spawn('node', ['dist/suma.js', filename]);
            let result = '';
            command.stdout.on('data', (data) => {
              result += data.toString();
            });
            command.on('close', () => {
              console.log(result);
            });
          }
          if (this.operation === '*') {
            const command = spawn('node', ['dist/producto.js', filename]);
            let result = '';
            command.stdout.on('data', (data) => {
              result += data.toString();
            });
            command.on('close', () => {
              console.log(result);
            });
          }
        }
      });
      return true;
    }
    return false;
  }
}
