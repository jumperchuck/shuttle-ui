import { isArray, isEmpty } from '@shuttle-ui/utils';
import { FieldRule } from './types';

export default class Validator {
  constructor(private rules: FieldRule[]) {}

  required(value: any) {
    return isEmpty(value);
  }

  pattern(value: any, pattern: RegExp) {
    return !pattern.test(value);
  }

  min(value: any, min: number) {
    if (typeof value === 'number') {
      return value < min;
    }
    if (typeof value === 'string' || isArray(value)) {
      return value.length < min;
    }
    return false;
  }

  max(value: any, max: number) {
    if (typeof value === 'number') {
      return value > max;
    }
    if (typeof value === 'string' || isArray(value)) {
      return value.length > max;
    }
    return false;
  }

  validate(value: any, callback?: (errors: string[]) => void) {
    let async = false;
    const validators = this.rules.map((rule) => {
      const { required, min, max, pattern, message, transform, validator } = rule;
      const finalValue = transform ? transform(value) : value;
      if (required && this.required(finalValue)) {
        return message || 'is required';
      }
      if (min && this.min(value, min)) {
        return message || 'is min';
      }
      if (max && this.max(value, max)) {
        return message || 'is max';
      }
      if (pattern && this.pattern(value, pattern)) {
        return message || 'is error';
      }
      if (validator) {
        const result = validator(finalValue, rule);
        if (result instanceof Promise) {
          async = true;
          return result.catch((error) => {
            if (typeof error === 'string') return error;
            if (error instanceof Error) return error.message;
          });
        }
        if (result instanceof Error) {
          return result.message;
        }
        return result;
      }
    });
    if (!async) {
      callback?.(validators.filter((item) => typeof item === 'string') as string[]);
    }
    return Promise.all(validators)
      .then((result) => result.filter((item) => item))
      .then((result) => {
        if (async && callback) callback(result);
        return result;
      });
  }
}
