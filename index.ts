import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

const observer = {
  next: value => {
    document.getElementById("result").innerText = value;
    console.log("next", value);
  },
  error: error => console.log("error", error),
  complete: () => console.log("complete!")
};

const observable = new Observable(subscriber => {
  subscriber.next("Hello");
  subscriber.next("World");
  subscriber.complete();
});

console.log("before");
observable.subscribe(observer);
console.log("after");
