import {
  atom,
} from 'recoil';

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

const fontSizeState = atom({
  key: 'fontSizeState',
  default: 14,
});

export {
  textState,
  fontSizeState
}
