import{_ as n,y as s,x as a,W as t}from"./plugin-vue_export-helper.8685c10c.js";const h='{"title":"Required elements","description":"","frontmatter":{},"headers":[{"level":2,"title":"Minimum required annotations","slug":"minimum-required-annotations"},{"level":2,"title":"Optional elements","slug":"optional-elements"}],"relativePath":"guide/required-elements.md","lastUpdated":1652060727105}',e={},p=t(`<h1 id="required-elements" tabindex="-1">Required elements <a class="header-anchor" href="#required-elements" aria-hidden="true">#</a></h1><p>The OpenAPI specification defines a minimum set of information for a valid document.</p><p>For the most part that consists of some general information about the API like <code>name</code>, <code>version</code> and at least one endpoint.</p><p>The endpoint, in turn, needs to have a path and at least one response.</p><h2 id="minimum-required-annotations" tabindex="-1">Minimum required annotations <a class="header-anchor" href="#minimum-required-annotations" aria-hidden="true">#</a></h2><p>With the above in mind a minimal API with a single endpoint could look like this</p><div class="language-php"><pre><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>

<span class="token keyword">use</span> <span class="token package">OpenApi<span class="token punctuation">\\</span>Attributes</span> <span class="token keyword">as</span> <span class="token constant">OA</span><span class="token punctuation">;</span>

<span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Info</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">title</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;My First API&quot;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">version</span><span class="token punctuation">:</span> <span class="token string double-quoted-string">&quot;0.1&quot;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">OpenApi</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name-definition class-name">MyController</span> <span class="token punctuation">{</span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Get</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">path</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;/api/data.json&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token attribute"><span class="token delimiter punctuation">#[</span><span class="token attribute-content"><span class="token attribute-class-name class-name class-name-fully-qualified">OA<span class="token punctuation">\\</span>Response</span><span class="token punctuation">(</span><span class="token attribute-class-name class-name">response</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token attribute-class-name class-name">description</span><span class="token punctuation">:</span> <span class="token string single-quoted-string">&#39;The data&#39;</span><span class="token punctuation">)</span></span><span class="token delimiter punctuation">]</span></span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getResource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre></div><p>with the resulting OpenAPI document like this</p><div class="language-yaml"><pre><code><span class="token key atrule">openapi</span><span class="token punctuation">:</span> 3.0.0
<span class="token key atrule">info</span><span class="token punctuation">:</span>
  <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&#39;My First API&#39;</span>
  <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;0.1&#39;</span>
<span class="token key atrule">paths</span><span class="token punctuation">:</span>
  <span class="token key atrule">/api/data.json</span><span class="token punctuation">:</span>
    <span class="token key atrule">get</span><span class="token punctuation">:</span>
      <span class="token key atrule">operationId</span><span class="token punctuation">:</span> 236f26ae21b015a60adbce41f8f316e3
      <span class="token key atrule">responses</span><span class="token punctuation">:</span>
        <span class="token key atrule">&#39;200&#39;</span><span class="token punctuation">:</span>
          <span class="token key atrule">description</span><span class="token punctuation">:</span> <span class="token string">&#39;The data&#39;</span>
</code></pre></div><div class="warning custom-block"><p class="custom-block-title">Code locations</p><p>Attributes and annotations can be added anywhere on declarations in code as defined by the PHP docs. These are limited to the extend of what the PHP Reflection APIs supports.</p></div><h2 id="optional-elements" tabindex="-1">Optional elements <a class="header-anchor" href="#optional-elements" aria-hidden="true">#</a></h2><p>Looking at the generated document you will notice that there are some elements that <code>swagger-php</code> adds automatically when they are missing.</p><p>For the most part those are <code>@OA\\OpenApi</code>, <code>@OA\\Components</code> and <code>@OA\\PathItem</code>.</p>`,13),o=[p];function i(c,l,u,r,d,k){return a(),s("div",null,o)}var g=n(e,[["render",i]]);export{h as __pageData,g as default};
