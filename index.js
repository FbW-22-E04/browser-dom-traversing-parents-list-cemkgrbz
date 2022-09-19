const cite = document.querySelector("cite").nodeName;
const footer = document.querySelector("cite").parentElement.nodeName;
const blockquote = document.querySelector(footer).parentElement.nodeName;
const section = document.querySelector(blockquote).parentElement.nodeName;
const main = document.querySelector(section).parentElement.nodeName;
const body =
  document.querySelector(section).parentElement.parentElement.nodeName;
const html =
  document.querySelector(section).parentElement.parentElement.parentElement
    .nodeName;


console.log(
  `${html} > ${body} > ${main} > ${section} > ${blockquote} > ${footer} > ${cite}`
);


