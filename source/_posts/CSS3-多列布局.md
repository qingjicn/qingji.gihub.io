---
title: CSS 3 多列布局
date: 2019-11-01 20:43:07
tags: 
- CSS
- CSS 布局
---
### CSS 3 多列布局

[ column 属性 ]

——column 属性是一个简写属性  包含 column-count 属性 定义列的数量 和 column-width 属性定义列的宽度
<!-- more -->
-  column-count 属性 用于设置列的数量或允许的最大列数
  + auto: 默认值，用于表示列的数量由其他 CSS 属性绝对决定
  + number: 必须是正整数，用于表示定义列的数量
- column-width 属性 用于设置列的宽度或列的最小宽度
  + auto: 默认值，用于表示列的宽度由其他 CSS 属性绝对决定
  + length: 必须是正整数，用于表示定义列的宽度

```html
<style>
    /* 
     *  
     *  
     *
     */
    * {
       margin: 0;
       padding: 0; 
    }
    .parent {
        background-color: #eee;

        /* column-count: 6; */
        /* column-width: 200px; */
        /* 简写属性 */
        columns: 6 auto;

    }
    .column1,
    .column2,
    .column3,
    .column5,
    .column6 {
        height: 300px;
    }
    .column2 {
        background-color: #ff66ff;
    }
    .column3 {
        background-color: #00ffff;
    }
    .column1 {
        background-color: #ffff00;
    }
    .column5 {
        background-color: #ff0000;
    }
    .column6 {
        background-color: #00ff00;
    }

    </style>
<body>
    <div class="parent">
        <div class="column1"></div>
        <div class="column2"></div>
        <div class="column3"></div>
        <div class="column6"></div>
        <div class="column5"></div>
        <div class="column6"></div>
    </div>
</body>

```
[ 列的间距 ]
- column-gap 属性用于设置列于列之间的间距，该属性需要为多列显示时的元素设置
  + normal:  用于表示使用浏览器定义列的默认间距，默认值 1em
  + length: 必须是正整数，用于表示定义列之间的间距
 ```html
 <style>
     .parent {
        background-color: #eee;

        /* column-count: 6; */
        /* column-width: 200px; */
        /* 简写属性 */
        columns: 5 auto;

        column-gap: 20px;

    }
 </style>
 ```
 [列的边框 column-rule ]

—— column-rule 属性用于定义列于列之间的边框，其中包括边框宽度、边框颜色、边框样式。
- column-rule-width: 列于列之间的边框宽度
- column-rule-color: 列于列之间的边框颜色
- column-rule-style: 列于列之间的边框样式   

 ```html
 <style>
    .parent {
        background-color: #eee;

        /* column-count: 6; */
        /* column-width: 200px; */
        /* 简写属性 */
        columns: 5 auto;

        column-gap: 20px;

        /* column-rule-width: 5px;
        column-rule-color: #ff0000;
        column-rule-style: double; */
        /* 简写属性 */
        column-rule: 5px #ff0000 double;

    }
 </style>
 ```
 [ 横跨多列 ]

- column-span 属性 用于定义一个列元素是否跨列
  + none：表示元素不跨列
  + all: 表示元素跨所有列 

 ```html
 <style>
    .column6 {
        background-color: #00ff00;
        column-span: all;
    }
 </style>
 ```
 [ 列的填充 ]

- column-fill 属性用于定义列的高度由内容决定，还是同一高度
  + auto: 默认值，列的高度由内容绝对
  + balance: 列的高度根据内容最多的一列的高度为准
 ```html
 <style>
    .column6,
    .column7, 
    .column8,
    .column9 {
        /* 浏览器兼容不好 包括chrome浏览器 */
        column-fill: balance;
    }
</style>   
   <div class="parent">
            <div class="column6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum eum dolorum ad quod velit. Corporis inventore alias nostrum dignissimos nihil saepe harum vitae, sint, id voluptate, reprehenderit officiis magnam repellat?</div>

            <div class="column7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iure dolorum deleniti soluta ipsum at ratione magni recusandae, sapiente necessitatibus, expedita nobis, animi corrupti exercitationem delectus ullam unde sed autem.</div>

            <div class="column8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius placeat blanditiis harum? Eum, sit corporis illo maxime, nemo excepturi nisi eveniet, error quis ex cum ut nulla sunt aut saepe?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis debitis officia distinctio cupiditate tempora! Debitis corrupti omnis rerum voluptates laboriosam hic alias repellat nostrum, expedita rem perspiciatis totam maxime labore!
            </div>
            <div class="column9">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, earum. Nobis illo maxime necessitatibus voluptatibus quam nemo blanditiis impedit perferendis, porro delectus eligendi laboriosam voluptate adipisci, culpa vitae accusantium nesciunt.</div>
        </div>
 ```