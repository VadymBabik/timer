import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import {
  interval,
  buffer,
  Subject,
  fromEvent,
  debounceTime,
  map,
  filter,
} from "rxjs";
import { takeUntil } from "rxjs/operators";
import s from "./Timer.module.scss";

const Timer = () => {
  const wait = useRef(null);
  const [timer, setTimer] = useState(0);
  const [actions, setActions] = useState(false);

  useEffect(() => {
    const timer$ = new Subject();
    interval(1000)
      .pipe(takeUntil(timer$))
      .subscribe(() => {
        if (actions) {
          setTimer((prev) => prev + 1000);
        }
      });
    return () => {
      timer$.next();
      timer$.complete();
    };
  }, [actions]);

  const startHandler = () => {
    actions
      ? setActions((prev) => !prev) || setTimer(0)
      : setActions((prev) => !prev);
  };

  if (wait.current) {
    const click$ = fromEvent(wait.current, "click");
    const doubleClick$ = click$.pipe(
      buffer(click$.pipe(debounceTime(300))),
      map((clicks) => clicks.length),
      filter((clicksLength) => clicksLength === 2)
    );
    doubleClick$.subscribe(() => {
      setActions(false);
    });
  }

  return (
    <div className={s.timer}>
      <div className="container center-align">
        <div className={s.counter}>
          <span>{new Date(timer).toISOString().slice(11, 19)}</span>
        </div>
        <div>
          <Button text={"Start/Stop"} onClick={startHandler} />
        </div>
        <div>
          <Button refBtn={wait} text={"Wait"} />
          <Button text={"Reset"} onClick={() => setTimer(0)} />
        </div>
      </div>
    </div>
  );
};

export default Timer;
