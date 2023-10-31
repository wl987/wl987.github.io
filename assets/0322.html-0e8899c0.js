import{_ as e,o as i,c as n,a as s}from"./app-5415a0ce.js";const l={},d=s(`<h1 id="vuex" tabindex="-1"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h1><ol><li>实现组件全局状态数据管理的一种机制，可以方便的实现组件之间数据的共享</li></ol><ul><li>能够在vuex中集中管理共享数据，易于开发和后期维护</li><li>能够高效的实现组件之间的数据共享，提升开发效率</li><li>存储在vuex中的数据是响应式的，能够实时保持数据与页面同步</li><li>只有共享的数据才有必要存储到vuex中，对于组件私有的数据，存储到自身data中</li></ul><ol start="2"><li>基本使用</li></ol><ul><li>安装vuex依赖包</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm i vuex -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>导入vuex</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import Vuex from &#39;vuex&#39;
Vue.use(Vuex)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建store对象</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const store=new Vuex.Store({
// state里存放的就是全局共享的数据
	state:{count:0}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>挂载到vue实例</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>new Vue({
	store
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>vuex的核心概念</li></ol><ul><li>state-提供唯一的公共数据源，所有共享的数据都要统一放到store的state中进行存储</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//1.获取数据方法一，直接调用
this.$store.state.全局数据名称
//2.获取数据方法二，mapState函数，映射为当前组件的计算属性
import {mapState } from &#39;vuex&#39;
computed:{
	...mapState([&#39;count&#39;])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Mutation - 用于变更Store中的数据-只能用它变更Store数据，不可以直接操作，虽然繁琐，但可以集中监控所有数据的变化,!!!不可以执行异步操作</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//1.定义Mutations
mutations:{
	add(state,step){
  	// 变更状态
      state.count+=step
  }
}
// 2. 触发mutation
//触发mutations的第一种方式
methods:{
	handle1(){
  	this.$store.commit(&#39;add&#39;,3)
  }
}
//触发mutations的第二种方式
import {mapMutations} from &#39;vuex&#39;
methods:{
  ...mapMutations([&#39;add&#39;]),
  handler(){
  	this.sub(3)
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Action-用于处理异步任务，如果通过异步操作变更数据，必须通过Action，但实质是通过触发Mutation的方式间接变更数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 定义action
actions:{
	addAsync(context,step){
  	setTimeout(()=&gt;{
      	context.commit(&#39;add&#39;,step)
      },1000)
  }
}
//触发action第一种方式
methods:{
	handle(){
  	this.$store.dispatch(&#39;addAsync&#39;,5)
  }
}
// 触发action的第二种方式
import { mapActions} from &#39;vuex&#39;
methods:{
	...mapActions([&#39;addAsync&#39;]),
  handler(){
  	this.addAsync(5)
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Getter -对store中的数据进行加工处理形成新的数据,不会修改，只会包装state数据</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 定义getter
getters:{
	showNum:state=&gt;{
  	return &#39;最新的数量是【&#39;+state.count+&#39;】&#39;
  }
}
// 使用getter的第一张方法
this.$store.getters.名称
// 使用getter的第二种方法
import{ mapGetters }from &#39;vuex&#39;
computed：{
	...mapGetters([&#39;showNum&#39;])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),t=[d];function a(v,u){return i(),n("div",null,t)}const c=e(l,[["render",a],["__file","0322.html.vue"]]);export{c as default};
