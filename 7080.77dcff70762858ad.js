"use strict";(self.webpackChunkoracle=self.webpackChunkoracle||[]).push([[7080],{7080:(h,a,s)=>{s.r(a),s.d(a,{rux_tag:()=>l});var t=s(54452),o=s(30857);const e={unknown:"UNK",pass:"PASS",fail:"FAIL"},l=(()=>{let n=class{constructor(i){(0,t.r)(this,i),this.status="unknown",this.hasSlot=!1}connectedCallback(){this._handleSlotChange=this._handleSlotChange.bind(this),this.hasSlot=(0,o.h)(this.el)}_handleSlotChange(){this.hasSlot=(0,o.h)(this.el)}_getValidStatus(){if(this.status)return e[this.status]?e[this.status]:e.unknown}render(){return(0,t.h)(t.H,{class:{"is-undefined":void 0===e[this.status]}},(0,t.h)("div",{part:"container"},(0,t.h)("slot",{onSlotchange:this._handleSlotChange}),this.hasSlot?null:this._getValidStatus()))}get el(){return(0,t.g)(this)}};return n.style=":host{display:flex;justify-content:center;align-items:center;border-radius:var(--radius-base, 3px);font-size:var(--font-body-2-bold-font-size, 0.875rem);font-weight:var(--font-body-2-bold-font-weight, 700);line-height:var(--font-body-2-bold-line-height, calc(20 / 14));font-family:var(--font-body-2-bold-font-family, 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif);letter-spacing:var(--font-body-2-bold-letter-spacing, 0.005em);padding:0.25rem 0.625rem;text-align:center;color:var(--color-palette-neutral-000, #ffffff);box-sizing:border-box}:host(.is-undefined){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-off);background:var(--color-palette-grey-800, #3c3e42);box-shadow:var(--tag-shadow-inner-unknown, inset 0px 0px 5px 0px rgb(164, 171, 182))}:host([status=pass]){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-normal-on-dark, #56f000);background:var(--color-palette-green-900, #005a00);box-shadow:var(--tag-shadow-inner-pass, inset 0px 0px 5px 0px rgb(86, 240, 0))}:host([status=fail]){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-critical-on-dark, #ff3838);background:var(--color-palette-red-900, #661102);box-shadow:var(--tag-shadow-inner-fail, inset 0px 0px 5px 0px rgb(255, 56, 56))}:host([status=unknown]){height:1.5rem;width:3.75rem;border:1px solid var(--status-symbol-color-fill-off-on-dark, #a4abb6);background:var(--color-palette-grey-800, #3c3e42);box-shadow:var(--tag-shadow-inner-unknown, inset 0px 0px 5px 0px rgb(164, 171, 182))}",n})()}}]);