﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let htmlEditor;
let cssEditor;
let jsEditor;

window.onload = function () {
    htmlEditor = ace.edit("htmlEditor");
    htmlEditor.setTheme("ace/theme/monokai");
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.getSession().on('change', updateCode);

    cssEditor = ace.edit("cssEditor");
    cssEditor.setTheme("ace/theme/monokai");
    cssEditor.session.setMode("ace/mode/css");
    cssEditor.getSession().on('change', updateCode);

    jsEditor = ace.edit("jsEditor");
    jsEditor.setTheme("ace/theme/monokai");
    jsEditor.session.setMode("ace/mode/javascript");
}


function updateCode() {
    replaceIframeContent(
        document.getElementById("previewOutput"),
        htmlEditor.getSession().getValue(),
        cssEditor.getSession().getValue(), 
        jsEditor.getSession().getValue() 
    );

}


function replaceIframeContent(iframeElement, newHTML, newCSS, newJS) {
    iframeElement.src = "about:blank";
    iframeElement.contentWindow.document.open();
    iframeElement.contentWindow.document.write(
        newHTML +
        "<style>" + newCSS + "</style>" +
        "<script>" + newJS + "</script>"
    );
    iframeElement.contentWindow.document.close();
}

