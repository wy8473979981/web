/**
 * Created by Administrator on 2016/8/3.
 */

/**
 * 纯新手使用react 和 bs 写的一个小网站
 * 主要是为了尝试下react.js的写法
 * 如果有学习react的朋友，可以参照下，入门初学者的写法。可能会对你的自学有帮助
 */
var WjjTitle = React.createClass({
    /**
     * 箭头函数，默认函数操作
     * @returns {XML}
     */
    render : ()=>{

        let userName = "xiao8",
            /**
             * es6的语法， 使用反引号，可以用userName进行操作
             * @type {string}
             */
            title = `欢迎来到啊啊${userName}的可视化驿站`;

        return (
            <div className="col-md-12 wjjTitleBackground">
                <h1 className="col-md-8">{title}</h1>
                <img className="wjjPic" src="images/123.png"/>
            </div>
        )
    }
})

//头的组件
ReactDOM.render(
    // 这里比较简单，使用的是组件
    <WjjTitle/>,
    document.getElementById('jj_web_title')
);
