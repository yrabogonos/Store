import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './breadcrumbs.scss';


export default function BreadCrumbs(){
    const loc = useLocation();

    let curr = '';
    let crumbName='';
    let crumbs =loc.pathname.split('/');
    
    let objs = [];
    crumbs.forEach(crumb =>{
        if(crumb === ''){    
            crumbName = 'Home';
            objs.push({path:'/', crumb:crumbName});
        }
        else{
            if(crumb.includes('-')){
                crumb = crumb.replace('-', ' ');
            }
            curr +=`/${crumb.replace(' ','-')}`;
            crumbName = crumb;
            objs.push({path:curr, crumb:crumbName});
        } 
    })
    console.log('Path:', objs)
   
  

    return(
        <div className="breadcrumbs mb-5">{objs.map(obj => <Link to={obj.path}>{obj.crumb}</Link>)}</div>
    );
}