import './base';
import './grid';
import './wrapper';
import './content';
import './footer';
import './about';

import InitHeader from './header'

export default () => {

  let $header = $('.header');
  if($header.length){
    new InitHeader($header)
  }
  console.log('init layout');
};
