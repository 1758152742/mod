var Nav=React.createClass({
		click:function(event){
			switch(event.target.getAttribute('name')){
				case 'index':
				ReactDOM.unmountComponentAtNode(document.getElementById("view"))
				ReactDOM.render(<Index />,document.getElementById("view"))
				ReactDOM.render(<Top />,document.getElementById("top"))
				ReactDOM.render(<Jiu />,document.getElementById("jiu"))
				ReactDOM.render(<Center />,document.getElementById("center"))
				break;
				case 'koubei':
				ReactDOM.unmountComponentAtNode(document.getElementById("view"))
				ReactDOM.render(<Koubei />,document.getElementById("view"))
				ReactDOM.render(<Toptwo />,document.getElementById("toptwo"))
				ReactDOM.render(<Jiutwo />,document.getElementById("jiutwo"))
				ReactDOM.render(<Centertwo />,document.getElementById("centertwo"))
				break;
			}
		},
		render:function(){
			return <div className='nav'>
					<div>
						<span className="iconfont">&#xe600;</span>
						<span>首页</span>
						<div className='click' name='index' onClick={this.click}></div>
					</div>
					<div>
						<span className="iconfont">&#x35ee;</span>
						<span>口碑</span>
						<div className='click' name='koubei' onClick={this.click}></div>
					</div>
					<div>
						<span className="iconfont">&#xe61c;</span>
						<span>朋友</span>
						<div className='click' name='pengyou' onClick={this.click}></div>
					</div>
					<div>
						<span className="iconfont">&#xe60c;</span>
						<span>我的</span>
						<div className='click' name='wode' onClick={this.click}></div>
					</div>
			</div>
		}
})

var View=React.createClass({
	render:function(){
		return <div id='view'>
				
		</div>
	}
})
var Box=React.createClass({
	render:function(){
		return <div>
				<View />
				<Nav />
		</div>
	}
})
/*首页*/
var Index=React.createClass({
	render:function(){
		return <div>
				<div id='top'></div>
				<div id='list'>
					<div className='cc'>
						<div id='jiu'></div>
						<div id='center'></div>
					</div>
				</div>
				
		</div>
	}
})

var Top=React.createClass({
	render:function(){
		return <div className='top_heard'>
			<div className='top_h_box'>
				<header>
					<div className="guding">
						<input type='text' />
						<span className="iconfont">&#xe686;</span>
						<p>热门电影速度与激情</p>
					</div>
					<div>
						<span className="iconfont">&#xe68e;</span>
					</div>
					<div>
						<span className="iconfont">&#xe622;</span>
					</div>
				</header>
				
			</div>
					
		</div>
	}
})

var Jiu=React.createClass({
	render:function(){
		return <div className='jiu'>
				<nav>
					<div>
						<span className="iconfont">&#xe631;</span>
						<span>扫一扫</span>
					</div>
					<div>
						<span className="iconfont">&#xe60f;</span>
						<span>付钱</span>
					</div>
					<div>
						<span className="iconfont">&#xe65d;</span>
						<span>收钱</span>
					</div>
					<div>
						<span className="iconfont">&#xe67f;</span>
						卡包
					</div>
				</nav>
				<div>
					<span className="iconfont">&#xe60c;</span>
					<span>转账</span>
				</div>
				<div>
					<span className="iconfont">&#xe619;</span>
					<span>信用卡还款</span>
				</div>
				<div>
					<span className="iconfont">&#xe615;</span>
					<span>充值中心</span>
				</div>
				<div>
					<span className="iconfont">&#xe62d;</span>
					<span>余额宝</span>
				</div>
				<div>
					<span className="iconfont">&#xe7f4;</span>
					<span>淘票票</span>
				</div>
				<div>
					<span className="iconfont">&#xe611;</span>
					<span>滴滴出行</span>
				</div>
				<div>
					<span className="iconfont">&#xe62d;</span>
					<span>城市服务</span>
				</div>
				<div>
					<span className="iconfont">&#xf0013;</span>	
					<span>全部</span>
				</div>
		</div>
	}
})
var Center=React.createClass({
	render:function(){
		return <div className='center'>
			<div>
				<img src={"img/a.jpg"}/>
				<p>记录我的生活</p>
				<span className="iconfont">&#xe615;</span>
			</div>
			<div>
				芝麻信用.阅读更新
			</div>
			<div>
				<h1>本月芝麻分已完成评估</h1>
			</div>
			<div>转账</div>
			<div>转账</div>
			<div>转账</div>
			<div>转账</div>
			<div>转账</div>
		</div>
	}
})

/*口碑*/
var Koubei=React.createClass({
	render:function(){
		return <div>
			<div id='toptwo'></div>
			<div id='listtwo'>
				<div className='cctwo'>
					<div id='jiutwo'></div>
					<div id='centertwo'></div>
				</div>
			</div>
		</div>
	}
})
var Toptwo=React.createClass({
	render:function(){
		return <div className='top_heard'>
			<div className='top_h_box'>
				<header>
					<div className="guding">
						<input type='text' />
						<span className="iconfont">&#xe686;</span>
						<p>热门电影速度与激情</p>
					</div>
					<div>
						<span className="iconfont">&#xe68e;</span>
					</div>
					<div>
						<span className="iconfont">&#xe622;</span>
					</div>
				</header>
				
			</div>
					
		</div>
	}
})

var Jiutwo=React.createClass({
	render:function(){
		return <div className='banner'>
			<div className="lunbo">
				<img src={'img/b.png' }/>
			</div>
			
			<div className="jiuttt">
				<div>
					<span className="iconfont">&#xe60c;</span>
					<span>转账</span>
				</div>
				<div>
					<span className="iconfont">&#xe60c;</span>
					<span>转账</span>
				</div>
				<div>
					<span className="iconfont">&#xe60c;</span>
					<span>转账</span>
				</div>
				<div>
					<span className="iconfont">&#xe619;</span>
					<span>信用卡还款</span>
				</div>
				<div>
					<span className="iconfont">&#xe615;</span>
					<span>充值中心</span>
				</div>
				<div>
					<span className="iconfont">&#xe62d;</span>
					<span>余额宝</span>
				</div>
				<div>
					<span className="iconfont">&#xe7f4;</span>
					<span>淘票票</span>
				</div>
				<div>
					<span className="iconfont">&#xe611;</span>
					<span>滴滴出行</span>
				</div>
				<div>
					<span className="iconfont">&#xe62d;</span>
					<span>城市服务</span>
				</div>
				<div>
					<span className="iconfont">&#xf0013;</span>	
					<span>全部</span>
				</div>
			</div>	
		</div>
	}
})
var Centertwo=React.createClass({
	render:function(){
		return <div className='centertwo'>
			<div>北京不可错过的20加餐厅</div>
			<div className="mtt">
				<img src={'img/c.png'}/>
				<img src={'img/d.jpg'}/>
			</div>	
		</div>
	}
})










ReactDOM.render(<Box />,document.getElementById("box"))
ReactDOM.render(<Index />,document.getElementById("view"))
ReactDOM.render(<Top />,document.getElementById("top"))
ReactDOM.render(<Jiu />,document.getElementById("jiu"))
ReactDOM.render(<Center />,document.getElementById("center"))
/*二页*/
/*ReactDOM.render(<Toptwo />,document.getElementById("toptwo"))
ReactDOM.render(<Jiutwo />,document.getElementById("jiutwo"))
ReactDOM.render(<Centertwo />,document.getElementById("centertwo"))*/