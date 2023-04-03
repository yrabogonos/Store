document.querySelectorAll('.dropdown-btn').forEach(btn => btn.addEventListener('click', (e) =>{
    var target = e.currentTarget;
    var menu = target.dataset.target; 
    document.querySelectorAll('.dropdown-menu').forEach(e =>{
        if(e.dataset.target == menu && !e.classList.contains('open')){
            e.classList.add('active');
            var id = setTimeout(()=> e.classList.add('open'), 0)
       
        }
        if(e.dataset.target == menu && e.classList.contains('open')){
            e.classList.remove('active');
            clearTimeout(id);
            setTimeout(()=> e.classList.remove('open'), 0)
            
        }
    });
    
  
}));
