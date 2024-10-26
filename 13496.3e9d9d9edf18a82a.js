"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[13496],{13496:(p,r,o)=>{o.r(r),o.d(r,{rux_global_status_bar:()=>l});var a=o(54452);const n=({domain:e,name:t,version:i},c)=>(0,a.h)("div",{class:"app-meta",part:"app-meta"},(0,a.h)("div",{class:"app-info-wrapper"},e&&(0,a.h)("h1",{class:"app-domain"},e),t&&(0,a.h)("h1",{class:"app-name"},t),i&&(0,a.h)("span",{class:"app-version"},i)),c),l=(()=>{let e=class{constructor(t){(0,a.r)(this,t),this.includeIcon=!1,this.appState="",this.appStateColor="tag1",this.username="",this.appDomain=void 0,this.appName=void 0,this.appVersion=void 0,this.menuIcon="apps"}render(){return(0,a.h)(a.H,null,(0,a.h)("header",{part:"container"},(0,a.h)("slot",{name:"left-side"},this.includeIcon&&(0,a.h)("rux-icon",{icon:`${this.menuIcon}`,size:"small",class:this.appState||this.username?"shifted-up":"",exportparts:"icon"})),(0,a.h)("slot",{name:"app-meta"},(this.appDomain||this.appName||this.appVersion)&&(0,a.h)(n,{domain:this.appDomain,name:this.appName,version:this.appVersion},(0,a.h)("div",{class:"app-state-wrapper"},this.appState&&(0,a.h)("div",{class:`app-state ${this.appStateColor}`,part:"app-state"},this.appState),this.username&&(0,a.h)("div",{class:"username",part:"username"},this.username)))),(0,a.h)("div",{class:"slotted-content",part:"middle"},(0,a.h)("slot",null)),(0,a.h)("slot",{name:"right-side"})))}};return e.style=":host{display:block;position:sticky;z-index:50;top:0;left:0;height:var(--spacing-24, 6rem);width:-webkit-fill-available;width:-moz-available;width:stretch;padding:0 calc(var(--spacing-6, 1.5rem) - var(--spacing-1, 0.25rem));box-sizing:border-box;background-color:var(--gsb-color-background, #172635);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;contain:layout;line-height:var(--line-height-base, 1.5rem);font-family:var(--font-body-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-1-font-size, 1rem);font-weight:var(--font-body-1-font-weight, 400);letter-spacing:var(--font-body-1-letter-spacing, 0.005em);}:host ::-webkit-scrollbar{width:16px;height:16px;background-color:transparent}:host ::-webkit-scrollbar-thumb{background-color:var(--color-border-interactive-muted, #2b659b);border-radius:8px;border:3px solid transparent;background-clip:padding-box}:host ::-webkit-scrollbar-thumb:vertical{border-left-width:4px}:host ::-webkit-scrollbar-thumb:horizontal{border-top-width:4px}:host ::-webkit-scrollbar-track,:host ::-webkit-scrollbar-corner{background-color:var(--color-background-surface-default, #1b2d3e)}:host ::-webkit-scrollbar-track:vertical{box-shadow:var(--scrollbar-shadow-inner-vertical, inset 3px 3px 3px 0px rgba(0, 0, 0, 0.5))}:host ::-webkit-scrollbar-track:horizontal{box-shadow:var(--scrollbar-shadow-inner-horizontal, inset 1px 3px 3px 0px rgba(0, 0, 0, 0.5))}:host([hidden]){display:none}header{display:flex;overflow:hidden;padding:0 var(--spacing-1, 0.25rem);height:100%;width:100%;align-items:center;justify-content:space-between;box-sizing:border-box}header::-webkit-scrollbar-thumb:active,header::-webkit-scrollbar-thumb:hover{background-color:var(--color-background-interactive-default, #3a81bf)}slot[name=left-side]>*,::slotted(*[slot=left-side]){margin-right:var(--spacing-2, 0.5rem)}slot[name=left-side]>rux-icon,::slotted(rux-icon[slot=left-side]){height:calc(var(--spacing-8, 2rem) + var(--spacing-050, 0.125rem));font-size:var(--spacing-8, 2rem)}slot[name=left-side]>.shifted-up,::slotted(.shifted-up[slot=left-side]){height:calc(var(--spacing-14, 3.5rem) + var(--spacing-050, 0.125rem))}slot[name=right-side]>rux-monitoring-icon,::slotted(rux-monitoring-icon[slot=right-side]){display:flex;align-items:center;padding-right:calc(var(--spacing-4, 1rem) + var(--spacing-2, 0.5rem));padding-top:var(--spacing-2, 0.5rem)}.app-meta,::slotted(*[slot=app-meta]){display:inline-flex;flex-wrap:wrap;padding:var(--spacing-0, 0rem);margin:var(--spacing-0, 0rem) auto var(--spacing-0, 0rem) var(--spacing-0, 0rem);color:var(--color-palette-neutral-000, #ffffff);white-space:nowrap}.app-info-wrapper{flex-basis:100%;display:flex;align-items:baseline;min-height:var(--spacing-10, 2.5rem);padding-bottom:var(--spacing-1, 0.25rem);min-width:10.625rem}.app-meta h1{margin-bottom:var(--spacing-0, 0rem);margin-top:var(--spacing-0, 0rem);font-family:var(--font-heading-1-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-1-font-size, 2.125rem);font-weight:var(--font-heading-1-font-weight, 400);letter-spacing:var(--font-heading-1-letter-spacing, 0.0025em);line-height:var(--font-heading-1-line-height, calc(40 / 34))}.app-meta h1.app-domain{margin-right:var(--spacing-2, 0.5rem);font-family:var(--font-heading-1-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-1-bold-font-size, 2.125rem);font-weight:var(--font-heading-1-bold-font-weight, 700);letter-spacing:var(--font-heading-1-bold-letter-spacing, 0.0025em);line-height:var(--font-heading-1-line-height, calc(40 / 34))}.app-name{margin-right:var(--spacing-2, 0.5rem)}.app-version{display:inline-block;font-family:var(--font-heading-6-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-heading-6-font-size, 1.125rem);font-weight:var(--font-heading-6-font-weight, 300);letter-spacing:var(--font-heading-6-letter-spacing, 0em);line-height:var(--font-heading-6-line-height, calc(24 / 18))}.app-state-wrapper{display:flex}.app-state{box-sizing:border-box;color:var(--color-palette-neutral-000, #ffffff);background-color:var(--color-palette-neutral-1000, #000000);border-radius:var(--radius-base, 3px);font-family:var(--font-body-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-2-font-size, 0.875rem);font-weight:var(--font-body-2-font-weight, 400);letter-spacing:var(--font-body-2-letter-spacing, 0.005em);line-height:var(--line-height-xs, 1rem);padding:calc(var(--spacing-050, 0.125rem) + var(--spacing-025, 0.0625rem)) var(--spacing-2, 0.5rem);text-align:center;margin-right:var(--spacing-2, 0.5rem);white-space:nowrap}.username{box-sizing:border-box;flex-basis:50%;font-family:var(--font-body-2-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);font-size:var(--font-body-2-font-size, 0.875rem);font-weight:var(--font-body-2-font-weight, 400);letter-spacing:var(--font-body-2-letter-spacing, 0.005em);line-height:var(--line-height-xs, 1rem);padding:calc(var(--spacing-050, 0.125rem) + var(--spacing-025, 0.0625rem)) var(--spacing-0, 0rem);height:calc(var(--spacing-6, 1.5rem) - var(--spacing-050, 0.125rem))}.slotted-content{display:inline-flex;justify-content:center;flex-basis:100%}::slotted(*){--opacity-disabled:40%;--color-background-base-default:#101923;--color-background-base-header:#172635;--color-background-base-hover:#142435;--color-background-base-selected:#1c3f5e;--color-background-surface-default:#1b2d3e;--color-background-surface-header:#172635;--color-background-surface-hover:#1c3851;--color-background-surface-selected:#1c3f5e;--color-background-interactive-default:#4dacff;--color-background-interactive-hover:#92cbff;--color-background-interactive-muted:#2b659b;--color-text-primary:#ffffff;--color-text-secondary:#d4d8dd;--color-text-placeholder:#a4abb6;--color-text-inverse:#080c11;--color-text-interactive-default:#4dacff;--color-text-interactive-hover:#92cbff;--color-text-white:#ffffff;--color-text-black:#000000;--color-text-error:#ff3838;--color-border-interactive-default:#4dacff;--color-border-interactive-hover:#92cbff;--color-border-interactive-muted:#2b659b;--color-border-error:#ff3838;--color-border-focus-default:#da9ce7;--color-status-critical:#ff3838;--color-status-serious:#ffb302;--color-status-caution:#fce83a;--color-status-normal:#56f000;--color-status-standby:#2dccff;--color-status-off:#a4abb6;--color-classification-topsecretsci:#fce83a;--color-classification-topsecret:#ff8c00;--color-classification-secret:#c8102e;--color-classification-confidential:#0033a0;--color-classification-cui:#502b85;--color-classification-unclassified:#007a33;--color-data-visualization-1:#00c7cb;--color-data-visualization-2:#938bdb;--color-data-visualization-3:#4dacff;--color-data-visualization-4:#70dde0;--color-data-visualization-5:#c9c5ed;--color-data-visualization-6:#92cbff;--color-data-visualization-7:#a1e9eb;--color-data-visualization-8:#b7dcff;--border-width-focus-default:1px;--spacing-focus-default:0.125rem;--shadow-overlay:0px 4px 4px 1px rgba(0, 0, 0, 0.45)}.app-state.tag1{background:var(--color-palette-teal-600, #009fa3)}.app-state.tag2{background:var(--color-palette-purple-600, #6058a8)}.app-state.tag3{background:var(--color-palette-pink-600, #81009a)}.app-state.tag4{background:var(--color-palette-hotorange-600, #af420a)}",e})()}}]);