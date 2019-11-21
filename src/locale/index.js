import en from './en';
import vn from './vn';

import I18n from 'react-native-i18n';


I18n.fallbacks = true;

I18n.translations = {
  'vi-US':vn,
  en,
};

export default I18n;
