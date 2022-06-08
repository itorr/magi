document.body.onclick=_=>{
    document.body.setAttribute(
        'data-status',
        document.body.getAttribute('data-status') === 'voting'?'over':'voting'
    )
}