let spinner = ['\r|  ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];

for (let i = 0; i < spinner.length; i++) {
  setTimeout(function run() {
    process.stdout.write(spinner[i]);
  }, 200 * i)
}

/* INFINITE SPINNER!!!
let r = 0;
setTimeout(function run() {
  process.stdout.write(spinner[i]);
  i++;
  setTimeout(run, 200);
  if (i === spinner.length)
    i = 0;
}, 200);
*/