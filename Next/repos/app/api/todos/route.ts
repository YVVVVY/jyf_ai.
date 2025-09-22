import {
    NextResponse // res
} from 'next/server'; // api server
// ts 是js超集
interface Todo {
    id: number;
    text: string;
    completed: boolean;

}
let todos: Todo[] = [
    {
        id:1,
        text:'学习ts',
        completed:false,
    },
    {
        id:2,
        text:'学习react',
        completed:false,
    },

];
// Restful 一切皆资源
// 向用户暴露资源的
// method + 支援 URL
export async function GET(){
    return NextResponse.json(todos);
}

export async function POST(req: Request){
    // 获取请求体 body json
    const data = await req.json();
    // 核心的数据，函数的参数，返回值
    const newTodo = {
        id: +Date.now(),
        text: data.text,
        // ts 除了强类型外，代码提示更好，写起来更快
        completed: false,
    }
    todos.push(newTodo);
    return NextResponse.json(newTodo);


}



