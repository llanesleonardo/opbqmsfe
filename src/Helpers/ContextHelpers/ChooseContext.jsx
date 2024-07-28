import React from 'react'
import { ProjectContext } from '../../Context/projectContext';


export  function ChooseContext(module) {
    switch (module) {
        case 'projects':
            return ProjectContext;  
        case 'processes':
            return ProjectContext;   
        default:
            break;
    }
}
