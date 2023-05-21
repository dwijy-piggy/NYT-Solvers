javascript:document.querySelectorAll('.su-cell').forEach(e => {
    e.click();
    a = e[Object.keys(e).filter(k => k.startsWith('__reactInternalInstance'))].return.pendingProps.answer;
    e.dispatchEvent(new KeyboardEvent('keydown', {bubbles: true, keyCode: 48 + a}))
})
