---
title: 主流 CSS 布局(水平居中、垂直居中、居中 )
date: 2019-11-01 14:11:51
tags: 
- CSS 
- CSS 布局

---
### 什么是布局 

- html 页面的整体结构或骨架
- 布局不是某个技术内容 而是一种设计思想
<!-- more -->

[ 布局方式 ]

- 水平居中布局
- 垂直居中布局
- 居中布局（ 水平 + 垂直 ）

### 什么是水平居中布局

水平居中布局  元素相对于页面/元素相对于父元素水平居中
[ 实现方式 ]
- inline-block + text-align 属性配合使用

**注：[优点] 浏览器兼容性比较好  [缺点] text-align 属性具有继承性 导致子级元素的文本居中显示** 
**解决方法：在子级元素重新设置 text-align 属性覆盖掉父级元素的 text-align 属性  **

```html
<style>
    *{
        margin: 0;
        padding: 0;   
    }
    .parent {
        width: 100%;
        height: 200px;
        background-color: #00ffff;
        /* 方法一： inline-block + text-align 属性配合使用  为父元素 添加 text-align 属性  为子元素添加 display 属性
           - text-align 属性 为文本内容设置对其方式
             + left: 左对齐 
             + center: 居中对齐
             + right: 右对齐   
        */
        text-align: center;
    }
    .child {
        width: 300px;
        height: 200px;
        background-color: #ff0000;
        /* display 属性:
           - block: 块级元素
           - inline: 内联元素 (text-align 有效)
             + width 和 height 属性无效
           - inline-block: 行内块元素 (块级 + 内联 )
         */
        display: inline-block;
    }
    </style>
<body>
<!-- 居中布局 -->
<!-- 方法一： inline-block + text-align 属性配合使用 -->

    <div class="parent">
        <div class="child"></div>
    </div>
</body>

```
-  table + margin 属性配合使用
**注：[优点] 只需要对子级元素进行设置就可以实现水平居中  [缺点] 如果子级元素脱离文档流，导致 margin 属性失效** 
**解决方法：考虑第一种或第三种解决方案**

[ 拓展 ]  CSS 中使元素脱离文档流的方式

- 将元素设置浮动 float
- 将元素设置为绝对定位 position: absolute
- 将元素设置为固定定位 position: fixed

```html
  <style> 
     *{
        margin: 0;
        padding: 0;   
    }
    .parent {
        width: 100%;
        height: 200px;
        background-color: #00ffff;
    }
    .child {
        width: 300px;
        height: 200px;
        background-color: #ff0000;
        /* 方法二： gtable + margin 属性配合使用 */
        /* display的值 为 table 或 block */
        display: table;
        /* margin 属性： 外边距
           - 一个值： 上下左右
           - 两个值： 上下，左右
             + auto 根据浏览器自动分配    
           - 三个值： 上，左右，下 
           - 四个值： 上，右，下，左
         */
        margin: 0 auto;
    }
    </style>
```
- absolute + transform 属性配合使用

**注：[优点] 无论父级元素是否脱离文档流，不影响子级元素水平居中的效果  [缺点]  transform 属性是 CSS 3 中新增的属性 浏览器支持情况不好** 
**解决方法：考虑第一种或第二种解决方案 **

```html
<style>
    * {
    margin: 0;
    padding: 0;
    }

    .parent {
    width: 100%;
    height: 200px;
    background-color: #00ffff;
    /* 相对定位 */
    position: relative;
    }

    .child {
    width: 300px;
    height: 200px;
    background-color: #ff0000;
    /* 当把当前元素设置为绝对定位以后
    - 如果父级元素没有设置定位，当前元素是相对于页面定位的
    - 如果父级元素设置了定位，当前元素是相对于父级元素定位的 
    */
    position: absolute;
    left: 50%;
    /* 水平方向平移 */
    transform: translateX(-50%);
    /* margin-left: -50%; */
    }
    </style>
```
- ... ...

### 什么是垂直居中布局

垂直居中布局 ：当前元素相对于页面/父元素垂直方向是居中显示的
[ 实现方式 ]
- table-cell + vertical-align 属性配合使用
**注：[优点] 浏览器的兼容性比较好  [缺点]  vertical-align 属性 具有继承性 导致子级元素的文本居中显示** 
**如果父级元素中包含除子级元素以外的文本内容，此方法不适用 **
```html
  <style>
    * {
        margin: 0;
        padding: 0;
    }
    .parent {
    /*方法一： table-cell + vertical-align 属性配合使用 */
    width: 200px;
    height: 600px;
    background-color: #00ffff;
    /* display 属性：
       - table: 设置当前元素为<table>元素
       - table-cell：设置当前元素为<td>元素  单元格
       - 设置完成以后 作为子级元素的div就相当于单元格中的内容了，设置对齐方式即可
    
     */
    display: table-cell;
    /* 
        vertical-align 属性: 用于设置文本内容的垂直方向的定对齐方式
        - top： 顶部对齐
        - middle: 居中对齐
        - bottom: 底部对齐 
     */
    vertical-align: middle;
    }
    .child {
        width: 200px;
        height: 300px;
        background-color: #ff0000;

    }
    
    </style>
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
```
- absolute + transform 属性配合使用
**注：[优点] 无论父级元素是否脱离文档流，不影响子级元素的垂直居中的效果  [缺点]  transform 属性是 CSS 3 中新增的属性 浏览器支持情况不好** 
**解决方法：考虑第一种解决方案 **

```html
    <style>

    * {
        margin: 0;
        padding: 0;
    }
    .parent {
        width: 200px;
        height: 600px;
        background-color: #00ffff;
        
        position:relative;
    }
    /* 方法二： absolute + transform 属性配合使用 */
    .child {
        width: 200px;
        height: 300px;
        background-color: #ff0000;
        
        position: absolute;
        top: 50%;
        /* 垂直方向 */
        transform: translateY(-50%);
    }
    </style>
```

### 什么是居中布局

居中布局：（ 水平 + 垂直 ）居中
[ 实现方式 ]
-  display:block + margin 属性实现水平方向居中，table-cell + vertical-align 属性实现垂直方向居中 
**注：[优点] 浏览器兼容性比较好   [缺点] 父元素与子元素都需要增加代码** 

```html
   <style>
    * {
        margin: 0;
        padding: 0;
    }
    .parent {

    width: 1000px;
    height: 600px;
    background-color: #00ffff;
    /* 实现垂直居中  */
    /* <td> */
    display: table-cell;
    vertical-align: middle;

    }

    .child {
        width: 200px;
        height: 300px;
        background-color: #ff0000;
        /* 实现水居中 */
        /* <table> */
        /* display: table; */
        display: block;
        margin: 0 auto;

    }
    
    </style>
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>

```

- absolute + transform 属性实现水平和垂直方向的居中
**注：[优点] 无论父级元素是否脱离文档流，不影响子级元素的垂直居中的效果，不考虑浏览器兼容性，优于第一中方案  [缺点]  transform 属性是 CSS 3 中新增的属性 浏览器支持情况不好同时子父元素都增加了代码** 

```html
<style>

    * {
        margin: 0;
        padding: 0;
    }
    .parent {
        width: 1000px;
        height: 600px;
        background-color: #00ffff;
        /* 相对定位 不脱离文档流*/
        position:relative;
    }
    .child {
        width: 200px;
        height: 300px;
        background-color: #ff0000;
        /* 绝对定位 ———— 子绝父相 */
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* transform: translateX(-50%);
        transform: translateY(-50%); */
    }
    </style>
```
