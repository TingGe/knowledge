ת�ԣ�[CodingLabs](http://blog.codinglabs.org/articles/how-web-analytics-data-collection-system-work.html)

<p>��վ����ͳ�Ʒ�����������վվ������Ӫ��Ա����ʹ�õ�һ�ֹ��ߣ��Ƚϳ��õ���<a href="http://www.google.com/analytics/" target="_blank">�ȸ����</a>��<a href="http://tongji.baidu.com" target="_blank">�ٶ�ͳ��</a>��<a href="http://ta.qq.com" target="_blank">��Ѷ����</a>�ȵȡ�������Щͳ�Ʒ������ߵĵ�һ��������վ�������ݵ��ռ���Ŀǰ�����������ռ���ʽ�������ǻ���javascript�ġ����Ľ���Ҫ�������������ռ���ԭ����һ��һ��ʵ�ʴһ��ʵ�ʵ������ռ�ϵͳ��
<!--more-->
</p>
<h1>�����ռ�ԭ�����</h1>
<p>����˵����վͳ�Ʒ���������Ҫ�ռ����û����Ŀ����վ����Ϊ�����ĳ��ҳ�����ĳ��ť������Ʒ���빺�ﳵ�ȣ�����Ϊ�������ݣ���ĳ�µ���Ϊ�����Ķ������ȣ������ڵ���վͳ������ֻ�ռ�һ���û���Ϊ��ҳ��Ĵ򿪡������û���ҳ���е���Ϊ���޷��ռ��������ռ����������������������������Դ���������ݷ������ÿ����Եȳ��÷����ӽǣ����ǣ�����ajax�����Ĺ㷺ʹ�ü�����������վ���ڵ�������Ŀ���ͳ�Ʒ���������Խ��Խǿ�ң����ִ�ͳ���ռ������Ѿ��Ե������ܼ���</p>
<p>������Google�����Ʒ�ȸ�����д����Ե������˿ɶ��Ƶ������ռ��ű����û�ͨ���ȸ��������õĿ���չ�ӿڣ�ֻ���д������javascript����Ϳ���ʵ���Զ����¼����Զ���ָ��ĸ��ٺͷ�����Ŀǰ�ٶ�ͳ�ơ��ѹ������Ȳ�Ʒ���հ��˹ȸ������ģʽ��</p>
<p>��ʵ˵�������������ռ�ģʽ�Ļ���ԭ���������һ�µģ�ֻ�Ǻ�һ��ͨ��javascript�ռ����˸������Ϣ�����濴һ�����ڸ�����վͳ�ƹ��ߵ������ռ�����ԭ��</p>
<h2>���̸���</h2>
<p>����ͨ��һ��ͼ���忴һ�������ռ��Ļ������̡�</p>
<p class="picture"><img alt="" src="/uploads/pictures/how-web-analytics-data-collection-system-work/1.png"/></p>
<p align="center"><strong>ͼ1. ��վͳ�������ռ���������</strong></p>
<p>���ȣ��û�����Ϊ�ᴥ��������Ա�ͳ��ҳ���һ��http���������������Ϊ��Ϊ���Ǵ���ҳ������ҳ���򿪣�ҳ���е����javascriptƬ�λᱻִ�У��ù���ع��ߵ�����Ӧ��֪����һ����վͳ�ƹ��߶���Ҫ���û�����ҳ�м���һС��javascript���룬�������Ƭ��һ��ᶯ̬����һ��script��ǩ������srcָ��һ��������js�ļ�����ʱ���������js�ļ���ͼ1����ɫ�ڵ㣩�ᱻ��������󵽲�ִ�У����js�������������������ռ��ű��������ռ���ɺ�js������һ����˵������ռ��ű���ͼ1�е�backend��������ű�һ����һ��αװ��ͼƬ�Ķ�̬�ű����򣬿�����php��python��������������Ա�д��js�Ὣ�ռ���������ͨ��http�����ķ�ʽ���ݸ���˽ű�����˽ű��������������̶���ʽ��¼��������־��ͬʱ���ܻ���http��Ӧ�и��ͻ�����ֲһЩ����׷�ٵ�cookie��</p>
<p>������һ�������ռ��Ĵ�����̣������Թȸ����Ϊ������ÿһ���׶ν���һ�������ϸ�ķ�����</p>
<h2>���ű�ִ�н׶�</h2>
<p>��Ҫʹ�ùȸ���������¼��GA������Ҫ��ҳ���в���һ�����ṩ��javascriptƬ�Σ����Ƭ����������Ϊ�����롣�������ҵĲ����������õĹȸ�����������ͼ��</p>
<p class="picture"><img alt="" src="/uploads/pictures/how-web-analytics-data-collection-system-work/2.png"/></p>
<p align="center"><strong>ͼ2. �ȸ����������</strong></p>
<p>����_gaq��GA�ĵ�ȫ�����飬���ڷ��ø������ã�����ÿһ�����õĸ�ʽΪ��</p>
<pre class="prettyprint linenums">_gaq.push(['Action', 'param1', 'param2', ...]);</pre>
<p>Actionָ�����ö�������������صĲ����б�GA����Ĭ����������������Ԥ�����ã�_setAccount����������վ��ʶID�������ʶID����ע��GAʱ����ġ�_trackPageview����GA����һ��ҳ����ʡ�����������ο���<a title="https://developers.google.com/analytics/devguides/collection/gajs/" href="https://developers.google.com/analytics/devguides/collection/gajs/" target="_blank">https://developers.google.com/analytics/devguides/collection/gajs/</a>��ʵ���ϣ����_gaq�Ǳ�����һ��FIFO�������õģ����ô��벻�س�����������֮ǰ��������ο��������ӵ�˵����</p>
<p>�ͱ�����˵��_gaq�Ļ��Ʋ����ص㣬�ص��Ǻ������������Ĵ��룬���������������Ҫ���ġ���δ������ҪĿ�ľ�������һ���ⲿ��js�ļ���ga.js������ʽ��ͨ��document.createElement��������һ��script������Э�飨http��https����srcָ���Ӧ��ga.js��������element����ҳ���dom���ϡ�</p>
<p>ע��ga.async = true����˼���첽�����ⲿjs�ļ�����������������Ľ��������ⲿjs������ɺ��첽ִ�С����������HTML5������ġ�</p>
<h2>�����ռ��ű�ִ�н׶�</h2>
<p>�����ռ��ű���ga.js���������ᱻִ�У�����ű�һ��Ҫ�����¼����£�</p>
<p>1��ͨ�����������javascript�����ռ���Ϣ����ҳ��title��ͨ��document.title����referrer����һ��url��ͨ��document.referrer�����û���ʾ���ֱ��ʣ�ͨ��windows.screen����cookie��Ϣ��ͨ��document.cookie���ȵ�һЩ��Ϣ��</p>
<p>2������_gaq�ռ�������Ϣ����������ܻ�����û��Զ�����¼����١�ҵ�����ݣ������������վ����Ʒ��ŵȣ��ȡ�</p>
<p>3�������������ռ������ݰ�Ԥ�����ʽ������ƴ�ӡ�</p>
<p>4������һ����˽ű�������Ϣ����http request������Я������˽ű���</p>
<p>����Ψһ�������ǲ���4��javascript�����˽ű����õķ�����ajax������ajax�ǲ��ܿ�������ġ�����ga.js�ڱ�ͳ����վ������ִ�У�����˽ű����������GA�ĺ��ͳ�ƽű���<a href="http://www.google-analytics.com/__utm.gif">http://www.google-analytics.com/__utm.gif</a>����ajax�в�ͨ��һ��ͨ�õķ�����js�ű�����һ��Image���󣬽�Image�����src����ָ���˽ű���Я����������ʱ��ʵ���˿��������ˡ���Ҳ�Ǻ�˽ű�Ϊʲôͨ��αװ��gif�ļ���ԭ��ͨ��httpץ�����Կ���ga.js��__utm.gif������</p>
<p class="picture"><img alt="" src="/uploads/pictures/how-web-analytics-data-collection-system-work/3.png"/></p>
<p align="center"><strong>ͼ3. ��˽ű������http��</strong></p>
<p>���Կ���ga.js������__utm.gifʱ���˺ܶ���Ϣ������utmsr=1280��1024����Ļ�ֱ��ʣ�utmac=UA-35712773-1��_gaq�н��������ҵ�GA��ʶID�ȵȡ�</p>
<p>ֵ��ע����ǣ�__utm.gifδ��ֻ����������ִ��ʱ�����������_trackEvent�������¼����٣������¼�����ʱҲ����������ű���</p>
<p>����ga.js������ѹ���ͻ������ɶ��Ժܲ���ǾͲ������ˣ��������ʵ�ֽ׶��һ�ʵ��һ���������ƵĽű���</p>
<h2>��˽ű�ִ�н׶�</h2>
<p>GA��__utm.gif��һ��αװ��gif�Ľű������ֺ�˽ű�һ��Ҫ������¼������飺</p>
<p>1������http��������ĵ���Ϣ��</p>
<p>2���ӷ�������WebServer���л�ȡһЩ�ͻ����޷���ȡ����Ϣ����ÿ�ip�ȡ�</p>
<p>3������Ϣ����ʽд��log��</p>
<p>5������һ��1��1�Ŀ�gifͼƬ��Ϊ��Ӧ���ݲ�����Ӧͷ��Content-type��Ϊimage/gif��</p>
<p>5������Ӧͷ��ͨ��Set-cookie����һЩ��Ҫ��cookie��Ϣ��</p>
<p>֮����Ҫ����cookie����Ϊ���Ҫ����Ψһ�ÿͣ�ͨ�����������������ʱ���ֿͻ���û��ָ���ĸ���cookie������ݹ�������һ��ȫ��Ψһ��cookie����ֲ���û�������Set-cookie�з��û�ȡ���ĸ���cookie�Ա���ͬһ�û�cookie���䣨��ͼ4����</p>
<p class="picture"><img alt="" src="/uploads/pictures/how-web-analytics-data-collection-system-work/4.png"/></p>
<p align="center"><strong>ͼ4. ͨ��cookie����Ψһ�û���ԭ��</strong></p>
<p>����������Ȼ���������ģ������û����cookie�����������ᱻ��Ϊ�������û�����������Ŀǰ���㷺ʹ�õ��ֶΡ�ע�⣬���û�п�վ����ͬһ�û������󣬿���ͨ��js��cookie��ֲ�ڱ�ͳ��վ������£�GA����ô���ģ������Ҫȫ��ͳһ��λ����ͨ����˽ű���ֲ�ڷ�������£����Ǵ����ʵ�ֻ���ô������</p>
<h1>ϵͳ�����ʵ��</h1>
<p>��������ԭ�����Լ����һ��������־�ռ�ϵͳ��������˵������ϵͳҪ�����µ��£�</p>
<p class="picture"><img alt="" src="/uploads/pictures/how-web-analytics-data-collection-system-work/5.png"/></p>
<p align="center"><strong>ͼ5. ���������ռ�ϵͳ�����ֽ�</strong></p>
<p>��������ÿһ����ʵ�֡��ҽ����ϵͳ����MyAnalytics��</p>
<h2>ȷ���ռ�����Ϣ</h2>
<p>Ϊ�˼�������Ҳ�����ʵ��GA�����������ռ�ģ�ͣ������ռ�������Ϣ��</p>
<table border="1" cellspacing="0" cellpadding="2">
<tbody>
<tr>
<td>����</td>
<td>;��</td>
<td>��ע</td>
</tr>
<tr>
<td>����ʱ��</td>
<td>web server</td>
<td>Nginx $msec</td>
</tr>
<tr>
<td>IP</td>
<td>web server</td>
<td>Nginx $remote_addr</td>
</tr>
<tr>
<td>����</td>
<td>javascript</td>
<td>document.domain</td>
</tr>
<tr>
<td>URL</td>
<td>javascript</td>
<td>document.URL</td>
</tr>
<tr>
<td>ҳ�����</td>
<td>javascript</td>
<td>document.title</td>
</tr>
<tr>
<td>�ֱ���</td>
<td>javascript</td>
<td>window.screen.height &amp; width</td>
</tr>
<tr>
<td>��ɫ���</td>
<td>javascript</td>
<td>window.screen.colorDepth</td>
</tr>
<tr>
<td>Referrer</td>
<td>javascript</td>
<td>document.referrer</td>
</tr>
<tr>
<td>����ͻ���</td>
<td>web server</td>
<td>Nginx $http_user_agent</td>
</tr>
<tr>
<td>�ͻ�������</td>
<td>javascript</td>
<td>navigator.language</td>
</tr>
<tr>
<td>�ÿͱ�ʶ</td>
<td>cookie</td>
<td></td>
</tr>
<tr>
<td>��վ��ʶ</td>
<td>javascript</td>
<td>�Զ������</td>
</tr>
</tbody>
</table>
<h2>������</h2>
<p>�������ҽ����GA��ģʽ������Ŀǰ���Ὣ���ö�����Ϊһ��FIFO�����á�һ���������ģ�����£�</p>
<pre class="prettyprint linenums">&lt;script type="text/javascript"&gt;
var _maq = _maq || [];
_maq.push(['_setAccount', '��վ��ʶ']);

(function() {
    var ma = document.createElement('script'); ma.type = 'text/javascript'; ma.async = true;
    ma.src = ('https:' == document.location.protocol ? 'https://analytics' : 'http://analytics') + '.codinglabs.org/ma.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ma, s);
})();
&lt;/script&gt;</pre>
<p>�����������˶�������analytics.codinglabs.org��ͳ�ƽű�������Ϊma.js����Ȼ������һ��С���⣬��Ϊ�Ҳ�û��https�ķ��������������һ��httpsվ�㲿���˴���������⣬�������������Ⱥ��԰ɡ�</p>
<h2>ǰ��ͳ�ƽű�</h2>
<p>��д��һ�����Ǻ����Ƶ�����ɻ���������ͳ�ƽű�ma.js��</p>
<pre class="prettyprint linenums">(function () {
    var params = {};
    //Document��������
    if(document) {
        params.domain = document.domain || ''; 
        params.url = document.URL || ''; 
        params.title = document.title || ''; 
        params.referrer = document.referrer || ''; 
    }   
    //Window��������
    if(window &amp;&amp; window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }   
    //navigator��������
    if(navigator) {
        params.lang = navigator.language || ''; 
    }   
    //����_maq����
    if(_maq) {
        for(var i in _maq) {
            switch(_maq[i][0]) {
                case '_setAccount':
                    params.account = _maq[i][1];
                    break;
                default:
                    break;
            }   
        }   
    }   
    //ƴ�Ӳ�����
    var args = ''; 
    for(var i in params) {
        if(args != '') {
            args += '&amp;';
        }   
        args += i + '=' + encodeURIComponent(params[i]);
    }   

    //ͨ��Image���������˽ű�
    var img = new Image(1, 1); 
    img.src = 'http://analytics.codinglabs.org/1.gif?' + args;
})();</pre>
<p>�����ű��������������ȷ��������Ⱦȫ�ֻ�����������ԭ��һ���Ѿ�˵��������׸��������1.gif�Ǻ�˽ű���</p>
<h2>��־��ʽ</h2>
<p>��־����ÿ��һ����¼�ķ�ʽ�����ò��ɼ��ַ�^A��ascii��0x01��Linux�¿�ͨ��ctrl + v ctrl + a���룬���ľ��á�^A����ʾ���ɼ��ַ�0x01���������ʽ���£�</p>
<p>ʱ��<span style="color: #4bacc6;">^A</span>IP<span style="color: #4bacc6;">^A</span>����<span style="color: #4bacc6;">^A</span>URL<span style="color: #4bacc6;">^A</span>ҳ�����<span style="color: #4bacc6;">^A</span><span style="color: #000000;">Referrer</span><span style="color: #4bacc6;">^A</span>�ֱ��ʸ�<span style="color: #4bacc6;">^A</span>�ֱ��ʿ�<span style="color: #4bacc6;">^A</span>��ɫ���<span style="color: #4bacc6;">^A</span>����<span style="color: #4bacc6;">^A</span>�ͻ�����Ϣ<span style="color: #4bacc6;">^A</span>�û���ʶ<span style="color: #4bacc6;">^A</span>��վ��ʶ</p>
<h2>��˽ű�</h2>
<p>Ϊ�˼򵥺�Ч�ʿ��ǣ��Ҵ���ֱ��ʹ��nginx��access_log����־�ռ��������и��������nginx���ñ�����߼�����������ޣ�������ѡ����<a href="http://openresty.org/" target="_blank">OpenResty</a>��������顣OpenResty��һ������Nginx��չ���ĸ�����Ӧ�ÿ���ƽ̨���ڲ�������������õ�ģ�飬���еĺ�����ͨ��ngx_luaģ�鼯����Lua���Ӷ���nginx�����ļ��п���ͨ��Lua������ҵ�񡣹������ƽ̨�����ﲻ��������ܣ�����Ȥ��ͬѧ���Բο���ٷ���վ<a title="http://openresty.org/" href="http://openresty.org/" target="_blank">http://openresty.org/</a>���������������������ഺ��agentzh������һ���ǳ��а��Ľ���OpenResty��slide��<a href="http://agentzh.org/misc/slides/ngx-openresty-ecosystem/" target="_blank">http://agentzh.org/misc/slides/ngx-openresty-ecosystem/</a>������ngx_lua���Բο���<a title="https://github.com/chaoslawful/lua-nginx-module" href="https://github.com/chaoslawful/lua-nginx-module" target="_blank">https://github.com/chaoslawful/lua-nginx-module</a>��</p>
<p>���ȣ���Ҫ��nginx�������ļ��ж�����־��ʽ��</p>
<pre class="prettyprint linenums">log_format tick "$msec^A$remote_addr^A$u_domain^A$u_url^A$u_title^A$u_referrer^A$u_sh^A$u_sw^A$u_cd^A$u_lang^A$http_user_agent^A$u_utrace^A$u_account";</pre>
<p>ע��������u_��ͷ�������Ǵ�����Լ�����ı�������������nginx���ñ�����</p>
<p>Ȼ���Ǻ��ĵ�����location��</p>
<pre class="prettyprint linenums">location /1.gif {
#αװ��gif�ļ�
    default_type image/gif;    
#����ر�access_log��ͨ��subrequest��¼log
    access_log off;

    access_by_lua "
        -- �û�����cookie��Ϊ__utrace
        local uid = ngx.var.cookie___utrace        
        if not uid then
            -- ���û��������һ������cookie���㷨Ϊmd5(ʱ���+IP+�ͻ�����Ϣ)
            uid = ngx.md5(ngx.now() .. ngx.var.remote_addr .. ngx.var.http_user_agent)
        end 
        ngx.header['Set-Cookie'] = {'__utrace=' .. uid .. '; path=/'}
        if ngx.var.arg_domain then
        -- ͨ��subrequest��/i-log��¼��־�����������û�����cookie����ȥ
            ngx.location.capture('/i-log?' .. ngx.var.args .. '&amp;utrace=' .. uid)
        end 
    ";  

    #�����󲻻���
    add_header Expires "Fri, 01 Jan 1980 00:00:00 GMT";
    add_header Pragma "no-cache";
    add_header Cache-Control "no-cache, max-age=0, must-revalidate";

    #����һ��1��1�Ŀ�gifͼƬ
    empty_gif;
}   

location /i-log {
    #�ڲ�location���������ⲿֱ�ӷ���
    internal;

    #���ñ�����ע����Ҫunescape
    set_unescape_uri $u_domain $arg_domain;
    set_unescape_uri $u_url $arg_url;
    set_unescape_uri $u_title $arg_title;
    set_unescape_uri $u_referrer $arg_referrer;
    set_unescape_uri $u_sh $arg_sh;
    set_unescape_uri $u_sw $arg_sw;
    set_unescape_uri $u_cd $arg_cd;
    set_unescape_uri $u_lang $arg_lang;
    set_unescape_uri $u_utrace $arg_utrace;
    set_unescape_uri $u_account $arg_account;

    #����־
    log_subrequest on;
    #��¼��־��ma.log��ʵ��Ӧ������ü�buffer����ʽΪtick
    access_log /path/to/logs/directory/ma.log tick;

    #������ַ���
    echo '';
}</pre>
<p>Ҫ��ȫ������νű���ÿһ��ϸ���е㳬�����ĵķ�Χ�������õ�����������ngxinģ�飨ȫ��������OpenResty���ˣ����ص�ĵط��Ҷ���ע�ͱ�����ˣ����Բ�����ȫ���ÿһ�е����壬ֻҪ��Լ֪��������������������ԭ��һ���ᵽ�ĺ���߼��Ϳ����ˡ�</p>
<h2>��־��ת</h2>
<p>��������־�ռ�ϵͳ������־��ǳ��࣬ʱ��һ���ļ���úܴ󣬶�����־����һ���ļ������ڹ�������ͨ��Ҫ��ʱ��ν���־�з֣�����ÿ���ÿСʱ�з�һ����־��������Ϊ��Ч�����ԣ�ÿһСʱ�з�һ����־������ͨ��crontab��ʱ����һ��shell�ű�ʵ�ֵģ�shell�ű����£�</p>
<pre class="prettyprint linenums">_prefix="/path/to/nginx"
time=`date +%Y%m%d%H`

mv ${_prefix}/logs/ma.log ${_prefix}/logs/ma/ma-${time}.log
kill -USR1 `cat ${_prefix}/logs/nginx.pid`</pre>
<p>����ű���ma.log�ƶ���ָ���ļ��в�������Ϊma-{yyyymmddhh}.log��Ȼ����nginx����USR1�ź��������´���־�ļ���</p>
<p>Ȼ����/etc/crontab�����һ�У�</p>
<pre class="prettyprint linenums">59  *  *  *  * root /path/to/directory/rotatelog.sh</pre>
<p>��ÿ��Сʱ��59����������ű�������־��ת������</p>
<h2>����</h2>
<p>������Բ������ϵͳ�Ƿ������������ˡ�����������ҵĲ�����������صĵ㣬ͨ��httpץ�����Կ���ma.js��1.gif�Ѿ�����ȷ����</p>
<p class="picture"><img alt="" src="/uploads/pictures/how-web-analytics-data-collection-system-work/6.png"/></p>
<p align="center"><strong>ͼ6. http������ma.js��1.gif������</strong></p>
<p>ͬʱ���Կ�һ��1.gif�����������</p>
<p class="picture"><img alt="" src="/uploads/pictures/how-web-analytics-data-collection-system-work/7.png"/></p>
<p align="center"><strong>ͼ7. 1.gif���������</strong></p>
<p>�����ϢȷʵҲ��������������С�</p>
<p>Ȼ����tail����־�ļ���Ȼ��ˢ��һ��ҳ�棬��Ϊû����access log buffer�� �������õ���һ������־��</p>
<pre class="prettyprint linenums">1351060731.360^A0.0.0.0^Awww.codinglabs.org^Ahttp://www.codinglabs.org/^ACodingLabs^A^A1024^A1280^A24^Azh-CN^AMozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.4 (KHTML, like Gecko) Chrome/22.0.1229.94 Safari/537.4^A4d612be64366768d32e623d594e82678^AU-1-1</pre>
<p>ע��ʵ����ԭ��־�е�^A�ǲ��ɼ��ģ��������ÿɼ���^A�滻Ϊ�����Ķ�������IP�����漰��˽���滻Ϊ��0.0.0.0��</p>
<p>��һ����־��תĿ¼��������֮ǰ�Ѿ����˵㣬�����Ѿ������˺ܶ���ת�ļ���</p>
<p class="picture"><img alt="" src="/uploads/pictures/how-web-analytics-data-collection-system-work/8.png"/></p>
<p align="center"><strong>ͼ8. ��ת��־</strong></p>
<h1>���ڷ���</h1>
<p>ͨ������ķ����Ϳ������Դ������һ����վͳ�Ƶ���־�ռ�ϵͳ����ι����ġ�������Щ��־���Ϳ��Խ��к����ķ����ˡ�����ֻע����־�ռ������Բ���д̫����ڷ����Ķ�����</p>
<p>ע�⣬ԭʼ��־��þ�����ı�����Ϣ����Ҫ��������˺ʹ������������MyAnalytics�����˺��뼶ʱ��������Ǹ�ʽ�����ʱ�䣬ʱ��ĸ�ʽ���Ǻ����ϵͳ�����¶�������־�ռ�ϵͳ�����Ρ������ϵͳ����ԭʼ��־���Է������ܶණ��������ͨ��IP����Զ�λ�����ߵĵ���user agent�п��Եõ������ߵĲ���ϵͳ�����������Ϣ���ٽ�ϸ��ӵķ���ģ�ͣ��Ϳ�������������Դ���ÿ͡�����·���ȷ����ˡ���Ȼ��һ�㲻��ֱ�Ӷ�ԭʼ��־���������ǻὫ����ϴ��ʽ����ת�浽�����ط�����MySQL��HBase������������</p>
<p>�������ֵĹ����кܶ࿪Դ�Ļ�����ʩ����ʹ�ã�����ʵʱ��������ʹ��<a href="https://github.com/nathanmarz/storm" target="_blank">Storm</a>�������߷�������ʹ��<a href="http://hadoop.apache.org/" target="_blank">Hadoop</a>����Ȼ������־�Ƚ�С������£�Ҳ����ͨ��shell������һЩ�򵥵ķ��������磬��������������Էֱ�ó��ҵĲ����ڽ�������8�㵽9��ķ�������PV�����ÿ�����UV���Ͷ���IP����IP����</p>
<pre class="prettyprint linenums">awk -F^A '{print $1}' ma-2012102409.log | wc -l
awk -F^A '{print $12}' ma-2012102409.log | uniq | wc -l
awk -F^A '{print $2}' ma-2012102409.log | uniq | wc -l</pre>
<p>��������Ķ��������ǿ��������ھ�</p>
<h1>�ο�</h1>
<p>GA�Ŀ������ĵ���<a title="https://developers.google.com/analytics/devguides/collection/gajs/" href="https://developers.google.com/analytics/devguides/collection/gajs/" target="_blank">https://developers.google.com/analytics/devguides/collection/gajs/</a></p>
<p>һƪ����ʵ��nginx����־�����£�<a title="http://blog.linezing.com/2011/11/%E4%BD%BF%E7%94%A8nginx%E8%AE%B0%E6%97%A5%E5%BF%97" href="http://blog.linezing.com/2011/11/%E4%BD%BF%E7%94%A8nginx%E8%AE%B0%E6%97%A5%E5%BF%97" target="_blank">http://blog.linezing.com/2011/11/%E4%BD%BF%E7%94%A8nginx%E8%AE%B0%E6%97%A5%E5%BF%97</a></p>
<p>����Nginx���Բο���<a title="http://wiki.nginx.org/Main" href="http://wiki.nginx.org/Main" target="_blank">http://wiki.nginx.org/Main</a></p>
<p>OpenResty�Ĺٷ���վΪ��<a href="http://openresty.org" target="_blank">http://openresty.org</a></p>
<p>ngx_luaģ��ɲο���<a title="https://github.com/chaoslawful/lua-nginx-module" href="https://github.com/chaoslawful/lua-nginx-module" target="_blank">https://github.com/chaoslawful/lua-nginx-module</a></p>
<p>����httpץ��ʹ��<a href="http://www.google.com/chrome" target="_blank">Chrome</a>����������߹��ߣ�����˼ά��ͼʹ��<a href="http://www.xmind.net/" target="_blank">Xmind</a>�����̺ͽṹͼʹ��<a href="http://www.texample.net/tikz/" target="_blank">Tikz PGF</a></p>
