export type EventListener = (...args: any[]) => any;

export default class EventEmitter {
  handles: Record<string, Set<EventListener>> = {};

  constructor() {}

  addListener(eventType: string, listener: EventListener) {
    if (!this.handles[eventType]) {
      this.handles[eventType] = new Set();
    }
    this.handles[eventType].add(listener);
    return {
      remove: () => this.removeListener(eventType, listener),
    };
  }

  removeListener(eventType: string, listener: EventListener) {
    if (!this.handles[eventType]) {
      return;
    }
    this.handles[eventType].delete(listener);
  }

  removeAllListeners(eventType?: string) {
    if (eventType) {
      if (this.handles[eventType]) {
        this.handles[eventType].clear();
        delete this.handles[eventType];
      }
    } else {
      Object.keys(this.handles).forEach((type) => {
        this.handles[type].clear();
        delete this.handles[type];
      });
    }
  }

  on(eventType: string, listener: EventListener) {
    this.addListener(eventType, listener);
  }

  off(eventType: string, listener: EventListener) {
    this.removeListener(eventType, listener);
  }

  emit(eventType: string, ...params: any[]) {
    if (!this.handles[eventType]) {
      return;
    }
    this.handles[eventType].forEach((listener) => {
      listener(...params);
    });
  }
}
