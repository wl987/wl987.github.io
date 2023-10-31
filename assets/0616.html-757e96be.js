import{_ as n,o as s,c as a,a as e}from"./app-5415a0ce.js";const t={},p=e(`<h1 id="基本类型" tabindex="-1"><a class="header-anchor" href="#基本类型" aria-hidden="true">#</a> 基本类型</h1><h2 id="_1-类型声明" tabindex="-1"><a class="header-anchor" href="#_1-类型声明" aria-hidden="true">#</a> 1.类型声明</h2><h3 id="_1-1-变量进行类型声明" tabindex="-1"><a class="header-anchor" href="#_1-1-变量进行类型声明" aria-hidden="true">#</a> 1.1 变量进行类型声明</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//可以先声明后赋值</span>
<span class="token keyword">let</span> a<span class="token operator">:</span><span class="token builtin">number</span>
a<span class="token operator">=</span><span class="token number">2</span>
<span class="token comment">//可以同时进行声明和赋值</span>
<span class="token keyword">let</span> a<span class="token operator">=</span><span class="token number">123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-函数进行类型声明" tabindex="-1"><a class="header-anchor" href="#_1-2-函数进行类型声明" aria-hidden="true">#</a> 1.2 函数进行类型声明</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//函数的参数进行类型声明，会限制参数类型和个数</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a<span class="token operator">+</span>b
<span class="token punctuation">}</span>
<span class="token comment">//可以对函数返回值进行类型声明</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a<span class="token operator">+</span>b
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-基本类型" tabindex="-1"><a class="header-anchor" href="#_1-3-基本类型" aria-hidden="true">#</a> 1.3 基本类型</h3><p><img src="https://uploadfiles.nowcoder.com/images/20220616/614915689_1655340871269/D2B5CA33BD970F64A6301FA75AE2EB22" alt="alt"></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//字面量，可以限制变量的类型 用|分割开</span>
<span class="token keyword">let</span> c <span class="token operator">:</span><span class="token builtin">number</span><span class="token operator">|</span><span class="token builtin">string</span>
<span class="token comment">//any 任何类型，一个变量设置为any后相当于关闭了TS类型检测,any类型的变量可以赋值给其他变量</span>
<span class="token keyword">let</span> d<span class="token operator">:</span><span class="token builtin">any</span>
<span class="token comment">//声明变量不指定类型，自动判定为any类型</span>
<span class="token keyword">let</span> e
<span class="token comment">//unknown表示未知类型的值，也可以当作任何类型，不过它不能给别的变量赋值</span>
<span class="token keyword">let</span> f<span class="token operator">:</span><span class="token builtin">unknown</span>
<span class="token comment">//类型断言，用来告诉解析器变量的实际类型</span>
<span class="token comment">//变量 as类型 &lt;类型&gt;变量</span>
f <span class="token keyword">as</span> <span class="token builtin">string</span>
d<span class="token operator">=</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span>f
<span class="token comment">//void 表示空值，以函数为例，表示没有返回值的函数</span>
<span class="token keyword">function</span> <span class="token function">mn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token comment">//never 表示永远不会返回结果</span>
<span class="token keyword">function</span> <span class="token function">nm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">never</span><span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">console</span></span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;报错了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//{}用来指定对象中可以包含那些属性</span>
<span class="token comment">//{属性名：属性值，属性名：属性值}，在属性名后边加上？表示属性是可选的</span>
<span class="token keyword">let</span> g<span class="token operator">:</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">}</span>
g<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;是是&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">12</span><span class="token punctuation">}</span>
<span class="token comment">//{[propName:string]:any}对象里可以有任意属性</span>
<span class="token comment">//设置函数结构的类型声明(形参：类型，形参：类型，...)=》返回值</span>
<span class="token keyword">let</span> <span class="token function-variable function">h</span><span class="token operator">:</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token builtin">number</span>
<span class="token function-variable function">h</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span>n1<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>n2<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> n1<span class="token operator">+</span>n2
<span class="token punctuation">}</span>
<span class="token comment">//数组的类型声明：类型[]/Array&lt;类型&gt;</span>
<span class="token keyword">let</span> i<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> j<span class="token operator">:</span><span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span>
<span class="token comment">//类型别名</span>
<span class="token keyword">type</span> <span class="token class-name">mytype</span><span class="token operator">=</span><span class="token number">1</span><span class="token operator">|</span><span class="token number">2</span><span class="token operator">|</span><span class="token number">3</span>
<span class="token keyword">let</span> k<span class="token operator">:</span>mytype
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h1><h2 id="定义类" tabindex="-1"><a class="header-anchor" href="#定义类" aria-hidden="true">#</a> 定义类</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">类名</span><span class="token punctuation">{</span>
  	<span class="token comment">//定义实例属性，必须实例化才会有的属性</span>
	属性名：类型<span class="token operator">=</span>值
  	<span class="token comment">//加 static 定义静态属性，无需实例化就有的属性</span>
  	<span class="token keyword">static</span> 属性名<span class="token operator">:</span>类型<span class="token operator">=</span>值
  	<span class="token comment">// readonly 只读的属性，无法修改</span>
  	<span class="token keyword">static</span> <span class="token keyword">readonly</span> 属性名<span class="token operator">:</span>类型<span class="token operator">=</span>值
  	<span class="token comment">//定义方法，直接写就是实例方法，必须实例才可以调用</span>
  	<span class="token function">方法名</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token operator">...</span>
    <span class="token punctuation">}</span>
   	<span class="token comment">//前边加static 定义的方法是静态方法，无需实例化就可以使用</span>
   	<span class="token keyword">static</span> <span class="token function">方法名</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数和this" tabindex="-1"><a class="header-anchor" href="#构造函数和this" aria-hidden="true">#</a> 构造函数和this</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">{</span>
  <span class="token comment">//构造函数会在对象创建时调用</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>参数<span class="token operator">:</span>类型<span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>参数
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//继承 extends 父类</span>
<span class="token keyword">class</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>
  	<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//使用继承后，子类将会拥有父类所有的属性和方法</span>
<span class="token comment">//通过继承可以将多个类***有的代码写在一个父类中，能供简化代码，提高复用性</span>
<span class="token comment">//如果在子类中，添加了和父类相同的方法，则子类的方***覆盖父类的方法（方法重写）</span>
<span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>
	<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="super关键字" tabindex="-1"><a class="header-anchor" href="#super关键字" aria-hidden="true">#</a> super关键字</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Son</span> <span class="token keyword">extends</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>
	age<span class="token operator">:</span><span class="token builtin">number</span>
  	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token comment">//如果在子类中写了构造函数，在子类构造函数中必须对父类构造函数继承</span>
      	<span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token operator">=</span>age
    <span class="token punctuation">}</span>
  	<span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//在类的方法中super就表示当前类的父类</span>
      	<span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//以abstract开头的类是抽象类，抽象类和其他类区别不大，只是不能用来创建对象，是专门用来被继承的类</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Father</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token builtin">string</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
  <span class="token punctuation">}</span>
  <span class="token comment">//定义抽象方法使用abstract开头，没有方法体，抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写</span>
  <span class="token keyword">abstract</span> <span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//接口用来定义一个类结构,用来定义一个类中应该包含哪些属性和方法</span>
<span class="token comment">//接口也可以当成类型声明来使用</span>
<span class="token keyword">interface</span> <span class="token class-name">myInterface</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token builtin">string</span>
  	age<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">//定义两个重名的接口，可以合并为一个使用</span>
<span class="token keyword">interface</span> <span class="token class-name">myInterface</span><span class="token punctuation">{</span>
	gender<span class="token operator">:</span><span class="token builtin">string</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> obj<span class="token operator">:</span>myInterface<span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token string">&#39;刘成&#39;</span>
  	age<span class="token operator">:</span><span class="token number">12</span>
  	gender<span class="token operator">:</span><span class="token string">&#39;男&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">//接口可以在定义类的时候去限制类的结构</span>
<span class="token comment">//接口只定义对象的结构而不考虑实际值，在接口中所有的方法都是抽象方法</span>
<span class="token keyword">interface</span> <span class="token class-name">myInter</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token builtin">string</span>
  	<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//定义类时，可以使类去实现一个接口，实现接口就是使类满足接口的要求</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token keyword">implements</span> <span class="token class-name">myInter</span><span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token builtin">string</span>
  	<span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>&#39;Hello<span class="token operator">!</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性的封装" tabindex="-1"><a class="header-anchor" href="#属性的封装" aria-hidden="true">#</a> 属性的封装</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span><span class="token punctuation">{</span>
	<span class="token comment">//设置私有属性，外部不能访问和修改</span>
  	<span class="token keyword">private</span> _age<span class="token operator">:</span><span class="token builtin">number</span>
  	<span class="token function">constructor</span><span class="token punctuation">(</span>age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">this</span><span class="token punctuation">.</span>_age<span class="token operator">=</span>age
    <span class="token punctuation">}</span>
  <span class="token comment">//定义方法，用来获取age属性</span>
  	<span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
    <span class="token punctuation">}</span>
  <span class="token comment">//定义方法，用来修改age属性</span>
  	<span class="token function">steAge</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">this</span><span class="token punctuation">.</span>_age<span class="token operator">=</span>value
    <span class="token punctuation">}</span>
  <span class="token comment">//getter方法用来读取属性，setter方法用来设置属性，他们被称为属性的存取器</span>
  <span class="token comment">//TS中设置getter方法的方式</span>
  <span class="token keyword">get</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_age
  <span class="token punctuation">}</span>
  <span class="token comment">//TS中设置setter方法的方式</span>
  <span class="token keyword">set</span> <span class="token function">age</span><span class="token punctuation">(</span>value<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">this</span><span class="token punctuation">.</span>_age<span class="token operator">=</span>value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">C</span></span><span class="token punctuation">{</span>
	<span class="token comment">//可以直接将属性定义在构造函数中</span>
  	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span><span class="token keyword">public</span> age<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">//在定义函数或者类的时候，如果遇到类型不明确就可以使用泛型</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a
<span class="token punctuation">}</span>
<span class="token comment">//可以直接调用具有泛型的函数</span>
<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token comment">//不指定泛型，TS可以自动对类型进行判断</span>
<span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">fn</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token comment">//指定泛型</span>
<span class="token keyword">interface</span> <span class="token class-name">Inter</span><span class="token punctuation">{</span>
	length<span class="token operator">:</span><span class="token builtin">number</span>
<span class="token punctuation">}</span>
<span class="token comment">//T extends Inter 表示泛型T必须是Inter实现类（子类）</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn2</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Inter<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a<span class="token punctuation">.</span>length
<span class="token punctuation">}</span>
<span class="token function">fn2</span><span class="token punctuation">(</span>a<span class="token operator">:</span><span class="token punctuation">{</span>length<span class="token operator">:</span><span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//泛型也可以在类中使用</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span><span class="token punctuation">{</span>
	name<span class="token operator">:</span><span class="token constant">T</span>
  	<span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token constant">T</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    	<span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token operator">=</span>name
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> mc<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">MyClass<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span>name<span class="token operator">:</span><span class="token string">&#39;刘成&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[p];function c(l,i){return s(),a("div",null,o)}const u=n(t,[["render",c],["__file","0616.html.vue"]]);export{u as default};
