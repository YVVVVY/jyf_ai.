// 编辑区域的数据由store管理
import { create } from 'zustand';
// parentId + children 可以构建出一个树结构
export interface Component{
    id: number;
    name: string;
    props: any;
    childern?: Component[];
    parentId?: number;
}

interface State {
    components: Component[];
}
// store 主要提供 State & Actions 

interface Action {
    addComponent: (component: Component,parentId?:number) => void;
    deleteComponent: (componentId: number) => void;
    updateComponentProps: (componentId: number, props:any) => void;
}
// 交叉类型
export const useComponentsStore = create<State & Action>(
    (
        (set,get) => ({
            components:[
                {
                    id:1,
                    name:'page',
                    props:{},
                    desc:'页面',
                }
            ],
            addComponent:(component,parentId) => set((state) => {
               if (parentId){
                const parentComponent = getComponentById(
                    parentId,
                    state.components
                );
                if (parentComponent){
                    if (parentComponent.childern){

                        parentComponent.childern.push(component);
                    }else{
                        parentComponent.childern = [component]; 
                    }
                }
                component.parentId = parentId;
            }
                return {
                    components:[...state.components,component]
                }
               
            }),
            deleteComponent:(componentId) => {
                if(!componentId) return;
                const component = getComponentById(
                    componentId,
                    get().components
                );
                if (component?.parentId){
                    const parentComponent = getComponentById(
                        component.parentId,
                        get().components
                    );
                    if (parentComponent){
                        parentComponent.childern = parentComponent?.childern?.filter(
                            (c) => c.id !== componentId
                        );
                        set({
                            components: [...get().components],
                        })
                    }
                }
            },
            updateComponentProps:() => {},
        })
    )
)

export function getComponentById(
    id:number | null,
    components:Component[],
) :Component | null{
    if(!id) return null;

    for (const component of components){
        if (component.id === id) return component;
        if (component.childern && component.childern.length > 0){
            const result = getComponentById(id,component.childern);
            if (result !==null) return result;
        }
    }
    return null;
}