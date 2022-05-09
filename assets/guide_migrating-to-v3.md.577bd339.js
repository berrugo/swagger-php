import{_ as e,y as a,x as t,W as o}from"./plugin-vue_export-helper.8685c10c.js";const u='{"title":"Migrating to v3","description":"","frontmatter":{},"headers":[{"level":2,"title":"The default output changed from json to yaml","slug":"the-default-output-changed-from-json-to-yaml"},{"level":2,"title":"Updated CLI","slug":"updated-cli"},{"level":2,"title":"Changed annotations","slug":"changed-annotations"},{"level":3,"title":"SWG is renamed to OA","slug":"swg-is-renamed-to-oa"},{"level":3,"title":"@SWG\\\\Swagger() is renamed to @OA\\\\OpenApi()","slug":"swg-swagger-is-renamed-to-oa-openapi"},{"level":3,"title":"@SWG\\\\Path() is renamed to @OA\\\\PathItem()","slug":"swg-path-is-renamed-to-oa-pathitem"},{"level":3,"title":"@SWG\\\\Definition() is removed","slug":"swg-definition-is-removed"},{"level":3,"title":"@SWG\\\\Path is removed","slug":"swg-path-is-removed"},{"level":3,"title":"Consumes, produces field is removed from OpenAPI specification","slug":"consumes-produces-field-is-removed-from-openapi-specification"},{"level":3,"title":"Rename parameter references","slug":"rename-parameter-references"},{"level":3,"title":"Rename response references","slug":"rename-response-references"},{"level":3,"title":"Renamed cli","slug":"renamed-cli"},{"level":3,"title":"More details about differences:","slug":"more-details-about-differences"}],"relativePath":"guide/migrating-to-v3.md","lastUpdated":1652060727105}',r={},i=o('<h1 id="migrating-to-v3" tabindex="-1">Migrating to v3 <a class="header-anchor" href="#migrating-to-v3" aria-hidden="true">#</a></h1><p>Swagger-PHP 3.x generates a openapi.json file that follows the <a href="https://github.com/OAI/OpenAPI-Specification" target="_blank" rel="noopener noreferrer">OpenAPI Version 3.0.x Specification</a>.</p><p>If you need to output the older 2.x specification use OpenApi-php 2.x</p><h2 id="the-default-output-changed-from-json-to-yaml" tabindex="-1">The default output changed from json to yaml <a class="header-anchor" href="#the-default-output-changed-from-json-to-yaml" aria-hidden="true">#</a></h2><p>This aligns better with the direction of the swagger documentation and examples. Annotations can&#39;t be used as string anymore, you&#39;ll need to call <code>toYaml()</code> or <code>toJson()</code> if you prefer the json format.</p><h2 id="updated-cli" tabindex="-1">Updated CLI <a class="header-anchor" href="#updated-cli" aria-hidden="true">#</a></h2><ul><li>Added colors</li><li>No output for succesful execution (Removed summary)</li><li>non-zero exit when an error occured.</li><li>Defaults to yaml</li><li>Defaults to stdout. To save to openapi.yaml use <code>-o</code> or <code>&gt;</code></li></ul><h2 id="changed-annotations" tabindex="-1">Changed annotations <a class="header-anchor" href="#changed-annotations" aria-hidden="true">#</a></h2><h3 id="swg-is-renamed-to-oa" tabindex="-1">SWG is renamed to OA <a class="header-anchor" href="#swg-is-renamed-to-oa" aria-hidden="true">#</a></h3><p>The namespace is renamed from SWG (Swagger) to OA (OpenApi)</p><h3 id="swg-swagger-is-renamed-to-oa-openapi" tabindex="-1">@SWG\\Swagger() is renamed to @OA\\OpenApi() <a class="header-anchor" href="#swg-swagger-is-renamed-to-oa-openapi" aria-hidden="true">#</a></h3><h3 id="swg-path-is-renamed-to-oa-pathitem" tabindex="-1">@SWG\\Path() is renamed to @OA\\PathItem() <a class="header-anchor" href="#swg-path-is-renamed-to-oa-pathitem" aria-hidden="true">#</a></h3><p>The specification uses the term &quot;Path Item Object&quot;, updated the annotation to reflect that.</p><h3 id="swg-definition-is-removed" tabindex="-1">@SWG\\Definition() is removed <a class="header-anchor" href="#swg-definition-is-removed" aria-hidden="true">#</a></h3><p>Use @OA\\Schema() instead of @OA\\Definition() and update the references from &quot;#/definitions/something&quot; to &quot;#/components/schemas/something&quot;.</p><h3 id="swg-path-is-removed" tabindex="-1">@SWG\\Path is removed <a class="header-anchor" href="#swg-path-is-removed" aria-hidden="true">#</a></h3><p>Use @OA\\PathItem instead of @SWG\\Path and update references.</p><h3 id="consumes-produces-field-is-removed-from-openapi-specification" tabindex="-1">Consumes, produces field is removed from OpenAPI specification <a class="header-anchor" href="#consumes-produces-field-is-removed-from-openapi-specification" aria-hidden="true">#</a></h3><p>Use @OA\\MediaType to set data format.</p><h3 id="rename-parameter-references" tabindex="-1">Rename parameter references <a class="header-anchor" href="#rename-parameter-references" aria-hidden="true">#</a></h3><p>Rename <code>#/parameters/{parameter_name}</code> to <code>#/components/parameters/{parameter_name}</code></p><h3 id="rename-response-references" tabindex="-1">Rename response references <a class="header-anchor" href="#rename-response-references" aria-hidden="true">#</a></h3><p>Rename <code>#/responses/{response}</code> to <code>#/components/responses/{response}</code></p><h3 id="renamed-cli" tabindex="-1">Renamed cli <a class="header-anchor" href="#renamed-cli" aria-hidden="true">#</a></h3><p>Renamed swagger to openapi</p><h3 id="more-details-about-differences" tabindex="-1">More details about differences: <a class="header-anchor" href="#more-details-about-differences" aria-hidden="true">#</a></h3><p><a href="https://blog.readme.io/an-example-filled-guide-to-swagger-3-2/" target="_blank" rel="noopener noreferrer">A Visual Guide to What&#39;s New in Swagger 3.0</a></p>',27),n=[i];function s(d,h,l,c,p,m){return t(),a("div",null,n)}var g=e(r,[["render",s]]);export{u as __pageData,g as default};
