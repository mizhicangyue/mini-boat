import React, {FC, useState} from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import MDEditor from '@uiw/react-md-editor';
import {MessageOutlined, LikeOutlined, StarOutlined} from '@ant-design/icons';
const str:string = "### 一、css基础概念\n" +
    "#### 1、描述\n" +
    "css叫做层叠样式表，或者级联样式表，用来控制网页的样式。\n" +
    "> 说明：制作网页的三要素\n" +
    "- 1、html文档：做网页的布局（结构）————结构层\n" +
    "- 2、css：控制显示的样式（美观）————行为层\n" +
    "- 3、js：控制网页的行为（与用户交互）————交互层\n" +
    "#### 2、css的作用\n" +
    "- 使内容与表现完全分离\n" +
    "- 提高了代码的可重用性和可维护性，一个css文件可以被多个html引入，一个html文件可以引入多个css文件\n" +
    "#### 3、引入css样式的方式\n" +
    "1. 行内样式（内联样式）：\n" +
    "    在标签内部使用 style属性进行设置，只对当前行生效，功能单一\n" +
    "1. 内部样式：在head标签里，通过style标签引入，只对当前html文件生效\n" +
    "1. 外部样式：在head标签里，通过link外部css文件的方式，方便多处使用，可重用、可维护性高\n" +
    "1. 导入式：在head标签里的style里，通过@import的方式引入css文件\n" +
    "\n" +
    "> 说明：link和@import的区别\n" +
    "- @import是先加载html文件再加载css，而link是同时加载hmtl和css文件\n" +
    "- @import只能引入css文件，link可以引入多种文件，比如icon\n" +
    "- @import具有兼容性，link没有兼容性\n" +
    "- js只能操作link引入的样式，不能操作@import引入的样式\n" +
    "### 二、css的特点\n" +
    "#### 1、继承性\n" +
    "\n" +
    "color、 text-开头的、line-开头的、font-开头的属性这些关于文字样式的，都可以被子代继承，所有关于盒子的、定位的、布局的属性都不能继承。\n" +
    "\n" +
    "#### 2、优先级\n" +
    "    选择器具有优先级\n" +
    "    Id>class>元素>通配符*（全局选择器）\n" +
    "#### 3、层叠性\n" +
    "\n" +
    "CSS异常冲突处理能力---层叠性。<br/>\n" +
    "层叠性：就是css处理冲突的能力。 所有的权重计算，没有任何兼容问题！\n" +
    "CSS像艺术家一样优雅，像工程师一样严谨。<br/>\n" +
    "当选择器，选择上了某个元素的时候，那么要这么统计权重：<br/>\n" +
    "id的数量，类的数量，标签的数量，还有先后顺序，当优先级相同的情况下，写在后面的会覆盖前面的样式\n";

const Md: any = (props: any) => {
    const [markdown, setMarkdown] = useState(props.value || str);
    return  <MDEditor.Markdown  style={{height:window.innerHeight*0.7}} source={markdown}/>
};
export default Md;