/**
 * Debounce
 * Asked in PayTM, MakeMyTrip
 */

function handleOnChange(e) {
  console.log("On Change Function is called!");
  const val = document.getElementById("debounceInput").value;
  console.log(val);
}

const modifiedHandleOnChange = debounce(handleOnChange,2000);

function debounce(cb, delay=1000) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, delay);
  };
}
