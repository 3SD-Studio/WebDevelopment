// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let htmlEditor;
let cssEditor;
let jsEditor;

window.onload = function () {
    htmlEditor = ace.edit("htmlEditor");
    htmlEditor.setTheme("ace/theme/monokai");
    htmlEditor.session.setMode("ace/mode/html");

    cssEditor = ace.edit("cssEditor");
    cssEditor.setTheme("ace/theme/monokai");
    cssEditor.session.setMode("ace/mode/css");

    jsEditor = ace.edit("jsEditor");
    jsEditor.setTheme("ace/theme/monokai");
    jsEditor.session.setMode("ace/mode/javascript");
}
   