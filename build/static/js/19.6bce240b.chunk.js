(this.webpackJsonpyam=this.webpackJsonpyam||[]).push([[19],{1531:function(t,e,r){"use strict";r.r(e),r.d(e,"WalletLinkConnector",(function(){return a}));var n=r(814);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var a=function(t){var e,n;function a(e){var r,n=e.url,o=e.appName,i=e.appLogoUrl,a=e.darkMode;return(r=t.call(this,{supportedChainIds:[1]})||this).url=n,r.appName=o,r.appLogoUrl=i,r.darkMode=a||!1,r}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,i(e,n);var c=a.prototype;return c.activate=function(){try{var t=this,e=function(){return Promise.resolve(t.provider.send("eth_requestAccounts").then((function(t){return t[0]}))).then((function(e){return t.provider.on("chainChanged",t.handleChainChanged),t.provider.on("accountsChanged",t.handleAccountsChanged),{provider:t.provider,chainId:1,account:e}}))},n=function(){if(!t.walletLink)return Promise.resolve(Promise.all([r.e(1),r.e(7)]).then(r.t.bind(null,1473,7)).then((function(t){var e;return null!=(e=null==t?void 0:t.default)?e:t}))).then((function(e){t.walletLink=new e(o({appName:t.appName,darkMode:t.darkMode},t.appLogoUrl?{appLogoUrl:t.appLogoUrl}:{})),t.provider=t.walletLink.makeWeb3Provider(t.url,1)}))}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(i){return Promise.reject(i)}},c.getProvider=function(){try{return Promise.resolve(this.provider)}catch(t){return Promise.reject(t)}},c.getChainId=function(){return Promise.resolve(1)},c.getAccount=function(){try{return Promise.resolve(this.provider.send("eth_accounts").then((function(t){return t[0]})))}catch(t){return Promise.reject(t)}},c.deactivate=function(){this.provider.removeListener("chainChanged",this.handleChainChanged),this.provider.removeListener("accountsChanged",this.handleAccountsChanged)},c.close=function(){try{return this.provider.close(),this.emitDeactivate(),Promise.resolve()}catch(t){return Promise.reject(t)}},c.handleChainChanged=function(t){this.emitUpdate({chainId:t})},c.handleAccountsChanged=function(t){this.emitUpdate({account:t[0]})},a}(n.a)},814:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(95),o=r(97);var i=function(t){var e,r;function n(e){var r,n=(void 0===e?{}:e).supportedChainIds;return(r=t.call(this)||this).supportedChainIds=n,r}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var i=n.prototype;return i.emitUpdate=function(t){this.emit(o.a.Update,t)},i.emitError=function(t){this.emit(o.a.Error,t)},i.emitDeactivate=function(){this.emit(o.a.Deactivate)},n}(n.EventEmitter)}}]);