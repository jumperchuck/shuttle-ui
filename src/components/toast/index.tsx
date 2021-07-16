/**
 * Toast
 */
import { ToastAndroid } from 'react-native';

class Toast {
  static SHORT = ToastAndroid.SHORT;
  static LONG = ToastAndroid.LONG;
  static TOP = ToastAndroid.TOP;
  static CENTER = ToastAndroid.CENTER;
  static BOTTOM = ToastAndroid.BOTTOM;

  static show(message: string, duration: number = ToastAndroid.SHORT, gravity?: number) {
    if (gravity) {
      ToastAndroid.showWithGravity(message, duration, gravity);
    } else {
      ToastAndroid.show(message, duration);
    }
  }
}

export default Toast;
