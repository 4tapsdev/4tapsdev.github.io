import { include } from "named-urls";


export default {
   home: '/',
   about: '/#about-section',
   contact: '/#contact-section',
   cases: include('/cases', {
      all: '',
      detail: include(':slug', {
         show: ''
      })
   })
};
