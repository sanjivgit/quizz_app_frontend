import { useEffect, useRef } from "react";

export const useEventListener = (
  eventName: string,
  handler: (event: KeyboardEvent) => void,
  element: EventTarget = window
) => {
  const savedHandler = useRef<(event: KeyboardEvent) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    if (!element) return;

    const eventListener = (event: Event) => {
      if (savedHandler.current) {
        savedHandler.current(event as KeyboardEvent);
      }
    };

    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};