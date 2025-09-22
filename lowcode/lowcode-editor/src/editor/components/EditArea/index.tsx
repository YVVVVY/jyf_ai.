import {
    useEffect
} from 'react';
import { useComponentsStore } from '../../stores/components';
export function EditArea() {
    const {components,addComponent} = useComponentsStore();
    useEffect(() => {
        addComponent({
            id:222,
            name:'Container',
            props:{},
            childern:[],
        },1);
        addComponent({
            id:333,
            name:'Video',
            props:{},
            childern:[],
        },2);
        setTimeout(() => {
            addComponent({
                id:444,
                name:'Text',
                props:{},
                childern:[],
            },333);
        }, 1000);
    },[])
    return (
        <div>
            <pre>{JSON.stringify(components, null, 2)}</pre>
        </div>
    )
}