javascript:document.querySelectorAll('g.xwd__cell').forEach(e => {
    e.appendChild(document.createElement('p')).click();
    a = e[Object.keys(e).filter(k => k.startsWith('__reactInternalInstance'))].return.pendingProps.answer;
    e.dispatchEvent(new KeyboardEvent('keypress', {bubbles: true, charCode: a.charCodeAt(0)}));
})
