import React from 'react'
import { DataContext } from '../../Context/dataContext';


export  function ChooseContext(module) {
    switch (module) {
        case 'data':
            return DataContext;    
        default:
            break;
    }
}
